<template>
  <view class="list">
    <view class="grey-block"></view>
    <view class="list-item">
      <text class="sub-title">默认单选</text>
      <view class="item-content"
        @tap="handleTap('picker1')">
        <text class="item-title">绑定值:{{ value1 }}</text>
        <view class="item-value">
          <text class="item-label">{{ label1 }}</text>
          <text v-if="!label1"
            class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker1"
        v-model="value1"
        mode="selector"
        :list="list1"
        :dataset="{ name: 'label1' }"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item">
      <text class="sub-title">单选绑定默认值</text>
      <view class="item-content"
        @tap="handleTap('picker2')">
        <text class="item-title">绑定值:{{ value2 }}</text>
        <view class="item-value">
          <text class="item-label">{{ label2 }}</text>
          <text v-if="!label2"
            class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker2"
        v-model="value2"
        mode="selector"
        :list="list1"
        :dataset="{ name: 'label2' }"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item">
      <text class="sub-title">默认扁平化单选</text>
      <view class="item-content"
        @tap="handleTap('picker3')">
        <text class="item-title">绑定值:{{ value3 }}</text>
        <view class="item-value">
          <text class="item-label">{{ value3 }}</text>
          <text v-if="!value3"
            class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker3"
        v-model="value3"
        mode="selector"
        :list="list2"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item">
      <text class="sub-title">扁平化单选绑定默认值</text>
      <view class="item-content"
        @tap="handleTap('picker4')">
        <text class="item-title">绑定值:{{ value4 }}</text>
        <view class="item-value">
          <text class="item-label">{{ value4 }}</text>
          <text v-if="!value4"
            class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker4"
        v-model="value4"
        mode="selector"
        :list="list2"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item">
      <text class="sub-title">无数据</text>
      <view class="item-content"
        @tap="handleTap('picker5')">
        <text class="item-title">绑定值:{{ value5 }}</text>
        <view class="item-value">
          <text class="item-label">{{ value5 }}</text>
          <text v-if="!value5"
            class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker5"
        v-model="value5"
        mode="selector"
        :list="list3"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      label1: '',

      value2: 'B',
      label2: '',

      value3: '',

      value4: '选项二',

      value5: '',

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
      list2: ['选项一', '选项二'],
      list3: []
    }
  },
  onReady () {
    this.$nextTick(() => {
      // 此处可以调用getColumnsInfo方法获取默认值的选项信息
      const info = this.$refs.picker2.getColumnsInfo(this.value2)
      console.log('根据value获取的信息：', info)
      this.label2 = info.item.label
    })
  },
  methods: {
    handleTap (name) {
      this.$refs[name].show()
    },
    handleChange (e) {
      console.log('change::', e)
    },
    handleConfirm (e) {
      // 如果存在多个picker，可以在picker上设置dataset属性，confirm中获取，就能区分是哪个picker了
      console.log('confirm::', e)
      if (e) {
        const name = e.dataset.name
        const label = e.item.label
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