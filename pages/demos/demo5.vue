<template>
  <view>
    <button @tap="handleTap">插槽自定义选择器头部</button>
    <view>{{ value }}</view>
    <lb-picker ref="picker"
      v-model="value"
      mode="selector"
      :list="list"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancle="handleCancle">
      <view slot="cancle-text">插槽取消</view>
      <view slot="action-center">中间自定义</view>
      <view slot="confirm-text">插槽确定</view>
    </lb-picker>
    <view>自定义后参数cancleColor、confirmColor将失效</view>
  </view>
</template>

<script>
	export default {
		data(){
			return {
				value: '',
				label: '',
				list: []
			}
		},
		created() {
			let list = []
			for (let i = 1; i < 20; i++) {
				list.push({
					label: `选项${i}`,
					value: i
				})
			}
			this.list = list
		},
		methods: {
			handleTap () {
				this.$refs.picker.show()
			},
			handleChange (item) {
				console.log('change::', item)
			},
			handleConfirm (item) {
				this.label = item.item.label
				console.log('confirm::', item)
			},
			handleCancle (item) {
				console.log('cancle::', item)
			}
		}
	}
</script>
