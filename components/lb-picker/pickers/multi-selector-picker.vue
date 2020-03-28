<template>
  <view class="multi-selector picker-item"
    :style="{ height: height }">
    <picker-view :value="pickerValue"
      :indicator-style="indicatorStyle"
      :style="{ height: height }"
      @change="handleChange">
      <picker-view-column v-for="(column, index) in pickerColumns"
        :key="index">
        <view v-for="(item, i) in column || []"
          :class="[
            'lb-picker-column',
            item[props.value] === selectValue[index]
              ? 'lb-picker-column-active'
              : ''
          ]"
          :key="i"
          :style="{ height: columnHeight, 'line-height': columnHeight }">
          <view class="lb-picker-column-label">
            {{ item[props.label] }}
          </view>
        </view>
      </picker-view-column>
    </picker-view>
  </view>
</template>

<script>
import { getIndicatorHeight } from '../utils.js'
const indicatorHeight = getIndicatorHeight()
export default {
  props: {
    value: Array,
    list: Array,
    props: Object,
    level: Number,
    keep: {
      type: Boolean,
      default: true
    },
    visible: Boolean,
    height: String,
    changeOnInit: Boolean
  },
  data () {
    return {
      pickerValue: [],
      pickerColumns: [],
      selectValue: [],
      selectItem: [],
      columnHeight: indicatorHeight + 'px',
      indicatorStyle: `height: ${indicatorHeight}px`
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.setPickerItems(this.list)
      if (this.changeOnInit) {
        this.$emit('change', {
          value: this.selectValue,
          item: this.selectItem,
          index: this.pickerValue
        })
      }
    },
    handleChange (item) {
      const pickerValue = item.detail.value
      const columnIndex = pickerValue.findIndex(
        (item, i) => item !== this.pickerValue[i]
      )
      const valueIndex = pickerValue[columnIndex]
      this.setPickerChange(pickerValue, valueIndex, columnIndex)
    },
    setPickerChange (pickerValue, valueIndex, columnIndex) {
      for (let i = 0; i < this.level; i++) {
        if (i > columnIndex) {
          pickerValue[i] = 0
          const column =
            this.pickerColumns[i - 1][valueIndex] ||
            this.pickerColumns[i - 1][0]
          this.$set(this.pickerColumns, i, column[this.props.children] || [])
          valueIndex = 0
        }
        this.pickerValue = pickerValue
        this.selectItem[i] = this.pickerColumns[i][pickerValue[i]]
        if (this.selectItem[i]) {
          this.selectValue[i] = this.selectItem[i][this.props.value]
        } else {
          const spliceNum = this.level - i
          this.pickerValue.splice(i, spliceNum)
          this.selectValue.splice(i, spliceNum)
          this.selectItem.splice(i, spliceNum)
          this.pickerColumns.splice(i, spliceNum)
          break
        }
      }
      this.$emit('change', {
        value: this.selectValue,
        item: this.selectItem,
        index: this.pickerValue
      })
    },
    setPickerItems (list = [], index = 0) {
      if (!list.length) return
      const defaultValue = this.value || []
      if (index < this.level) {
        const value = defaultValue[index] || ''
        let i = list.findIndex(item => item[this.props.value] === value)
        i = i > -1 ? i : 0
        this.$set(this.pickerValue, index, i)
        this.$set(this.pickerColumns, index, list)
        if (list[i]) {
          this.$set(this.selectValue, index, list[i][this.props.value])
          this.$set(this.selectItem, index, list[i])
          this.setPickerItems(list[i][this.props.children] || [], index + 1)
        }
      }
    }
  },
  watch: {
    visible (newVisible) {
      if (newVisible && !this.keep) {
        this.init()
      }
    },
    value (newVal) {
      this.init()
    },
    list () {
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/picker-item.scss";
</style>
