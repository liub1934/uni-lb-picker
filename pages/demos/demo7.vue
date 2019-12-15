<template>
  <view>
    <button @tap="handleTap">点我弹出选择器</button>
    <view>{{ value }}</view>
    <lb-picker ref="picker"
      v-model="value"
      mode="selector"
      :list="list"
      :props="pickerProp"
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
				value: '',
				pickerProp: {
					label: 'name',
					value: 'id'
				},
				list: [
					{
						id: 1,
						name: '选项一'
					},
					{
						id: 2,
						name: '选项二'
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
