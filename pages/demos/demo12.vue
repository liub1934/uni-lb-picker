<template>
  <view>
    <button @tap="handleTap('picker1')">点我弹出选择器</button>
    <view>{{ value1.join('-') }}</view>
    <lb-picker ref="picker1"
      v-model="value1"
      mode="unlinkedSelector"
      :list="list"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancel="handleCancel">
    </lb-picker>

    <button @tap="handleTap('picker2')">点我弹出默认值选择器</button>
    <view>{{ value2.join('-') }}</view>
    <lb-picker ref="picker2"
      v-model="value2"
      mode="unlinkedSelector"
      :list="list"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancel="handleCancel">
    </lb-picker>

    <button @tap="handleTap('picker3')">扁平数据支持</button>
    {{ JSON.stringify(list2) }}
    <view>{{ value3.join('-') }}</view>
    <lb-picker ref="picker3"
      v-model="value3"
      mode="unlinkedSelector"
      :list="list2"
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
				value1: [],
				value2: ['2', '33', '222'],
				value3: ['选项2', '选项33', '选项222'],
				list: [
					[
						{
						label: '选项1',
						value: '1'
						},
						{
							label: '选项2',
							value: '2'
						},
						{
							label: '选项3',
							value: '3'
						}
					],
					[
						{
						label: '选项11',
						value: '11'
						},
						{
							label: '选项22',
							value: '22'
						},
						{
							label: '选项33',
							value: '33'
						}
					],
					[
						{
						label: '选项111',
						value: '111'
						},
						{
							label: '选项222',
							value: '222'
						},
						{
							label: '选项333',
							value: '333'
						}
					]
				],
				list2: [
					['选项1', '选项2', '选项3'],
					['选项11', '选项22', '选项33'],
					['选项111', '选项222', '选项333'],
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
			handleCancel (item) {
				console.log('cancel::', item)
			}
		}
	}
</script>
