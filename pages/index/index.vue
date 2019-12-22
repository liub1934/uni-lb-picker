<template>
  <view class="list">
    <view class="list-item"
      v-for="(item, index) in demoList"
      :key="index"
      @tap="handleTap(item)">
      <view class="item-title">{{ item.title }}</view>
      <uni-icons type="arrowright"></uni-icons>
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
						path: '/pages/demos/demo1'
					},
					{
						title: '多级联动',
						path: '/pages/demos/demo2'
					},
					{
						title: '省市区选择',
						path: '/pages/demos/demo3'
					},
					{
						title: '自定义确定取消文字及颜色',
						path: '/pages/demos/demo4'
					},
					{
						title: '插槽自定义选择器头部',
						path: '/pages/demos/demo5'
					},
					{
						title: '可视区自定义滚动个数',
						path: '/pages/demos/demo6'
					},
					{
						title: '自定义数据结构',
						path: '/pages/demos/demo7'
					},
					{
						title: '自定义样式颜色',
						path: '/pages/demos/demo9'
					},
					{
						title: '相关事件',
						path: '/pages/demos/demo10'
					},
					{
						title: '异步加载整体数据',
						path: '/pages/demos/demo11'
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

<style lang="scss">
.list {
  background-color: $uni-bg-color-grey;
  .list-item {
    display: flex;
    align-items: center;
    height: 88rpx;
    background-color: $uni-text-color-inverse;
    margin-bottom: 20rpx;
    padding: 0 20rpx;
    .item-title {
      flex: 1;
      font-size: 32rpx;
    }
  }
}
</style>
