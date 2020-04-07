let meetingList = [
    {
       name: "xx部门2020年度第X次会议",
    },
    {
      name: "xx需求沟通会"

    },

];



Page({
  data: {
    tabs: [
      {
        title: '我的任务',
        badgeType: 'text',
        badgeText: '6',
      },
      {
        title: '我的会议',
        badgeType: 'text',
        badgeText: '6',
      },
   
    ],
    activeTab: 0,
  },
    handleTabClick({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handleTabChange({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onTabBarTap(e) {
    const { index } = e.target.dataset
    this.setData({
      activeTab: index,
    });
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '光大会议管理',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
