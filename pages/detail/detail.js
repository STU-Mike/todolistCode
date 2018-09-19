//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    datalist:{},
    paramkeyname:"",
    name: "",
    detail: "",
    label: "",
    finish:"",
    showbtn:true
  },

  onLoad: function (options) {
    var that=this;
    console.log(options);
    that.data.paramkeyname=options.keyname;
    that.data.datalist=app.globalData.dataList;
    //console.log(that.datalist)
    this.setData({
      name:that.data.datalist[this.data.paramkeyname].taskname,
      detail: that.data.datalist[this.data.paramkeyname].taskdetail,
      label: that.data.datalist[this.data.paramkeyname].label,
      finish: that.data.datalist[this.data.paramkeyname].finish
    })
    if(this.data.finish==2)
    {
      this.setData({
        showbtn:false
      })
    }


  },

  deletetask:function(e){
    console.log("shanchu");
    delete this.data.datalist[this.data.paramkeyname];
    app.globalData.dataList=this.data.datalist;
    wx.navigateBack({
      delta: 1
    })
  },

  finishtask:function(e){
    console.log("完成任务");
    this.data.datalist[this.data.paramkeyname].finish=2;
    app.globalData.dataList = this.data.datalist;
    wx.navigateBack({
      delta: 1
    })
  }


})
