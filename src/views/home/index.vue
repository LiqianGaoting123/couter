<template>
  <div>
    <div class="site">
      <!-- 头部 -->
      <div class="header">
        <div class="top clearfix">
          <div class="logo">
            <div class="img"></div>
            <h5 class="site-name">小 麦 助 教</h5>
            <h5 class="text">科技改 变 世 界</h5>
          </div>
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            text-color="#545c64"
            active-text-color="#ffd04b"
            :router="true"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">产品与解决方案</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-menu-item index="2-4">选项4</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">合作按钮</el-menu-item>
            <el-menu-item index="4">关于我们</el-menu-item>
            <el-menu-item index="5">免费试用</el-menu-item>
            <el-menu-item index="/login">机构登录</el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
    <el-carousel :interval="4000" arrow="always" class="d_jump" height="600px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <el-row>
          <el-col :span="24">
            <img :src="item.idView" class="banner_img">
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
    <!-- 主体部分1 -->
    <div class="content">
      <div class="center">
        <div class="modul-title">全方位拓展招生途径，多途径降低管理成本</div>
        <div class="content-module-body clearfix">
          <div class="module-img">
            <div class="big-img">
              <img style="width:100%;height:100%;" src="../../assets/20190309095429.gif" alt>
            </div>
          </div>
          <div class="module-text">
            <div class="part" v-for="iteminfo in textList" :key="iteminfo.id">
              <div class="module-text-title">{{iteminfo.title}}</div>
              <p class="module-text-content">{{iteminfo.conten}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体部分2 -->
    <div class="content-module-2">
      <div class="center">
        <div class="content-module-body clearfix">
          <div class="module-img fr">
            <div class="big-img-1">
              <img style="width:100%;height:100%" src="../../assets/20190309095429.gif" alt>
            </div>
          </div>
          <div class="module-box fl">
            <div class="title">为机构找精准流量，让流量高效率转化</div>
            <div class="partment fl" v-for="textInfo in textList2" :key="textInfo.id">
              <div class="icon icon1">
                <img :src="textInfo.imgView" style="width:100%;height:100%" alt>
              </div>
              <div class="content-box">
                <div class="titles">{{textInfo.title}}</div>
                <div class="text-content">{{textInfo.conten}}</div>
              </div>
              <div class="right-arrow arrow1">
                <img style="width:100%;height:100%" :src="textInfo.iconView" alt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体部分3 -->
    <div class="content-module-3">
      <div class="center">
        <div class="content-module-body clearfix">
          <div class="module-img f1">
            <div class="big-img-1">
              <img style="width:100%;height:100%" src="../../assets/20190309095429.gif" alt>
            </div>
          </div>
          <div class="module-box fr">
            <div class="title">管理轻松决策有道，降低成本提高收益</div>
            <div class="partment fl" v-for="textInfo in textList3" :key="textInfo.id">
              <div class="icon icon1">
                <img :src="textInfo.imgView" style="width:100%;height:100%" alt>
              </div>
              <div class="content-box">
                <div class="titles">{{textInfo.title}}</div>
                <div class="text-content">{{textInfo.conten}}</div>
              </div>
              <div class="right-arrow arrow1">
                <img style="width:100%;height:100%" :src="textInfo.iconView" alt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体部分4 -->
    <div class="content-module-2">
      <div class="center">
        <div class="content-module-body clearfix">
          <div class="module-img fr">
            <div class="big-img-1">
              <img style="width:100%;height:100%" src="../../assets/20190309095429.gif" alt>
            </div>
          </div>
          <div class="module-box fl">
            <div class="title">高效激活在读学员，口碑传播盘活资源</div>
            <div class="partment fl" v-for="textInfo in textList4" :key="textInfo.id">
              <div class="icon icon1">
                <img :src="textInfo.imgView" style="width:100%;height:100%" alt>
              </div>
              <div class="content-box">
                <div class="titles">{{textInfo.title}}</div>
                <div class="text-content">{{textInfo.conten}}</div>
              </div>
              <div class="right-arrow arrow1">
                <img style="width:100%;height:100%" :src="textInfo.iconView" alt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体部分5 -->
    <div class="content-module-5">
      <div class="center">
        <div class="module-item">
          <div class="module-title">多对一VIP运营，量身打造盈利新方案</div>
          <div class="module-department clearfix">
            <div class="department fl" v-for="item in textList5" :key="item.id">
              <div class="icon icon1">
                <img :src="item.imgView" style="width:100%;height:100%" alt>
              </div>
              <div class="module-content">
                <div class="title-five">{{item.title}}</div>
                <p class="titles-five">{{item.conten}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体部分6 -->
    <div class="content-module-5">
      <div class="module-unit">
        <div class="center">
          <div class="tops clearfix numBox">
            <div class="item item1 fl" v-for="itemd in textList6" :key="itemd.id">
              <div class="wrap">
                <span class="num">{{itemd.number}}</span>
                <span class="unit">{{itemd.unit}}</span>
              </div>
              <p class="type">{{itemd.type}}</p>
            </div>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
    </div>
    <!-- 主体部分7 -->
    <div class="content-module-5">
      <div class="center">
        <div class="module-display">
          <div class="module-imgs"></div>
        </div>
      </div>
    </div>
    <!-- 主体部分8 -->
    <div class="content-module-5">
      <div class="module-model">
        <div class="center">
          <div class="big-imgs">
            <div class="wrap-a">
              <div class="text-a">体验盈利新模式</div>
              <div class="btn-click">免费试用</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部9 -->
    <footer>
      <div class="center">
        <div class="footer-top">
          <div class="item f1" v-for="item in footer" :key="item.id">
            <div class="icons f1">
              <img style="width:100%;height:100%" :src="item.imgView" alt>
            </div>
            <div class="txt">{{item.title}}</div>
          </div>
        </div>
        <div class="footer-middle">
          <ul>
            <li class="item-box" v-for="item in footerBottom" :key="item.id">
              <p>{{item.title}}</p>
              <span>{{item.lista}}</span>
              <span>{{item.listb}}</span>
              <span>{{item.listc}}</span>
            </li>
            <li class="item-box" v-for="item in  footerBottomImg" :key="item.id">
              <p>{{item.title}}</p>
              <img :src="item.imgView" alt="">
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      imgList: [
        { id: 0, idView: require("../../assets/banner1.png") },
        { id: 1, idView: require("../../assets/banner3.png") }
      ],
      textList: [
        {
          id: 0,
          title: "01. 提升招生引流效果，增强机构盈利能力",
          conten: "招生解决方案： 朋友圈裂变活动、线上引流课、销售跟进"
        },
        {
          id: 1,
          title: "02. 全面提高管理效率, 降低56%运营成本",
          conten: "提效解决方案： 可视化排课、智能课消核算、低费率收银"
        },
        {
          id: 3,
          title: "03. 多维激活在读学员，促进老生续费带新",
          conten:
            "续费&转介绍解决方案： 家校互动一对一、积分兑换奖励、会员福利营销"
        }
      ],
      textList2: [
        {
          id: 0,
          imgView: require("../../assets/Mask@3x_1.png"),
          title: "活动营销",
          conten: "拼团、砍价、游戏... 人气活动，裂变传播",
          iconView: require("../../assets/arrow@3x.png")
        },
        {
          id: 1,
          imgView: require("../../assets/Mask@3x.png"),
          title: "内容营销",
          conten: "轻量线上体验课 获取精准学员线索",
          iconView: require("../../assets/arrow@3x.png")
        },
        {
          id: 2,
          imgView: require("../../assets/Mask@3x_2.png"),
          title: "销售跟进",
          conten: "意向学员实时跟踪 销售过程透明可视",
          iconView: require("../../assets/arrow@3x.png")
        }
      ],
      textList3: [
        {
          id: 0,
          imgView: require("../../assets/Mask@3x_3.png"),
          title: "教务管理",
          conten: "课时课消自动统计 调班调课一键操作",
          iconView: require("../../assets/arrow@3x.png")
        },
        {
          id: 1,
          imgView: require("../../assets/Mask@3x_4.png"),
          title: "财务管理",
          conten: "小麦收银省心省钱 收支流水准确可视",
          iconView: require("../../assets/arrow@3x.png")
        },
        {
          id: 2,
          imgView: require("../../assets/Mask@3x_5.png"),
          title: "数据分析",
          conten: "核心数据深度分析 高效决策规避风险",
          iconView: require("../../assets/arrow@3x.png")
        }
      ],
      textList4: [
        {
          id: 0,
          imgView: require("../../assets/Mask@3x_6.png"),
          title: "家校互动",
          conten: "机构专属家长端 提升服务，口碑变现",
          iconView: require("../../assets/arrow@3x.png")
        },
        {
          id: 1,
          imgView: require("../../assets/Mask@3x_7.png"),
          title: "积分体系",
          conten: "积分换取权益 促进续费，引导扩科",
          iconView: require("../../assets/arrow@3x.png")
        },
        {
          id: 2,
          imgView: require("../../assets/Mask@3x_8.png"),
          title: "会员营销",
          conten: "优惠券、奖品… 自发传播，激励老带新",
          iconView: require("../../assets/arrow@3x.png")
        }
      ],
      textList5: [
        {
          id: 0,
          imgView: require("../../assets/Mask_icon@3x.png"),
          title: "专属运营服务",
          conten: "专类运营，与机构量身匹配"
        },
        {
          id: 1,
          imgView: require("../../assets/Mask_icon@3x_2.png"),
          title: "高效落地实施",
          conten: "三阶段落地，高效掌握系统"
        },
        {
          id: 2,
          imgView: require("../../assets/Mask_icon@3x_3.png"),
          title: "金牌服务维护",
          conten: "机构专属运营群，全程多对一服务"
        },
        {
          id: 3,
          imgView: require("../../assets/Mask_icon@3x_4.png"),
          title: "后期增值服务",
          conten: "招生活动打造，拓展盈利手段"
        }
      ],
      textList6: [
        { id: 0, number: "21,593", type: "教育品牌的信赖", unit: "个" },
        {
          id: 1,
          number: "2,371,716",
          type: "学员来自小麦助教招生系统",
          unit: "名"
        },
        { id: 2, number: "243,670", type: "校长&老师持续使用", unit: "位" }
      ],
      footer: [
        {
          id: 0,
          imgView: require("../../assets/Mask_footer_2@3x.png"),
          title: "互联网式迭代 产品升级免费"
        },
        {
          id: 1,
          imgView: require("../../assets/Mask_footer_3@3x.png"),
          title: "互联网式迭代 产品升级免费"
        },
        {
          id: 2,
          imgView: require("../../assets/Mask_footer_1@3x.png"),
          title: "互联网式迭代 产品升级免费"
        }
      ],
      footerBottom: [
        {
          id: 0,
          type: "text",
          title: "产品与解决方案",
          lista: "招生&成交",
          listb: "管理&数据",
          listc: "续费&转介绍"
        },
        {
          id: 1,
          type: "text",
          title: "帮助中心",
          lista: "使用手册",
          listb: "视频教程",
          listc: "常见问题"
        },
        {
          id: 2,
          type: "text",
          title: "友情链接",
          lista: "郎培商学院",
          listb: "腾跃校长在线",
          listc: "机器人培训教育"
        },
        {
          id: 3,
          type: "text",
          title: "联系我们",
          lista: "咨询电话：400-6677-456",
          listb: "招聘邮箱 : hr@xiaomaiketang.com",
          listc: "地址 : 杭州市西湖区古墩路598号同人广场A座3楼"
        },
      ],
      footerBottomImg:[
        {
          id: 0,
          title: "小麦班主任",
          type: "img",
          imgView: require("../../assets/xmb.png")
        },
        {
          id: 1,
          title: "小麦班主任",
          type: "img",
          imgView: require("../../assets/xmb.png")
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style rel="stylesheet/scss" scoped>
@import "../../assets/styles/home.css";
</style>