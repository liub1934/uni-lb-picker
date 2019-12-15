<template>
  <view>
    <button @tap="handleTap('picker1')">省一级选择</button>
    <view>{{ value1.join('-') }}</view>
    <lb-picker ref="picker1"
      v-model="value1"
      mode="multiSelector"
      :list="list"
      :level="1"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancle="handleCancle">
    </lb-picker>

    <button @tap="handleTap('picker2')">省市二级选择</button>
    <view>{{ value2.join('-') }}</view>
    <lb-picker ref="picker2"
      v-model="value2"
      mode="multiSelector"
      :list="list"
      :level="2"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancle="handleCancle">
    </lb-picker>

    <button @tap="handleTap('picker3')">省市区三级选择</button>
    <view>{{ value3.join('-') }}</view>
    <lb-picker ref="picker3"
      v-model="value3"
      mode="multiSelector"
      :list="list"
      :level="3"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancle="handleCancle">
    </lb-picker>

    <button @tap="handleTap('picker5')">默认值</button>
    <view>{{ value5.join('-') }}</view>
    <lb-picker ref="picker5"
      v-model="value5"
      mode="multiSelector"
      :list="list"
      :level="3"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancle="handleCancle">
    </lb-picker>

    <button @tap="handleTap('picker6')">默认值有缺省</button>
    <view>{{ value6.join('-') }}</view>
    <lb-picker ref="picker6"
      v-model="value6"
      mode="multiSelector"
      :list="list"
      :level="3"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancle="handleCancle">
    </lb-picker>
  </view>
</template>

<script>
	import areaData from './area-data-min'
	export default {
		data(){
			return {
				value1: [],
				value2: [],
				value3: [],
				value5: ['11', '1101', '110114'],
				value6: ['11', '1101'],
				list: areaData
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
