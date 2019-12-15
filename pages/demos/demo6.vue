<template>
  <view>
    <button @tap="handleTap('picker1')">可视区自定义滚动个数(默认5个)</button>
    <view>{{ value1 }}</view>
    <lb-picker ref="picker1"
      v-model="value1"
      mode="selector"
      :list="list"
      :column-num="5"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancle="handleCancle">
    </lb-picker>

    <button @tap="handleTap('picker2')">可视区自定义滚动个数(3个)</button>
    <view>{{ value2 }}</view>
    <lb-picker ref="picker2"
      v-model="value2"
      mode="selector"
      :list="list"
      :column-num="3"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancle="handleCancle">
    </lb-picker>

    <button @tap="handleTap('picker3')">可视区自定义滚动个数(7个)</button>
    <view>{{ value3 }}</view>
    <lb-picker ref="picker3"
      v-model="value3"
      mode="selector"
      :list="list"
      :column-num="7"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancle="handleCancle">
    </lb-picker>

    <button @tap="handleTap('picker4')">可视区自定义滚动个数(4个)</button>
    <view>{{ value4 }}</view>
    <view>columnNum参数最好设置为奇数</view>
    <lb-picker ref="picker4"
      v-model="value4"
      mode="selector"
      :list="list"
      :column-num="4"
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
				value2: '',
				value3: '',
				value4: '',
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
			handleTap (picker) {
				this.$refs[picker].show()
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
