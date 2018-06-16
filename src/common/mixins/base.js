import wepy from 'wepy'
import Tips from 'common/js/tips'
import Info from 'api/info'

export default class base extends wepy.mixin {
  loaded() {
    this.init = true
    this.$apply()
    Tips.loaded()
  }

  // 卸载清理
  onUnload() {
    Object.assign(this, this.def)
  }

  async collectFormIds(formId) {
    const date = new Date()
    const now = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    const collectDate = wepy.getStorageSync('collectDate')
    const collectLength = wepy.getStorageSync('collectLength')
    if (now === collectDate && collectLength >= 7) {
      return
    } else if (now === collectDate && collectLength < 7) {
      const res = await Info.collectFormIds({form_ids: [formId]})
      wepy.setStorageSync('collectLength', collectLength + 1)
      console.log(res)
    } else if (now !== collectDate) {
      wepy.setStorageSync('collectDate', now)
      const res = await Info.collectFormIds({form_ids: [formId]})
      console.log(res)
      wepy.setStorageSync('collectLength', 0)
    }
  }

  methods = {
    nopen() {
      Tips.alert('尚未开放')
    }
  }
}
