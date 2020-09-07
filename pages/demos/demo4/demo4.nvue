<template>
  <view class="list">
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker1')">
      <text class="sub-title">自定义确定取消文字及颜色，点击打开选择器</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ value }}</text>
        <view class="item-value">
          <text class="item-label">{{ label }}</text>
          <text v-if="!label"
            class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker1"
        v-model="value"
        mode="selector"
        cancel-text="自定义取消"
        confirm-text="自定义确定"
        cancel-color="#f0ad4e"
        confirm-color="#4cd964"
        :list="list"
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
      value: 'B',
      label: '',
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
  onReady () {
    this.$nextTick(() => {
      // 此处可以调用getColumnsInfo方法获取默认值的选项信息
      const info = this.$refs.picker1.getColumnsInfo(this.value)
      console.log('根据value获取的信息：', info)
      this.label = info.item.label
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
      console.log('confirm::', e)
      if (e) {
        this.label = e.item.label
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
