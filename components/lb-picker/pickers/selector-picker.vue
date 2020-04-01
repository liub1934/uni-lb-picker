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
            item[props.value] === selectValue ? 'lb-picker-column-active' : ''
          ]"
          :key="i"
          :style="{ height: columnHeight, lineHeight: columnHeight }">
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
    value: [String, Number],
    list: Array,
    props: Object,
    visible: Boolean,
    height: String,
    changeOnInit: Boolean
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
    this.init()
  },
  methods: {
    init () {
      if (this.list && this.list.length) {
        let index = this.list.findIndex(
          item => item[this.props.value] === this.value
        )
        index = index > -1 ? index : 0
        this.pickerValue = [index]
        this.selectValue = this.list[index][this.props.value]
        this.$emit('change', {
          value: this.selectValue,
          item: this.list[index],
          index: index,
          change: this.changeOnInit
        })
      }
    },
    handleChange (item) {
      const index = item.detail.value[0] || 0
      this.selectValue = this.list[index][this.props.value]
      this.pickerValue = item.detail.value
      this.$emit('change', {
        value: this.selectValue,
        item: this.list[index],
        index: index,
        change: true
      })
    }
  },
  watch: {
    list () {
      this.init()
    },
    value (newVal) {
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/picker-item.scss";
</style>
