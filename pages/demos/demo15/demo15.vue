<template>
  <view class="list">
    <view class="grey-block"></view>
    <view class="list-item">
      <text class="sub-title">点击弹出选择器后长按选择器文字</text>
      <view class="item-content"
        @tap="handleTap('picker1')">
        <view class="item-value">
          <text class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker1"
        v-model="value1"
        mode="selector"
        press-enable
        :list="list1"
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
      value1: 'B',

      list1: [
        {
          label: '选项一我的文字信息特别长特别长特别长特别长特别长',
          value: 'A'
        },
        {
          label: '选项二我的文字信息特别长特别长特别长特别长特别长',
          value: 'B'
        }
      ]
    }
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
