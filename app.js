App({

  onLaunch: function () {
    /*let temp={};
    wx.getStorage({
      key: 'key',
      success: function (res) {
        console.log("success");
        console.log(res.data);
        // 异步接口在success回调才能拿到返回值
       temp= res.data;
        //this.num = this.globalData.dataList.num
      },
      fail: function () {
        console.log('读取key发生错误')
      }
      
    })
    this.globalData.dataList = temp;
   // console.log(this.globalData);*/
  },

  onShow(){
    let that=this;
    wx.getStorage({
      key: 'key',
      success: function (res) {
        console.log("success")
        console.log(res.data)
        that.globalData.dataList = res.data;
        if (that.globalData.dataList.num == null) {
          that.globalData.dataList.num = 0;
        }
        console.log(that.globalData.dataList);
        // 异步接口在success回调才能拿到返回值
       // this.globalData.dataList = res.data
        //this.num = this.globalData.dataList.num
      },
      fail: function () {
        console.log('读取key发生错误')
      }
    })
   /* this.globalData.dataList=temp1;
    if(this.globalData.dataList.num==null){
      this.globalData.dataList.num=0;
    }
    console.log(this.globalData.dataList);*/
    
  },

  onHide(){
    wx.setStorage({
      key: "key",
      data: this.globalData.dataList,
  success: function () {
        console.log('写入value1成功')
      },
      fail: function () {
        console.log('写入value1发生错误')
      }
    })
  },
   globalData:{
     dataList:{
      num:0
     }
   }
})