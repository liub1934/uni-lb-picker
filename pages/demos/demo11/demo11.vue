<template>
  <view class="list">
    <view class="grey-block"></view>
    <view class="list-item">
      <text class="sub-title">默认异步加载整体数据</text>
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
        :loading="loading1"
        @show="getList1"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item">
      <text class="sub-title">插槽自定义loading</text>
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
        mode="multiSelector"
        :list="list2"
        :level="3"
        :dataset="{ name: 'label2' }"
        :loading="loading2"
        @show="getList2"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
        <view slot="loading">加载中</view>
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

      value2: [],
      label2: '',

      list1: [],
      list2: [],
      loading1: true,
      loading2: true
    }
  },
  created () {},
  methods: {
    getList1 () {
      setTimeout(() => {
        let list = []
        for (let i = 1; i < 20; i++) {
          list.push({
            label: `选项${i}`,
            value: i
          })
        }
        this.list1 = list
        this.loading1 = false
      }, 2000)
    },
    getList2 () {
      setTimeout(() => {
        this.list2 = [
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
        this.loading2 = false
      }, 2000)
    },
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
