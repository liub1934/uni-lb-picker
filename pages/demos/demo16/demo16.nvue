<template>
  <view class="list">
    <view class="grey-block"></view>
    <view class="list-item"
      @tap="handleTap('picker1')">
      <text class="sub-title">年月日选择</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ value1 }}</text>
        <view class="item-value">
          <text class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker1"
        v-model="value1"
        mode="dateSelector"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>

    <view class="list-item"
      @tap="handleTap('picker2')">
      <text class="sub-title">年月日默认值</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ value2 }}</text>
        <view class="item-value">
          <text class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker2"
        v-model="value2"
        mode="dateSelector"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>

    <view class="list-item"
      @tap="handleTap('picker3')">
      <text class="sub-title">开始结束日期限制（可精确到秒）</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ value3 }}</text>
        <view class="item-value">
          <text class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker3"
        v-model="value3"
        mode="dateSelector"
        :is-show-chinese="false"
        :start-date="startDate"
        :end-date="endDate"
        format="YYYY-MM-DD HH:mm:ss"
        display-format="YYYY-MM-DD-HH-mm-ss"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>

    <view class="list-item"
      @tap="handleTap('picker4')">
      <text class="sub-title">不显示年月日等日期文字</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ value4 }}</text>
        <view class="item-value">
          <text class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker4"
        v-model="value4"
        mode="dateSelector"
        :is-show-chinese="false"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>

    <view class="list-item"
      @tap="handleTap('picker5')">
      <text class="sub-title">自定义显示年月日等文字</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ value5 }}</text>
        <view class="item-value">
          <text class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker5"
        v-model="value5"
        mode="dateSelector"
        :ch-config="{
          year: '年年',
          month: '月月',
          day: '日日'
        }"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>

    <view class="list-item"
      @tap="handleTap('picker6')">
      <text class="sub-title">formatter自定义显示(百度、支付宝、头条小程序不支持)</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ value6 }}</text>
        <view class="item-value">
          <text class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker6"
        v-model="value6"
        mode="dateSelector"
        :formatter="formatter"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>

    <view class="list-item"
      @tap="handleTap('picker7')">
      <text class="sub-title">format格式化日期</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ value7 }}</text>
        <view class="item-value">
          <text class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker7"
        v-model="value7"
        mode="dateSelector"
        format="天朝YYYY年第MM月第DD日"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>

    <view class="radios">
      <radio-group class="radio-group"
        @change="radioChange">
        <view v-for="n in format"
          :key="n">
          <label class="flex-row-center">
            <radio :value="n"
              :checked="n === curFormat"> </radio>
            <text class="item-label">{{ n }}</text>
          </label>
        </view>
      </radio-group>
    </view>
    <view class="list-item"
      @tap="handleTap('picker8')">
      <text class="sub-title">自定义显示日期颗粒，可自由组合</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ value8 }}</text>
        <view class="item-value">
          <text class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker8"
        v-model="value8"
        mode="dateSelector"
        :format="curFormat"
        :display-format="displayFormat[curFormat]"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>

    <view class="list-item"
      @tap="handleTap('picker9')">
      <text class="sub-title">filter过滤列表，例：过滤排除年月日为奇数项，仅保留偶数项</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ value9 }}</text>
        <view class="item-value">
          <text class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker9"
        v-model="value9"
        mode="dateSelector"
        :filter="filter"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
      </lb-picker>
    </view>
    <view class="grey-block"></view>

    <view class="list-item"
      @tap="handleTap('picker10')">
      <text class="sub-title">插槽自定义日期范围选择</text>
      <view class="item-content">
        <text class="item-title">绑定值:{{ JSON.stringify(value10) }}</text>
        <view class="item-value">
          <text class="item-placeholder">点我打开选择器</text>
        </view>
      </view>
      <lb-picker ref="picker10"
        :value="value10[value10Active] || ''"
        mode="dateSelector"
        :dataset="{
          name: 'picker10'
        }"
        :start-date="value10Start"
        @change="handleChange"
        @confirm="handleConfirm"
        @cancel="handleCancel">
        <view class="picker-top"
          slot="picker-top">
          <view class="start"
            @tap="handleStartEnd(0)">
            <text>{{ value10[0] || '点击选择开始日期' }}</text>
          </view>
          <view class="end"
            @tap="handleStartEnd(1)">
            <text>{{ value10[1] || '点击选择结束日期' }}</text>
          </view>
        </view>
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
      value2: '2021-01-02',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '天朝2021年第01月第01日',
      value8: '',
      value9: '',
      value10: [],
      value10Active: 0,
      value10Start: '',
      startDate: '2018-08-08 08:08:08',
      endDate: '2021-08-08 08:08:08',
      curFormat: 'YYYY',
      format: [
        'YYYY',
        'YYYY-MM',
        'YYYY-MM-DD',
        'MM-DD',
        'DD日HH时mm分',
        'HH:mm:ss',
        'mm:ss',
        'mm分ss秒'
      ],
      displayFormat: {
        'YYYY': 'YYYY',
        'YYYY-MM': 'YYYY-MM',
        'YYYY-MM-DD': 'YYYY-MM-DD',
        'MM-DD': 'MM-DD',
        'DD日HH时mm分': 'DD-HH-mm',
        'HH:mm:ss': 'HH-mm-ss',
        'mm:ss': 'mm-ss',
        'mm分ss秒': 'mm-ss'
      }
    }
  },
  methods: {
    handleTap (name) {
      this.$refs[name].show()
    },
    handleChange (e) {
      console.log('change::', e)
      if (e.dataset.name === 'picker10') {
        this.$set(this.value10, this.value10Active, e.value)
      }
    },
    handleConfirm (e) {
      console.log('confirm::', e)
      
    },
    handleCancel (e) {
      console.log('cancel::', e)
    },
    formatter ({item, rowIndex, columnIndex }) {
      if (item.name === 'year') {
        return `天朝${item.value}年`
      } else if (item.name === 'month') {
        const arr = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
        return `${arr[item.value - 1]}月`
      } else if (item.name === 'day') {
        const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        return `${item.value}号-${week[item.$d.day()]}`
      }
    },
    radioChange (e) {
      this.value8 = ''
      this.curFormat = e.detail.value
    },
    filter (name, list) {
      list = list.filter(item => item.value%2 === 0)
      return list
    },
    handleStartEnd (active) {
      this.value10Active = active
      this.value10Start = active === 1 ? this.value10[0] : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../index/index.scss";
.picker-top {
  padding: 10px 0;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .start {
    margin-right: 5px;
  }
  .end {
    margin-left: 5px;
  }
}
</style>