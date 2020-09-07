<template>
  <view class="list">
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker2')">
      <text class="sub-title">非联动选择</text>
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
        mode="unlinkedSelector"
        :list="list1"
        :dataset="{ name: 'label2' }"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker3')">
      <text class="sub-title">绑定默认值</text>
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
        mode="unlinkedSelector"
        :list="list1"
        :dataset="{ name: 'label3' }"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker4')">
      <text class="sub-title">扁平化数据非联动选择</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ JSON.stringify(value4) }}</text>
        <view class="item-value">
          <text class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker4"
        v-model="value4"
        mode="unlinkedSelector"
        :list="list2"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker5')">
      <text class="sub-title">扁平化绑定默认值</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ JSON.stringify(value5) }}</text>
        <view class="item-value">
          <text class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker5"
        v-model="value5"
        mode="unlinkedSelector"
        :list="list2"
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
        mode="unlinkedSelector"
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
      value2: [],
      label2: '',

      value3: ['2', '33', '222'],
      label3: '',

      value4: [],

      value5: ['选项2', '选项33', '选项222'],

      value6: [],

      list1: [
        [
          {
            label: '选项1',
            value: '1'
          },
          {
            label: '选项2',
            value: '2'
          },
          {
            label: '选项3',
            value: '3'
          }
        ],
        [
          {
            label: '选项11',
            value: '11'
          },
          {
            label: '选项22',
            value: '22'
          },
          {
            label: '选项33',
            value: '33'
          }
        ],
        [
          {
            label: '选项111',
            value: '111'
          },
          {
            label: '选项222',
            value: '222'
          },
          {
            label: '选项333',
            value: '333'
          }
        ]
      ],
      list2: [
        ['选项1', '选项2', '选项3'],
        ['选项11', '选项22', '选项33'],
        ['选项111', '选项222', '选项333']
      ],
      list3: []
    }
  },
  onReady () {
    this.$nextTick(() => {
      // 此处可以调用getColumnsInfo方法获取默认值的选项信息
      const info = this.$refs.picker3.getColumnsInfo(this.value3)
      console.log('根据value获取的信息：', info)
      this.label3 = info.item.map(m => m.label).join('-')
    })
  },
  methods: {
    handleTap (picker) {
      this.$refs[picker].show()
    },
    handleChange (item) {
      console.log('change::', item)
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
    handleCancel (item) {
      console.log('cancel::', item)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../index/index.scss";
</style>
