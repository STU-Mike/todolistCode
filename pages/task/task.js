const app=getApp();

Page({
  data:{
    array: ['生活', '工作', '学习', '其他',''],
    index: 0,
    taskname:null,
    taskdetail:null,
    num:0,
    //用来接收全局的dataList
    dataList:{}
    
    
  },
  //对局部的dataList和num进行初始化
  onLoad:function(){
    this.data.dataList = app.globalData.dataList;
    this.data.num=this.data.dataList.num;
    console.log(this.data.num);
    console.log(this.data.dataList);
  },
  //取标签的值
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
//任务名的值
  getTaskName:function(e){
    console.log(e.detail.value)
    this.setData({
      taskname:e.detail.value
    })
  },
//任务内容的值
  getTaskDetail:function(e){
    console.log(e.detail.value)
    this.setData({
      taskdetail:e.detail.value
    })
  },
//提交后的存储
  submit:function(e){
    if(this.data.taskname==null){//判断是否任务名为空
      wx.showModal({
        title: '',
        content: '任务名不能为空哦！',
        confirmText: "确定",
        cancelText: "取消",

      });
    }
    else{
    //console.log("success");
    //把数据存为对象
    var temp={
      "taskname":this.data.taskname,
      "taskdetail":this.data.taskdetail,
      "label":this.data.array[this.data.index],
      "finish":1,
      "keyname":"task"+this.data.num
    };
     console.log(temp);
     // console.log(temp.keyname);
     // this.dataList=app.globalData.dataList;
     // console.log(this.dataList);
      //记录下标
      var index=temp.keyname;
      //增加任务
     this.data.dataList[index]=temp;
     // console.log(app.globalData.dataList[index]);
     //num自增
    this.data.num++;
    this.data.dataList.num=this.data.num;
    //全局的datalist同步局部的dataList
    app.globalData.dataList=this.data.dataList;
   // console.log(app.globalData.dataList);
   /* this.setData({
      taskname:null,
      taskdetail:null,
      index:0
    })*/
      wx.navigateBack({
        delta: 1
      })
  }
  }
})
