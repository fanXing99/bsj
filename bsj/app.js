App({
  onLaunch: function () {
    console.log('App Launch')


    wx.getSystemInfo({
  success: function(res) {

    console.log(res.windowHeight)

  }
})
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },




  




})