<template>
  <view class="list">
    <view class="grey-block"></view>
    <view v-for="(item, index) in demoList"
      :key="index">
      <view class="list-item"
        @tap="handleTap(item)">
        <view class="item-content">
          <text class="item-left">{{ item.title }}</text>
        </view>
      </view>
      <view class="grey-block"></view>
    </view>
  </view>
</template>


<script>
  export default {
    data() {
      return {
        demoList: [
          {
            title: '单选',
            path: '/pages/demos/demo1/demo1'
          },
          {
            title: '多级联动',
            path: '/pages/demos/demo2/demo2'
          },
          {
            title: '多级非联动',
            path: '/pages/demos/demo12/demo12'
          },
          {
            title: '省市区选择',
            path: '/pages/demos/demo3/demo3'
          },
          {
            title: '日期选择',
            path: '/pages/demos/demo16/demo16'
          },
          {
            title: 'inline模式',
            path: '/pages/demos/demo13/demo13'
          },
          // #ifdef APP-NVUE || H5
          {
            title: 'formatter自定义显示',
            path: '/pages/demos/demo14/demo14'
          },
          // #endif
          {
            title: '长按Toast提示',
            path: '/pages/demos/demo15/demo15'
          },
          {
            title: '自定义确定取消文字及颜色',
            path: '/pages/demos/demo4/demo4'
          },
          {
            title: '插槽自定义选择器各部分',
            path: '/pages/demos/demo5/demo5'
          },
          {
            title: '可视区自定义滚动个数',
            path: '/pages/demos/demo6/demo6'
          },
          {
            title: '自定义数据结构',
            path: '/pages/demos/demo7/demo7'
          },
          {
            title: '自定义样式颜色',
            path: '/pages/demos/demo9/demo9'
          },
          {
            title: '相关事件',
            path: '/pages/demos/demo10/demo10'
          },
          {
            title: '异步加载整体数据',
            path: '/pages/demos/demo11/demo11'
          }
        ]
      }
    },
    methods: {
      handleTap ({ path }) {
        uni.navigateTo({
          url: path
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
