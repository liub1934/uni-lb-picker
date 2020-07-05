<template>
  <view class="lb-selector-picker lb-picker-item"
    :style="{ height: height }">
    <picker-view :value="pickerValue"
      :style="{ height: height }"
      :indicator-style="indicatorStyle"
      @change="handleChange">
      <picker-view-column>
        <view v-for="(item, i) in list"
          :class="[
            'lb-picker-column',
            (item[props.value] || item) === selectValue
              ? 'lb-picker-column-active'
              : ''
          ]"
          :key="i">
          <text class="lb-picker-column-label">
            {{ item[props.label] || item }}
          </text>
        </view>
      </picker-view-column>
    </picker-view>
  </view>
</template>

<script>
import { isObject } from '../utils'
export default {
  props: {
    value: [String, Number],
    list: Array,
    props: Object,
    visible: Boolean,
    height: String,
    isConfirmChange: Boolean
  },
  data () {
    return {
      pickerValue: [],
      selectValue: '',
      indicatorStyle: `height: 34px`
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
    value (newVal) {
      if (!this.isConfirmChange) {
        this.init('value')
      }
    },
    list () {
      this.init('list')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/picker-item.scss";
</style>
