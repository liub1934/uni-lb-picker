<template>
  <view class="selector-picker picker-item"
    :style="{ height: height }">
    <picker-view :value="pickerValue"
      :indicator-style="indicatorStyle"
      :style="{ height: height }"
      @change="handleChange">
      <picker-view-column v-for="(column, index) in pickerColumns"
        :key="index">
        <view v-for="(item, i) in column"
          :class="[
            'lb-picker-column',
            item[props.value] || item === selectValue[index]
              ? 'lb-picker-column-active'
              : ''
          ]"
          :key="i"
          :style="{ height: columnHeight, 'line-height': columnHeight }">
          <view class="lb-picker-column-label">
            {{ item[props.label] || item }}
          </view>
        </view>
      </picker-view-column>
    </picker-view>
  </view>
</template>

<script>
import { getIndicatorHeight, isObject } from '../utils.js'
const indicatorHeight = getIndicatorHeight()
export default {
  props: {
    value: Array,
    list: Array,
    props: Object,
    visible: Boolean,
    height: String,
    indicatorHeight: Number
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
    this.init('init')
  },
  methods: {
    init (changeType) {
      if (this.list && this.list.length) {
        this.pickerColumns = this.list
        this.setPickerValue()
        this.$emit('change', {
          value: this.selectValue,
          item: this.selectItem,
          index: this.pickerValue,
          change: changeType
        })
      }
    },
    setPickerValue (value) {
      this.list.forEach((item, i) => {
        let index = item.findIndex(item => {
          return isObject(item)
            ? item[this.props.value] === this.value[i]
            : item === this.value[i]
        })
        index = index > -1 ? index : 0
        const columnItem = this.list[i][index]
        const valueItem = isObject(columnItem)
          ? columnItem[this.props.value]
          : columnItem
        this.$set(this.pickerValue, i, index)
        this.$set(this.selectValue, i, valueItem)
        this.$set(this.selectItem, i, columnItem)
      })
    },

    handleChange (item) {
      const pickerValue = item.detail.value
      const columnIndex = pickerValue.findIndex(
        (item, i) => item !== this.pickerValue[i]
      )
      if (columnIndex > -1) {
        const valueIndex = pickerValue[columnIndex]
        const columnItem = this.list[columnIndex][valueIndex]
        const valueItem = isObject(columnItem)
          ? columnItem[this.props.value]
          : columnItem
        this.pickerValue = pickerValue
        this.$set(this.selectValue, columnIndex, valueItem)
        this.$set(this.selectItem, columnIndex, columnItem)
        this.$emit('change', {
          value: this.selectValue,
          item: this.selectItem,
          index: this.pickerValue,
          change: 'scroll'
        })
      }
    }
  },
  watch: {
    list () {
      this.init('list')
    },
    value (newVal) {
      this.init('value')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/picker-item.scss";
</style>
