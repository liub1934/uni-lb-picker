<template>
  <view class="list">
    <view class="grey-block"></view>
    <view class="list-item">
      <text class="sub-title">单选</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ value1 }}</text>
        <view class="item-value">
          <text class="item-label">{{ label1 }}</text>
        </view>
      </view>
      <lb-picker v-model="value1"
        mode="selector"
        inline
        :list="list1"
        :show-header="false"
        :dataset="{
          name1: 'value1',
          name2: 'label1',
          mode: 'selector'
        }"
        @change="handleChange">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item">
      <text class="sub-title">多级联动选择</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ JSON.stringify(value2) }}</text>
        <view class="item-value">
          <text class="item-label">{{ label2 }}</text>
        </view>
      </view>
      <lb-picker v-model="value2"
        mode="multiSelector"
        :list="list2"
        :level="3"
        :show-header="false"
        inline
        :dataset="{
          name1: 'value2',
          name2: 'label2',
          mode: 'multiSelector'
        }"
        @change="handleChange">
      </lb-picker>
    </view>
    <view class="grey-block"></view>
    <view class="list-item">
      <text class="sub-title">非联动选择</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ JSON.stringify(value3) }}</text>
        <view class="item-value">
          <text class="item-label">{{ label3 }}</text>
        </view>
      </view>
      <lb-picker v-model="value3"
        mode="unlinkedSelector"
        :list="list3"
        :level="3"
        :show-header="false"
        inline
        :dataset="{
          name1: 'value3',
          name2: 'label3',
          mode: 'unlinkedSelector'
        }"
        @change="handleChange">
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

      value2: ['2', '22', '223'],
      label2: '',

      value3: ['2', '33', '222'],
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
      ]
    }
  },
  onLoad () {},
  methods: {
    handleChange (e) {
      // 如果存在多个picker，可以在picker上设置dataset属性，change中获取，就能区分是哪个picker了
      console.log('change::', e)
      if (e) {
        const { name1, name2, mode } = e.dataset
        this[name1] = e.value
        switch (mode) {
          case 'selector':
            this[name2] = e.item.label
            break
          case 'multiSelector':
          case 'unlinkedSelector':
            this[name2] = e.item.map(m => m.label).join('-')
            break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../index/index.scss";
</style>
