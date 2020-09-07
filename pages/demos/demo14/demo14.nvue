<template>
  <view class="list">
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker1')">
      <text class="sub-title">单选formatter自定义显示</text>
      <view class="item-content">
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
        :formatter="formatter"
        :dataset="{ name: 'label1' }"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker2')">
      <text class="sub-title">多级联动formatter自定义显示</text>
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
        :list="list2"
        :level="2"
        :dataset="{ name: 'label2' }"
        :formatter="formatter"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker3')">
      <text class="sub-title">非联动formatter自定义显示</text>
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
        :list="list3"
        :dataset="{ name: 'label3' }"
        :formatter="formatter"
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
      label1: '',

      value2: ['2', '22'],
      label2: '',

      value3: ['2', '22'],
      label3: '',

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
      list2: [
        {
          label: '选项1',
          value: '1',
          children: [
            {
              label: '选项11',
              value: '11'
            },
            {
              label: '选项12',
              value: '12'
            },
            {
              label: '选项13',
              value: '13'
            }
          ]
        },
        {
          label: '选项2',
          value: '2',
          children: [
            {
              label: '选项21',
              value: '21'
            },
            {
              label: '选项22',
              value: '22'
            },
            {
              label: '选项23',
              value: '23'
            }
          ]
        },
        {
          label: '选项3',
          value: '3',
          children: [
            {
              label: '选项31',
              value: '31'
            },
            {
              label: '选项32',
              value: '32'
            },
            {
              label: '选项33',
              value: '33'
            }
          ]
        }
      ],
      list3: [
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
        ]
      ]
    }
  },
  onReady () {
    this.$nextTick(() => {
      // 此处可以调用getColumnsInfo方法获取默认值的选项信息
      const info1 = this.$refs.picker1.getColumnsInfo(this.value1)
      const info2 = this.$refs.picker2.getColumnsInfo(this.value2)
      const info3 = this.$refs.picker2.getColumnsInfo(this.value3)
      console.log('根据value1获取的信息：', info1)
      console.log('根据value2获取的信息：', info2)
      console.log('根据value3获取的信息：', info3)
      this.label1 = info1.item.label
      this.label2 = info2.item.map(m => m.label).join('-')
      this.label3 = info3.item.map(m => m.label).join('-')
    })
  },
  methods: {
    handleTap (picker) {
      this.$refs[picker].show()
    },
    formatter ({ item, rowIndex, columnIndex }) {
      return `${item.value}-${rowIndex}-${columnIndex}-${item.label}`
    },
    handleChange (e) {
      console.log('change::', e)
    },
    handleConfirm (e) {
      // 如果存在多个picker，可以在picker上设置dataset属性，confirm中获取，就能区分是哪个picker了
      console.log('confirm::', e)
      if (e) {
        const name = e.dataset.name
        if (name === 'label1') {
          this[name] = e.item.label
        } else {
          this[name] = e.item.map(m => m.label).join('-')
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
