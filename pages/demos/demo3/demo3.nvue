<template>
  <view class="list">
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker1')">
      <text class="sub-title">省一级选择</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ JSON.stringify(value1) }}</text>
        <view class="item-value">
          <text class="item-label">{{ label1 }}</text>
          <text v-if="!label1"
            class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker1"
        v-model="value1"
        mode="multiSelector"
        :list="list1"
        :level="1"
        :dataset="{ name: 'label1' }"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker2')">
      <text class="sub-title">省市二级选择</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ JSON.stringify(value2) }}</text>
        <view class="item-value">
          <text class="item-label">{{ label2 }}</text>
          <text v-if="!label2"
            class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker2"
        v-model="value2"
        mode="multiSelector"
        :list="list1"
        :level="2"
        :dataset="{ name: 'label2' }"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker3')">
      <text class="sub-title">省市区三级选择</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ JSON.stringify(value3) }}</text>
        <view class="item-value">
          <text class="item-label">{{ label3 }}</text>
          <text v-if="!label3"
            class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker3"
        v-model="value3"
        mode="multiSelector"
        :list="list1"
        :level="3"
        :dataset="{ name: 'label3' }"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker4')">
      <text class="sub-title">绑定默认值</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ JSON.stringify(value4) }}</text>
        <view class="item-value">
          <text class="item-label">{{ label4 }}</text>
          <text v-if="!label4"
            class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker4"
        v-model="value4"
        mode="multiSelector"
        :list="list1"
        :level="3"
        :dataset="{ name: 'label4' }"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker5')">
      <text class="sub-title">默认值有缺省</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ JSON.stringify(value5) }}</text>
        <view class="item-value">
          <text class="item-label">{{ label5 }}</text>
          <text v-if="!label5"
            class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker5"
        v-model="value5"
        mode="multiSelector"
        :list="list1"
        :level="3"
        :dataset="{ name: 'label5' }"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker6')">
      <text class="sub-title">无数据</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ JSON.stringify(value6) }}</text>
        <view class="item-value">
          <text class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker6"
        v-model="value6"
        mode="multiSelector"
        :list="list2"
        :level="3"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
  </view>
</template>

<script>
import areaData from '../area-data-min'
export default {
  data () {
    return {
      value1: [],
      label1: '',

      value2: [],
      label2: '',

      value3: [],
      label3: '',

      value4: ['340000', '340800', '340826'],
      label4: '',

      value5: ['340000', '340800'],
      label5: '',

      value6: [],

      list1: areaData,
      list2: []
    }
  },
  onReady () {
    this.$nextTick(() => {
      // 此处可以调用getColumnsInfo方法获取默认值的选项信息
      const info1 = this.$refs.picker4.getColumnsInfo(this.value4)
      const info2 = this.$refs.picker4.getColumnsInfo(this.value5)
      console.log('根据value获取的信息：', info1)
      console.log('根据value获取的信息：', info2)
      this.label4 = info1.item.map(m => m.label).join('-')
      this.label5 = info2.item.map(m => m.label).join('-')
    })
  },
  methods: {
    handleTap (picker) {
      this.$refs[picker].show()
    },
    handleChange (e) {
      console.log('change::', e)
    },
    handleConfirm (e) {
      // 如果存在多个picker，可以在picker上设置dataset属性，confirm中获取，就能区分是哪个picker了
      console.log('confirm::', e)
      if (e) {
        const name = e.dataset.name
        const label = e.item.map(m => m.label).join('-')
        if (name && label) {
          this[name] = label
        }
      }
    },
    handleCancel (e) {
      console.log('cancel::', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../index/index.scss";
</style>
