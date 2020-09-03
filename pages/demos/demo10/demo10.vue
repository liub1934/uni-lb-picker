<template>
  <view>
    <button @tap="handleTap">点我弹出选择器</button>
    <view>{{ value }}</view>
    <view>默认初始化的时候会触发change</view>
    <lb-picker ref="picker"
      v-model="value"
      mode="selector"
      :list="list"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancel="handleCancel"
      @show="handleShow"
      @hide="handleHide">
    </lb-picker>
  </view>
</template>

<script>
	export default {
		data(){
			return {
				value: '',
				label: '',
				list: [
					{
						label: '选项一',
						value: 'A'
					},
					{
						label: '选项二',
						value: 'B'
					}
				]
			}
		},
		methods: {
			handleTap () {
				this.$refs.picker.show()
			},
			handleChange (item) {
				console.log('change::', item)
				uni.showToast({
					title: `change-${item.value}`,
					icon: 'none'
				})
			},
			handleConfirm (item) {
				console.log('confirm::', item)
				uni.showToast({
					title: `confirm-${item.value}`,
					icon: 'none'
				})
			},
			handleCancel (item) {
				console.log('cancel::', item)
				uni.showToast({
					title: `cancel`,
					icon: 'none'
				})
			},
			handleShow () {
				console.log('show')
				uni.showToast({
					title: `show`,
					icon: 'none'
				})
			},
			handleHide () {
				console.log('hide')
				uni.showToast({
					title: `hide`,
					icon: 'none'
				})
			}
		}
	}
</script>
