<template>
  <view class="list">
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker1')">
      <text class="sub-title">相关事件触发</text>
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
        :list="list"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel"
        @show="handleShow"
        @hide="handleHide">
      </lb-picker>
    </view>
    <text class="tips">请打开console控制台查看事件触发，默认初始化的时候会触发change</text>
    <view class="grey-block"></view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      value: '',
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
  methods: {
    handleTap (name) {
      this.$refs[name].show()
    },
    handleChange (e) {
      console.log('change::', e)
    },
    handleConfirm (e) {
      console.log('confirm::', e)
      this.label = e.item.label
    },
    handleCancel (e) {
      console.log('cancel::', e)
    },
    handleShow () {
      console.log('show')
    },
    handleHide () {
      console.log('hide')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../index/index.scss";
</style>
