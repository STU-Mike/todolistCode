var base64 = require("images/base64");
const app=getApp()
Page({
   data: {
    showView: true,
    dataList:{}
  },

   onLoad: function(){
     this.setData({
       icon: base64.icon20,
       dataList :app.globalData.dataList,
     });
    // this.data.dataList = app.globalData.dataList;
    // console.log(this.data.dataList);
  },

  onShow: function () {
    this.setData({
      icon: base64.icon20,
      dataList : app.globalData.dataList,
    });
  //  this.data.dataList=app.globalData.dataList;
    //console.log(this.data.dataList);
  },



   btn:function(){
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }
  
  
});

