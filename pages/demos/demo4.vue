<template>
  <view>
    <button @tap="handleTap('picker1')">自定义确定取消文字及颜色</button>
    <view>{{ value1 }}</view>
    <lb-picker ref="picker1"
      v-model="value1"
      mode="selector"
      :list="list"
      cancle-text="自定义取消"
      confirm-text="自定义确定"
      cancle-color="#f0ad4e"
      confirm-color="#4cd964"
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
				value1: '',
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
			handleTap (picker) {
				this.$refs[picker].show()
			},
			handleChange (item) {
				console.log('change::', item)
			},
			handleConfirm (item) {
				console.log('confirm::', item)
			},
			handleCancle (item) {
				console.log('cancle::', item)
			}
		}
	}
</script>
