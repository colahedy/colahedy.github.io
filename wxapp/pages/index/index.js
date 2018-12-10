Page({
  data: {
    username: "Ben",
    imgSrc: [
      'https://ohmycode.cn/images/1.jpg',
      'https://ohmycode.cn/images/2.jpg',
      'https://ohmycode.cn/images/3.jpg',
    ]
  },
  changeIndicatorDots: function(e){
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
})