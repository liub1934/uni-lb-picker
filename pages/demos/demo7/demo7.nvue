<template>
  <view class="list">
    <view class="grey-block"></view>
    <view class="list-item">
      <text class="sub-title">设置props自定义字段，点击弹出选择器</text>
      <view class="item-content"
        @tap="handleTap('picker1')">
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
        :props="pickerProp"
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
      value: 2,
      label: '',
      pickerProp: {
        label: 'name',
        value: 'id'
      },
      list: [
        {
          id: 1,
          name: '选项一'
        },
        {
          id: 2,
          name: '选项二'
        }
      ]
    }
  },
  onReady () {
    this.$nextTick(() => {
      // 此处可以调用getColumnsInfo方法获取默认值的选项信息
      const info = this.$refs.picker1.getColumnsInfo(this.value)
      console.log('根据value获取的信息：', info)
      this.label = info.item[this.pickerProp.label]
    })
  },
  methods: {
    handleTap () {
      this.$refs.picker1.show()
    },
    handleChange (e) {
      console.log('change::', e)
    },
    handleConfirm (e) {
      console.log('confirm::', e)
      if (e) {
        this.label = e.item[this.pickerProp.label]
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
