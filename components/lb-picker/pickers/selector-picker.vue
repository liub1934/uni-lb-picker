<template>
  <view class="lb-selector-picker lb-picker-item"
    :style="{ height: height }">
    <picker-view :value="pickerValue"
      :style="{ height: height }"
      :indicator-style="indicatorStyle"
      :immediate-change="immediateChange"
      @change="handleChange">
      <picker-view-column>
        <!-- #ifdef H5 -->
        <view v-for="(item, i) in list"
          :class="[
            'lb-picker-column',
            (item[props.value] || item) === selectValue
              ? 'lb-picker-column-active'
              : ''
          ]"
          :key="i"
          :data-item="pressEnable ? JSON.stringify(item) : ''"
          @touchstart="touchstart"
          @touchmove="touchmove"
          @touchend="touchend">
          <!-- #endif -->
          <!-- #ifndef H5 -->
          <view v-for="(item, i) in list"
            :class="[
            'lb-picker-column',
            (item[props.value] || item) === selectValue
              ? 'lb-picker-column-active'
              : ''
          ]"
            :key="i"
            :data-item="item"
            @touchstart="touchstart"
            @touchmove="touchmove"
            @touchend="touchend">
            <!-- #endif -->
            <!-- #ifdef APP-PLUS || H5 -->
            <text :class="[
              'lb-picker-column-label',
              `lb-picker-column-label-${align}`
            ]"
              :style="[
              (item[props.value] || item) === selectValue
                ? activeColumnStyle
                : columnStyle
            ]">{{ getLabel(item, i, 0) }}</text>
            <!-- #endif -->

            <!-- #ifndef APP-PLUS || H5 -->
            <text :class="[
              'lb-picker-column-label',
              `lb-picker-column-label-${align}`
            ]">{{ item[props.label] || item }}</text>
            <!-- #endif -->
          </view>
      </picker-view-column>
    </picker-view>
  </view>
</template>

<script>
import { isObject } from '../utils'
import { commonMixin } from '../mixins'
export default {
  props: {
    value: [String, Number],
    list: Array,
    mode: String,
    props: Object,
    visible: Boolean,
    height: String,
    immediateChange: Boolean,
    columnStyle: Object,
    activeColumnStyle: Object,
    align: String,
    pressEnable: Boolean,
    pressTime: Number,
    formatter: Function
  },
  mixins: [commonMixin],
  data () {
    return {
      pickerValue: [],
      selectValue: '',
      selectItem: null
    }
  },
  methods: {
    handleChange (item) {
      const index = item.detail.value[0] || 0
      this.selectItem = this.list[index]
      this.selectValue = isObject(this.selectItem)
        ? this.selectItem[this.props.value]
        : this.selectItem
      this.pickerValue = item.detail.value
      this.$emit('change', {
        value: this.selectValue,
        item: this.selectItem,
        index: index,
        change: 'scroll'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/picker-item.scss";
</style>
