import { getColumns, isObject } from '../utils'
export const commonMixin = {
  data () {
    return {
      isConfirmChange: false,
      indicatorStyle: `height: 34px`,
      pressTimeout: null
    }
  },
  created () {
    this.init('init')
  },
  methods: {
    init (changeType) {
      if (this.list && this.list.length) {
        const column = getColumns({
          value: this.value,
          list: this.list,
          mode: this.mode,
          props: this.props,
          level: this.level
        })
        const { columns, value, item, index } = column
        this.selectValue = value
        this.selectItem = item
        this.pickerColumns = columns
        this.pickerValue = index
        this.$emit('change', {
          value: this.selectValue,
          item: this.selectItem,
          index: this.pickerValue,
          change: changeType
        })
      }
    },
    touchstart (e) {
      if (!this.pressEnable) return
      clearTimeout(this.pressTimeout)
      this.pressTimeout = setTimeout(() => {
        // #ifdef APP-NVUE
        const item = e.target.dataset.item
        // #endif

        // #ifndef APP-NVUE
        const item = e.currentTarget.dataset.item
        // #endif
        uni.showToast({
          title: isObject(item) ? item[this.props.label] : item,
          icon: 'none'
        })
      }, this.pressTime)
    },
    touchmove () {
      if (!this.pressEnable) return
      clearTimeout(this.pressTimeout)
    },
    touchend () {
      if (!this.pressEnable) return
      clearTimeout(this.pressTimeout)
    }
  },
  watch: {
    value () {
      if (!this.isConfirmChange) {
        this.init('value')
      }
    },
    list () {
      this.init('list')
    }
  }
}
