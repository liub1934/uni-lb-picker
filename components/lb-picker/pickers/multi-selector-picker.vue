<template>
  <view class="lb-multi-selector lb-picker-item"
    :style="{ height: height }">
    <picker-view :value="pickerValue"
      :indicator-style="indicatorStyle"
      :style="{ height: height }"
      @change="handleChange">
      <picker-view-column v-for="(column, index) in pickerColumns"
        :key="index">
        <!-- #ifdef H5 -->
        <view v-for="(item, i) in column || []"
          :class="[
				    'lb-picker-column',
				    item[props.value] === selectValue[index]
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
            item[props.value] === selectValue[index]
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
              item[props.value] === selectValue[index]
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
import { commonMixin } from '../mixins'
export default {
  props: {
    value: Array,
    list: Array,
    mode: String,
    props: Object,
    level: Number,
    visible: Boolean,
    height: String,
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
        this.$set(this.pickerValue, i, pickerValue[i])
        const selectItem = this.pickerColumns[i][pickerValue[i]]
        if (selectItem) {
          this.selectItem[i] = selectItem
          this.selectValue[i] = selectItem[this.props.value]
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
        index: this.pickerValue,
        change: 'scroll'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/picker-item.scss";
</style>
