<template>
  <view class="list">
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker1')">
      <text class="sub-title">自定义样式颜色-单选</text>
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
        :dataset="{ name: 'label1' }"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker2')">
      <text class="sub-title">自定义样式颜色-多级联动</text>
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
        :level="3"
        :dataset="{ name: 'label2' }"
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
      value1: 2,
      label1: '',

      value2: ['2', '22', '223'],
      label2: '',

      list1: [],
      list2: [
        {
          label: '选项1',
          value: '1',
          children: [
            {
              label: '选项11',
              value: '11',
              children: [
                {
                  label: '选项111',
                  value: '111'
                },
                {
                  label: '选项112',
                  value: '112'
                },
                {
                  label: '选项113',
                  value: '113'
                }
              ]
            },
            {
              label: '选项12',
              value: '12',
              children: [
                {
                  label: '选项121',
                  value: '121'
                },
                {
                  label: '选项122',
                  value: '122'
                },
                {
                  label: '选项123',
                  value: '123'
                }
              ]
            },
            {
              label: '选项13',
              value: '13',
              children: [
                {
                  label: '选项131',
                  value: '131'
                },
                {
                  label: '选项132',
                  value: '132'
                },
                {
                  label: '选项133',
                  value: '133'
                }
              ]
            }
          ]
        },
        {
          label: '选项2',
          value: '2',
          children: [
            {
              label: '选项21',
              value: '21',
              children: [
                {
                  label: '选项211',
                  value: '211'
                },
                {
                  label: '选项212',
                  value: '212'
                },
                {
                  label: '选项213',
                  value: '213'
                }
              ]
            },
            {
              label: '选项22',
              value: '22',
              children: [
                {
                  label: '选项221',
                  value: '221'
                },
                {
                  label: '选项222',
                  value: '222'
                },
                {
                  label: '选项223',
                  value: '223'
                }
              ]
            },
            {
              label: '选项23',
              value: '23',
              children: [
                {
                  label: '选项231',
                  value: '231'
                },
                {
                  label: '选项232',
                  value: '232'
                },
                {
                  label: '选项233',
                  value: '233'
                }
              ]
            }
          ]
        },
        {
          label: '选项3',
          value: '3',
          children: [
            {
              label: '选项31',
              value: '31',
              children: [
                {
                  label: '选项311',
                  value: '311'
                },
                {
                  label: '选项312',
                  value: '312'
                },
                {
                  label: '选项313',
                  value: '313'
                }
              ]
            },
            {
              label: '选项32',
              value: '32',
              children: [
                {
                  label: '选项321',
                  value: '321'
                },
                {
                  label: '选项322',
                  value: '322'
                },
                {
                  label: '选项323',
                  value: '323'
                }
              ]
            },
            {
              label: '选项33',
              value: '33',
              children: [
                {
                  label: '选项331',
                  value: '331'
                },
                {
                  label: '选项332',
                  value: '332'
                },
                {
                  label: '选项333',
                  value: '333'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  created () {
    let list = []
    for (let i = 1; i < 20; i++) {
      list.push({
        label: `选项${i}`,
        value: i
      })
    }
    this.list1 = list
  },
  onReady () {
    this.$nextTick(() => {
      // 此处可以调用getColumnsInfo方法获取默认值的选项信息
      const info1 = this.$refs.picker1.getColumnsInfo(this.value1)
      const info2 = this.$refs.picker2.getColumnsInfo(this.value2)
      console.log('根据value1获取的信息：', info1)
      console.log('根据value2获取的信息：', info2)
      this.label1 = info1.item.label
      this.label2 = info2.item.map(m => m.label).join('-')
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
        if (name === 'label1') {
          this[name] = e.item.label
        } else {
          this[name] = e.item.map(m => m.label).join('-')
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
/deep/ .lb-picker {
  .lb-picker-column-label {
    color: #f0ad4e;
  }
  .lb-picker-column-active {
    .lb-picker-column-label {
      color: #007aff;
      font-weight: 700;
    }
  }
}
</style>
