<template>
  <view class="lb-selector-picker lb-picker-item"
    :style="{ height: height }">
    <picker-view :value="pickerValue"
      :style="{ height: height }"
      :indicator-style="indicatorStyle"
      :immediate-change="immediateChange"
      @change="handleChange">
      <picker-view-column v-for="(column, index) in pickerColumns"
        :key="column.name">
        <view v-for="item in column.list || []"
          :class="[
            'lb-picker-column',
            item.value === selectValue[index]
              ? 'lb-picker-column-active'
              : ''
          ]"
          :key="item.value">
          <!-- #ifdef APP-PLUS || H5 -->
          <text :class="[
              'lb-picker-column-label',
              `lb-picker-column-label-${align}`
            ]"
            :style="[
              item.value === selectValue[index]
                ? activeColumnStyle
                : columnStyle
            ]">{{ item.label }}</text>
          <!-- #endif -->

          <!-- #ifndef APP-PLUS || H5 -->
          <text :class="[
              'lb-picker-column-label',
              `lb-picker-column-label-${align}`
            ]">{{ item.label }}</text>
          <!-- #endif -->
        </view>
      </picker-view-column>
    </picker-view>
  </view>
</template>

<script>
import { isFunction } from '../utils'
const INVALID_DATE = 'Invalid Date'
const dayjs = require('../lib/dayjs.min.js')
const objectSupport = require('../lib/object-support.min.js')
const customParseFormat = require('../lib/custom-parse-format.min.js')
dayjs.extend(objectSupport)
dayjs.extend(customParseFormat)
export default {
  props: {
    value: String,
    mode: String,
    visible: Boolean,
    height: String,
    immediateChange: Boolean,
    columnStyle: Object,
    activeColumnStyle: Object,
    align: String,
    formatter: Function,
    format: String,
    displayFormat: String,
    startDate: String,
    endDate: String,
    defaultTimeLimit: Number,
    isShowChinese: Boolean,
    chConfig: Object,
    filter: Function
  },
  data () {
    return {
      pickerValue: [],
      pickerColumns: [],
      selectValue: [],
      selectItem: null,
      isConfirmChange: false,
      indicatorStyle: `height: 34px`,
      dayjs: dayjs,
      startInfo: {},
      endInfo: {}
    }
  },
  created () {
    this.init('init')
  },
  methods: {
    init (changeType) {
      this.startInfo = this.toObject(
        this.startDate
          ? this.startDate
          : this.dayjs().subtract(this.defaultTimeLimit, 'year').$d
      )
      this.endInfo = this.toObject(
        this.endDate
          ? this.endDate
          : this.dayjs().add(this.defaultTimeLimit, 'year').$d
      )
      this.selectDate = this.value
        ? this.dayjs(this.value, this.format)
        : new Date()
      if (!this.validate('date')) {
        throw new Error('日期格式不合法')
      }
      if (!this.validate('displayFormat')) {
        throw new Error('display-format参数异常')
      }
      if (this.startInfo.timestamp > this.endInfo.timestamp) {
        throw new Error('开始结束日期异常，startDate不得大于endDate')
      }
      this.selectItem = this.toObject(this.selectDate)
      this.setColumnData()
      const value = this.getValueDate()
      this.$emit('change', {
        value: value.format(this.format),
        valueArr: this.selectValue,
        item: this.selectItem,
        index: this.pickerValue,
        change: changeType
      })
    },
    handleChange (item) {
      const pickerValue = item.detail.value
      const columnIndex = pickerValue.findIndex(
        (item, i) => item !== this.pickerValue[i]
      )
      if (columnIndex > -1) {
        const valueIndex = pickerValue[columnIndex]
        const columnItem = this.pickerColumns[columnIndex]
        const columnName = columnItem.name
        const valueItem = columnItem.list[valueIndex]
        this.pickerValue = pickerValue
        this.$set(this.selectValue, columnIndex, valueItem.value)
        this.$set(this.selectItem, columnName, valueItem.value)
        this.setColumnData(columnIndex)
        const value = this.getValueDate()
        this.$emit('change', {
          value: value.format(this.format),
          valueArr: this.selectValue,
          item: this.selectItem,
          index: this.pickerValue,
          change: 'scroll'
        })
      }
    },
    getLabel (value, name, format, $d, rowIndex, columnIndex) {
      const ch = this.isShowChinese ? this.chConfig[name] || '' : ''
      let label =
        value < 10 && format.length > 1 ? `0${value}${ch}` : value + ch
      if (this.formatter && isFunction(this.formatter)) {
        const item = { name, format, value, $d }
        label = this.formatter({ item, rowIndex, columnIndex }) || label
      }
      return label
    },
    getValueDate (dateObj = {}) {
      let selectItem = {
        ...this.selectItem,
        ...dateObj
      }
      selectItem.month = selectItem.month - 1
      return this.dayjs(selectItem)
    },
    setColumnData (n = 0) {
      const formatArr = this.displayFormat.split('-')
      const formatObj = {
        YY: 'year',
        YYYY: 'year',
        M: 'month',
        MM: 'month',
        D: 'day',
        DD: 'day',
        h: 'hour',
        HH: 'hour',
        h: 'hour',
        hh: 'hour',
        m: 'minute',
        mm: 'minute',
        s: 'second',
        ss: 'second'
      }
      formatArr.forEach((item, index) => {
        if (index >= n) {
          const name = formatObj[item]
          const obj = {
            name: name,
            list: this.getColumnData(name, item, index)
          }
          let value = this.selectItem[name]
          if (index !== n) {
            this.$set(this.pickerColumns, index, obj)
          }
          let n = obj.list.findIndex(l => l.value === value)
          if (n < 0) {
            const l = obj.list.length - 1
            const firstValue = obj.list[0].value
            const lastValue = obj.list[l].value
            if (value < firstValue) {
              n = 0
              value = firstValue
            }
            if (value > lastValue) {
              n = l
              value = lastValue
            }
            if (n < 0) {
              n = 0
              value = firstValue
            }
          }
          this.$set(this.pickerValue, index, n)
          this.$set(this.selectValue, index, value)
          this.$set(this.selectItem, name, value)
        }
      })
    },
    isSame (name, type = 'startInfo') {
      let same = true
      const arr = ['year', 'month', 'day', 'hour', 'minute', 'second']
      const index = arr.findIndex(item => item === name)
      if (index > -1) {
        const slice = arr.slice(0, index + 1)
        for (let i = 0; i < slice.length; i++) {
          same = same && this.selectItem[slice[i]] === this[type][slice[i]]
        }
      }
      return same
    },
    getColumnData (name, format, index) {
      let list = []
      let start = 0
      let end = 0
      let n = 0
      const obj = {
        month: 'year',
        day: 'month',
        hour: 'day',
        minute: 'hour',
        second: 'minute'
      }
      switch (name) {
        case 'year':
          start = this.startInfo[name]
          end = this.endInfo[name]
          break
        case 'month':
          start = 1
          end = 12
          break
        case 'day':
          start = 1
          end = new Date(
            this.selectItem.year,
            this.selectItem.month,
            0
          ).getDate()
          break
        case 'hour':
          start = 0
          end = 23
          break
        case 'minute':
          start = 0
          end = 59
          break
        case 'second':
          start = 0
          end = 59
          break
      }
      if (this.isSame(obj[name], 'startInfo')) {
        start = this.startInfo[name]
      }
      if (this.isSame(obj[name], 'endInfo')) {
        end = this.endInfo[name]
      }
      for (let i = start; i <= end; i++) {
        n++
        list.push({
          label: this.getLabel(
            i,
            name,
            format,
            this.getValueDate({ [name]: i }),
            n,
            index
          ),
          value: i
        })
      }
      if (this.filter && isFunction(this.filter)) {
        list = this.filter(name, list) || list
      }
      return list
    },
    validate (type) {
      let valid = true
      switch (type) {
        case 'date':
          valid = this.dayjs(this.selectDate).isValid()
          break
        case 'displayFormat':
          if (this[type]) {
            const arr = [
              'YY',
              'YYYY',
              'M',
              'MM',
              'D',
              'DD',
              'H',
              'HH',
              'h',
              'hh',
              'm',
              'mm',
              's',
              'ss'
            ]
            const formatArr = this.displayFormat.split('-')
            for (let i = 0; i < formatArr.length; i++) {
              const val = formatArr[i]
              const isIn = arr.includes(val)
              if (!isIn) {
                valid = false
                break
              }
            }
          } else {
            valid = false
          }
          break
      }
      return valid
    },
    toObject (val) {
      const d = this.dayjs(val)
      return {
        year: d.$y,
        month: d.$M + 1,
        day: d.$D,
        hour: d.$H,
        minute: d.$m,
        second: d.$s,
        timestamp: d.valueOf(),
        $d: d
      }
    }
  },
  watch: {
    value () {
      if (!this.isConfirmChange) {
        this.init('value')
      }
    },
    displayFormat () {
      this.init('displayFormat')
    },
    startDate () {
      this.init('startDate')
    },
    endDate () {
      this.init('endDate')
    },
    defaultTimeLimit () {
      this.init('defaultTimeLimit')
    },
    isShowChinese () {
      this.init('isShowChinese')
    },
    chConfig () {
      this.init('chConfig')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/picker-item.scss";
</style>
