<template>
  <view class="list">
    <view class="grey-block"></view>
    <view class="item"
      v-for="(item, index) in pickers"
      :key="`item-${index}`">
      <view class="list-item">
        <text class="sub-title"></text>
        <view class="item-content"
          @tap="handleTap(index)">
          <text class="item-title">选择器{{ index + 1 }}绑定值:{{ item.value }}</text>
          <view class="item-value">
            <text class="item-label">{{ item.label }}</text>
            <text v-if="!item.label"
              class="item-placeholder">点我打开选择器</text>
          </view>
        </view>
      </view>
      <view class="grey-block"></view>
    </view>

    <!-- 此处最好将picker放在最外围循环下，防止小程序上组件层级问题，即弹出的picker不在最底部 -->
    <lb-picker v-for="(item, index) in pickers"
      :key="`picker-${index}`"
      ref="picker"
      v-model="item.value"
      mode="selector"
      :list="list"
      :dataset="{ index: index }"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancel="handleCancel">
    </lb-picker>
  </view>
</template>

<script>
export default {
  data () {
    return {
      pickers: [
        {
          label: '',
          value: ''
        },
        {
          label: '',
          value: ''
        },
        {
          label: '',
          value: ''
        }
      ],
      list: [
        {
          label: '选项一',
          value: 'A'
        },
        {
          label: '选项二',
          value: 'B'
        },
        {
          label: '选项三',
          value: 'C'
        }
      ]
    }
  },
  methods: {
    handleTap (index) {
      // 通过index索引找到相应的点击picker
      const picker = this.$refs.picker[index]
      picker.show()
    },
    handleChange (e) {
      console.log('change::', e)
    },
    handleConfirm (e) {
      console.log('confirm::', e)
      // 获取dataset中设置的index，这样就知道是对应的哪条数据了
      const index = e.dataset.index
      const label = e.item.label
      if (index > -1 && label) {
        this.pickers[index].label = label
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