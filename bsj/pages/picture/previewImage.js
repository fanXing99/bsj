Page({
  data:{
    text:"Page detail",
    url: '',
    height: 0,
    width: 0,
    loadingHidden: false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数



var img=new Image();
 img.src=options.title;


 console.log(img.height)

    this.setData({
      imageStr: options.title,
      height: img.height,
      loadingHidden: true

    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})




