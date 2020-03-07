<template>
  <view>
    <button @tap="handleTap">点我弹出选择器</button>
    <view>{{ value }}</view>
    <view>{{ label }}</view>
    <lb-picker ref="picker"
      v-model="value"
      mode="selector"
      :list="list"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancle="handleCancle">
    </lb-picker>
  </view>
</template>

<script>
	export default {
		data(){
			return {
				value: 'B',
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
