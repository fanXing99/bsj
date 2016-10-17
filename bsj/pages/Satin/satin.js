Page({
  data:{
    // text:"这是一个页面"
    satins:[],
    toast2Hidden:true,


    hidden1:false,
     page: 1,
     size: 20,
     hasMore:true,
     hasRefesh:false


  },
  toast2Change:function(){

    this.setData({
  toast2Hidden:true
      
    })
  },
//刷新处理
refesh: function(e) {
 console.log('dddd');



  var that = this;
  wx.request({
 url: 'https://route.showapi.com/255-1',
  data: {
     page: '1' ,
     showapi_appid: '19791',
     type:'29',
     showapi_sign:'1685dd5bd4c0a3c6af5b9da508985964'
  },
   header: {
      'Content-Type': 'application/json'
  },
  success: function(res) {
   if(res.data.showapi_res_code == 0){
that.setData({
          satins:res.data.showapi_res_body.pagebean.contentlist,
 hidden1: true,
       page:1,
       hasRefesh:false,
      })
    }else{
       that.setData({
          toast2Hidden:false,
          msg:data.showapi_res_error,

      })
    }
  }
  })



  
},
    loadMore: function(e) {
console.log('ccc');
    },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
var that = this;

    wx.request({
  url: 'https://route.showapi.com/255-1',
  data: {
     page: '1' ,
     showapi_appid: '19791',
     type:'29',
     showapi_sign:'1685dd5bd4c0a3c6af5b9da508985964'
  },
  header: {
      'Content-Type': 'application/json'
  },
  success: function(res) {
    if(res.data.showapi_res_code == 0){
that.setData({
         hidden1: true,
          satins:res.data.showapi_res_body.pagebean.contentlist
      })
    }else{
      that.setData({
          toast2Hidden:false,
          msg:data.showapi_res_error,
      })
    }
  }
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

