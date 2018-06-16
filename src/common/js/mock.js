/* eslint-disable no-undef */

export default class mock {
  /**
   * 生成随机图片数据
   */
  static errorImgs = [592, 281, 346, 346, 540, 843, 601, 285,
    762, 750, 422, 148, 771, 97, 897,
    205, 632, 462, 597, 647, 697, 595, 934, 968, 713, 138,
    303, 759, 414, 246, 710, 763, 105, 854, 895, 712, 262,
    578, 298, 636, 463, 747, 850, 286, 753, 752, 245, 589,
    734, 706, 470, 754, 226, 792, 587, 714, 489, 224, 801,
    708, 761, 333, 150, 963, 644, 956, 86, 394, 917, 899,
    707, 746, 748, 332, 561, 624, 438, 711, 745, 920, 725,
    812, 709, 207, 720, 359, 673, 749, 751]

  static randomNum(max, min) {
    let num = Math.floor(Math.random() * (max - min + 1) + min)
    if (this.errorImgs.indexOf(num) !== -1) {
      return this.randomNum(max, min)
    } else {
      return num
    }
  }

  static getImgList(limit) {
    const path = 'https://picsum.photos/900/1200/?image='
    let list = []
    for (let i = 0; i < limit; i++) {
      let url = path + this.randomNum(1000, 1)
      list.push(url)
    }
    return list
  }
}
