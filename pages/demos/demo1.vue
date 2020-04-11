<template>
  <view>
    <button @tap="handleTap('picker1')">点我弹出选择器</button>
    <view>{{ value1 }}</view>
    <lb-picker ref="picker1"
      v-model="value1"
      mode="selector"
      :list="list1"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancel="handleCancel">
    </lb-picker>

    <button @tap="handleTap('picker2')">扁平数据支持</button>
    {{ JSON.stringify(list2) }}
    <view>{{ value2 }}</view>
    <lb-picker ref="picker2"
      v-model="value2"
      mode="selector"
      :list="list2"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancel="handleCancel">
    </lb-picker>

    <button @tap="handleTap('picker3')">无数据选择器</button>
    <lb-picker ref="picker3"
      v-model="value3"
      mode="selector"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancel="handleCancel">
    </lb-picker>
  </view>
</template>

<script>
	export default {
		data(){
			return {
				value1: 'B',
				list1: [
					{
						label: '选项一',
						value: 'A'
					},
					{
						label: '选项二',
						value: 'B'
					}
				],
				value2: '选项二',
				list2: ['选项一', '选项二'],
				value3: ''
			}
		},
		methods: {
			handleTap (name) {
				this.$refs[name].show()
			},
			handleChange (item) {
				console.log('change::', item)
			},
			handleConfirm (item) {
				console.log('confirm::', item)
			},
			handleCancel (item) {
				console.log('cancel::', item)
			}
		}
	}
</script>
