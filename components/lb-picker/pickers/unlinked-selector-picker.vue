<template>
  <view class="lb-selector-picker lb-picker-item"
    :style="{ height: height }">
    <picker-view :value="pickerValue"
      :indicator-style="indicatorStyle"
      :style="{ height: height }"
      :immediate-change="immediateChange"
      @change="handleChange">
      <picker-view-column v-for="(column, index) in pickerColumns"
        :key="index">
        <!-- #ifdef H5 -->
        <view v-for="(item, i) in column || []"
          :class="[
            'lb-picker-column',
            (item[props.value] || item) === selectValue[index]
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
          <view v-for="(item, i) in column || []"
            :class="[
            'lb-picker-column',
            (item[props.value] || item) === selectValue[index]
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
              (item[props.value] || item) === selectValue[index]
              ? activeColumnStyle
              : columnStyle
            ]">{{ getLabel(item, i, index) }}</text>
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
    value: Array,
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
      pickerColumns: [],
      selectValue: [],
      selectItem: []
    }
  },
  methods: {
    handleChange (item) {
      const pickerValue = item.detail.value
      const columnIndex = pickerValue.findIndex((item, i) => item !== this.pickerValue[i])
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
  }
}
</script>

<style lang="scss" scoped>
@import "../style/picker-item.scss";
</style>
