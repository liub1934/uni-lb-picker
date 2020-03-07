<template>
  <view>
    <button @tap="handleTap('picker1')">插槽自定义loading</button>
    <view>{{ value1 }}</view>
    <lb-picker ref="picker1"
      v-model="value1"
      mode="selector"
      :list="list1"
      :loading="loading1"
      @show="getList1"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancle="handleCancle">
      <view slot="loading">加载中</view>
    </lb-picker>

    <button @tap="handleTap('picker2')">异步加载数据2</button>
    <view>{{ value2.join('-') }}</view>
    <lb-picker ref="picker2"
      v-model="value2"
      mode="multiSelector"
      :level="3"
      :list="list2"
      :loading="loading2"
      @show="getList2"
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
				value2: [],
				list1: [],
				list2: [],
				loading1: true,
				loading2: true,
			}
		},
		created() {
			
		},
		methods: {
			getList1 () {
				setTimeout(() => {
					let list = []
					for (let i = 1; i < 20; i++) {
						list.push({
							label: `选项${i}`,
							value: i
						})
					}
					this.list1 = list
					this.loading1 = false
				}, 2000)
			},
			getList2 () {
				setTimeout(() => {
					this.list2 = [
						{
							label: '选项1',
							value: '1',
							children: [
								{
									label: '选项11',
									value: '11',
									children: [
										{
											label: '选项111',
											value: '111'
										},
										{
											label: '选项112',
											value: '112'
										},
										{
											label: '选项113',
											value: '113'
										}
									]
								},
								{
									label: '选项12',
									value: '12',
									children: [
										{
											label: '选项121',
											value: '121'
										},
										{
											label: '选项122',
											value: '122'
										},
										{
											label: '选项123',
											value: '123'
										}
									]
								},
								{
									label: '选项13',
									value: '13',
									children: [
										{
											label: '选项131',
											value: '131'
										},
										{
											label: '选项132',
											value: '132'
										},
										{
											label: '选项133',
											value: '133'
										}
									]
								}
							]
						},
						{
							label: '选项2',
							value: '2',
							children: [
								{
									label: '选项21',
									value: '21',
									children: [
										{
											label: '选项211',
											value: '211'
										},
										{
											label: '选项212',
											value: '212'
										},
										{
											label: '选项213',
											value: '213'
										}
									]
								},
								{
									label: '选项22',
									value: '22',
									children: [
										{
											label: '选项221',
											value: '221'
										},
										{
											label: '选项222',
											value: '222'
										},
										{
											label: '选项223',
											value: '223'
										}
									]
								},
								{
									label: '选项23',
									value: '23',
									children: [
										{
											label: '选项231',
											value: '231'
										},
										{
											label: '选项232',
											value: '232'
										},
										{
											label: '选项233',
											value: '233'
										}
									]
								}
							]
						},
						{
							label: '选项3',
							value: '3',
							children: [
								{
									label: '选项31',
									value: '31',
									children: [
										{
											label: '选项311',
											value: '311'
										},
										{
											label: '选项312',
											value: '312'
										},
										{
											label: '选项313',
											value: '313'
										}
									]
								},
								{
									label: '选项32',
									value: '32',
									children: [
										{
											label: '选项321',
											value: '321'
										},
										{
											label: '选项322',
											value: '322'
										},
										{
											label: '选项323',
											value: '323'
										}
									]
								},
								{
									label: '选项33',
									value: '33',
									children: [
										{
											label: '选项331',
											value: '331'
										},
										{
											label: '选项332',
											value: '332'
										},
										{
											label: '选项333',
											value: '333'
										}
									]
								}
							]
						}
					]
					this.loading2 = false
				}, 2000)
			},
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
