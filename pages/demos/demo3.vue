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
      @cancel="handleCancel">
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
      @cancel="handleCancel">
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
      @cancel="handleCancel">
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
      @cancel="handleCancel">
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
      @cancel="handleCancel">
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
				value5: ['340000', '340800', '340826'],
				value6: ['130000', '130200'],
				list: areaData
			}
    },
    onReady () {
			this.$nextTick(() => {
        const info = this.$refs.picker5.getColumnsInfo(['340000', '340800', '340826'])
        console.log('根据value获取的信息：', info)
			})
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
