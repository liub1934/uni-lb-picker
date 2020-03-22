<template>
  <view class="selector-picker picker-item"
    :style="{height: height}">
    <picker-view :value="pickerValue"
      :indicator-style="indicatorStyle"
      :style="{height: height}"
      @change="handleChange">
      <picker-view-column v-for="(column, index) in pickerColumns"
        :key="index">
        <view v-for="(item, i) in column"
          :class="['lb-picker-column', item[props.value] === selectValue[index] ? 'lb-picker-column-active' : '']"
          :key="i"
          :style="{height: columnHeight, 'line-height': columnHeight}">
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
		visible: Boolean,
		height: String,
		indicatorHeight: Number
	},
	data(){
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
			if (this.list && this.list.length) {
				this.pickerColumns = this.list
				this.setPickerValue()
				this.$emit('change', {
					value: this.selectValue,
					item: this.selectItem,
					index: this.pickerValue
				})
			}
		},
		setPickerValue (value) {
			this.list.forEach((item, i) => {
				let index = item.findIndex(item => item[this.props.value] === this.value[i])
				index = index > -1 ? index : 0
				this.$set(this.pickerValue, i, index)
				this.$set(this.selectValue, i, this.list[i][index][this.props.value])
				this.$set(this.selectItem, i, this.list[i][index])
			})
		},

		handleChange (item) {
			const pickerValue = item.detail.value
			const columnIndex = pickerValue.findIndex((item, i) => item !== this.pickerValue[i] )
			const valueIndex = pickerValue[columnIndex]
			this.pickerValue = pickerValue
			this.$set(this.selectValue, columnIndex, this.list[columnIndex][valueIndex][this.props.value])
			this.$set(this.selectItem, columnIndex, this.list[columnIndex][valueIndex])
			this.$emit('change', {
				value: this.selectValue,
				item: this.selectItem,
				index: this.pickerValue
			})
		}
	},
	watch: {
		list () {
			this.init()
		}	
	}
}
</script>

<style lang="scss" scoped>
@import "../style/picker-item.scss";
</style>