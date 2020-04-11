<template>
  <view class="selector-picker picker-item"
    :style="{ height: height }">
    <picker-view :value="pickerValue"
      :indicator-style="indicatorStyle"
      :style="{ height: height }"
      @change="handleChange">
      <picker-view-column>
        <view v-for="(item, i) in list"
          :class="[
            'lb-picker-column',
            item[props.value] || item === selectValue
              ? 'lb-picker-column-active'
              : ''
          ]"
          :key="i"
          :style="{ height: columnHeight, lineHeight: columnHeight }">
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
    value: [String, Number],
    list: Array,
    props: Object,
    visible: Boolean,
    height: String
  },
  data () {
    return {
      pickerValue: [],
      selectValue: '',
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
        let index = this.list.findIndex(item => {
          return isObject(item)
            ? item[this.props.value] === this.value
            : item === this.value
        })
        index = index > -1 ? index : 0
        const listItem = this.list[index]
        this.pickerValue = [index]
        this.selectValue = isObject(listItem)
          ? listItem[this.props.value]
          : listItem
        this.$emit('change', {
          value: this.selectValue,
          item: listItem,
          index: index,
          change: changeType
        })
      }
    },
    handleChange (item) {
      const index = item.detail.value[0] || 0
      const listItem = this.list[index]
      this.selectValue = isObject(listItem)
        ? listItem[this.props.value]
        : listItem
      this.pickerValue = item.detail.value
      this.$emit('change', {
        value: this.selectValue,
        item: listItem,
        index: index,
        change: 'scroll'
      })
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
