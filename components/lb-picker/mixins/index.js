import { getColumns, isObject, isFunction } from '../utils'
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
        let item = {}
        let toastTitle = ''
        // #ifdef APP-NVUE
        item = e.target.dataset.item
        // #endif

        // #ifdef H5
        item = JSON.parse(e.currentTarget.dataset.item)
        // #endif

        // #ifndef APP-NVUE || H5
        item = e.currentTarget.dataset.item
        // #endif

        // #ifdef APP-PLUS || H5
        toastTitle = this.getLabel(item)
        // #endif

        // #ifndef APP-PLUS || H5
        toastTitle = item[this.props.label] || item
        // #endif
        uni.showToast({
          title: toastTitle,
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
    },
    getLabel (item, rowIndex, columnIndex) {
      if (this.formatter && isFunction(this.formatter)) {
        return this.formatter({ item, rowIndex, columnIndex })
      } else {
        return item[this.props.label] || item
      }
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
