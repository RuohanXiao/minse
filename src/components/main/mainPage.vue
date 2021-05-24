<template>
  <!-- 首页 -->
  <div class="mainBlock blockChild">
    <div class="mainPageBlock">
      <div class="mainForm">
        <div class="leftBlock">
          <div class="navigationBlock">
            <v-navigation-drawer permanent>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    <div style="text-align: end">
                      <v-btn-toggle>
                        <v-btn small class="leftBlockSmall" :class="isFrist?'btndisable':''" @click="goBack">
                          <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                        <v-btn small class="rightBlockSmall" :class="isLast?'btndisable':''" @click="goForce">
                          <v-icon>mdi-arrow-right</v-icon>
                        </v-btn>
                      </v-btn-toggle>
                    </div>
                  </v-list-item-title>
                  <v-list-item-subtitle >
                    <div @click="showSelectList">
                      <div class="optionsItem shownItem">
                        <div style="    display: flex;
    align-items: center;">
                          <img
                            :src="workspaceItems[workspaceItem].picUrl"
                            class="workspaceImg"
                            alt=""
                          />
                        </div>
                        <div style="display: gird;margin: auto 0;">
                          <p class="workspaceTitle">
                            {{ workspaceItems[workspaceItem].title }}
                          </p>
                          <p class="workspaceDes">
                            {{ workspaceItems[workspaceItem].des }}
                          </p>
                        </div>
                        <div style="width: -webkit-fill-available;margin:auto 0;text-align:right">
                        <div style="margin:auto 0;text-align:right">
                        <img class="upDown" src="@/assets/img/upDown.png" alt="">
                        </div>
                        </div>
                      </div>
                    </div>
                    <el-select
                      ref="selectWorkspace"
                      v-model="workspaceItem"
                      placeholder="请选择"
                      id="workspaceItem"
                      @change="chageWorkSpaceItem"
                    >
                      <el-option
                        v-for="(item, index) in workspaceItems"
                        :key="index"
                        :label="item.title"
                        :value="index"
                      >
                        <div class="optionsItem">
                          <div style="display: gird">
                            <img
                              :src="item.picUrl"
                              class="workspaceImg"
                              alt=""
                            />
                          </div>
                          <div style="display: gird;margin: auto 0;">
                            <p class="workspaceTitle">{{ item.title }}</p>
                            <p class="workspaceDes">{{ item.des }}</p>
                          </div>
                        </div>
                      </el-option>
                    </el-select>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list dense nav style="margin-top:20px">
                <v-list-item
                  v-for="(item, index) in menuItems"
                  :key="index"
                  link
                  :class="item.router==routerName?'activedItem':'disactivedItem'"
                  @click="getView(item.router)"
                >
                  <router-link :to="item.router" >
                  <!-- <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon> -->
                  <img class="menuItemsImg" :src='item.icon' alt="item.title">
                  <v-list-item-content style="margin-left: 10px;">
                    <v-list-item-title class="navFont">{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </router-link>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </div>
        </div>
        <div class="rightBlock">
            <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  data: () => ({
    routerName:"dashboard",
    routerNameHistory:['dashboard'],
    routerNameHistoryIndex:0,
    isFrist:true,
    isLast:true,
    workspaceItems: [
      {
        title: "Bindo Labs1",
        value: "/workspace1",
        picUrl: require("@/assets/img/logo.png"),
        des: "Workspace",
      },
      {
        title: "Bindo Labs2",
        value: "/workspace2",
        picUrl: require("@/assets/img/workspace1.png"),
        des: "Workspace",
      },
      {
        title: "Bindo Labs3",
        value: "/workspace3",
        picUrl: require("@/assets/img/workspace2.png"),
        des: "Workspace",
      },
      {
        title: "Bindo Labs4",
        value: "/workspace4",
        picUrl: require("@/assets/img/logo.png"),
        des: "Workspace",
      },
      {
        title: "Bindo Labs5",
        value: "/workspace5",
        picUrl: require("@/assets/img/logo.png"),
        des: "Workspace",
      },
      {
        title: "Bindo Labs6",
        value: "/workspace6",
        picUrl: require("@/assets/img/logo.png"),
        des: "Workspace",
      },
      {
        title: "Bindo Labs",
        value: "/workspace7",
        picUrl: require("@/assets/img/logo.png"),
        des: "Workspace",
      },
    ],
    menuItems: [],
    workspaceItem: "0",
  }),
  mounted() {
    let params = this.$route.query
    this.menuItems= params.authList
    this.$router.push({ path: '/main/' + this.routerName,query:{"userInfo":params}});
  },
  methods: {
    // 展开workspace
    showSelectList() {
      console.log(
        document.getElementById("workspaceItem").clientHeight,
        document.getElementById("workspaceItem").clientWidth
      );
      this.$refs["selectWorkspace"].$el.click();
    },
    chageWorkSpaceItem(item) {
      console.log(item);
    },
    getView(name){
        console.log(name);
        this.routerNameHistory.push(name)
        this.routerNameHistoryIndex = this.routerNameHistory.length-1
        this.routerName = name
        this.$router.push({ path: '/main/' + name});
        this.isFrist =false
        this.isLast = true
    },
    goBack(){
      if(this.routerNameHistoryIndex>0){
        this.routerNameHistoryIndex = this.routerNameHistoryIndex-1
        this.$router.push({ path: '/main/' + this.routerNameHistory[this.routerNameHistoryIndex]});
      }
      this.isFrist =!(this.routerNameHistoryIndex>0)
      this.isLast = !(this.routerNameHistoryIndex<this.routerNameHistory.length-1)
      console.log('this.routerNameHistory,this.routerNameHistoryIndex',this.routerNameHistory,this.routerNameHistoryIndex)
    },
    goForce(){
      if(this.routerNameHistoryIndex<this.routerNameHistory.length-1){
        this.routerNameHistoryIndex = this.routerNameHistoryIndex+1
        this.$router.push({ path: '/main/' + this.routerNameHistory[this.routerNameHistoryIndex]});
      }
      this.isFrist =!(this.routerNameHistoryIndex>0)
      this.isLast = !(this.routerNameHistoryIndex<this.routerNameHistory.length-1)
    }
  },
};
</script>
<style>
.mainForm {
  /* padding: 10px 0; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px;
}
.mainPageBlock {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: calc(95vh);
  width: calc(100vw - 5vh);
  background-color: #dab6fd;
  background-image: linear-gradient(45deg, #dab6fd, #3b0273);
}
.mainPageBlock .el-select {
  width: 100%;
  height: 0;
}
.mainPageBlock .el-select .el-input.is-focus .el-input__inner {
  border: none !important;
}
.leftBlock {
  background-color: #f8f8f9;
  border-top-left-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
}
.rightBlock {
    width: 100%;
  border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}
.leftBlockSmall {
  border-top-left-radius: 5px !important;
  border-bottom-left-radius: 5px !important;
  border-right: none !important;
  width: 30px;
  background-color: transparent !important;
  font-size: 10px !important;
}
.leftBlockSmall i,.rightBlockSmall i{
  color: #A3A8B1;
  font-size: 16px !important;
  background-color: transparent !important;
}
.rightBlockSmall {
  border-top-right-radius: 5px !important;
  border-bottom-right-radius: 5px !important;
  width: 30px;
  background-color: transparent !important;
  font-size: 10px;
}
.rightBlockSmall button:not(.btndisable){
cursor: pointer;
}
.navigationBlock {
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.navigationBlock .theme--light.v-navigation-drawer {
  background-color: #f8f8f9 !important;
}
.navigationBlock .v-btn:not(.v-btn--round).v-size--small {
  min-width: 16px;
}
.navigationBlock .v-btn-toggle > .v-btn.v-btn {
  padding: 0 4px !important;
}
.navigationBlock .el-input__inner {
  padding: 0 !important;
  border: none !important;
  width: 0 !important;
  height: 0 !important;
}
.navigationBlock .el-select .el-input .el-select__caret {
  font-size: 0;
}
.navigationBlock a{
    display: flex;
    color: rgba(0,0,0,0.8);
}
.navigationBlock .v-list-item__content {
  padding: 10px;
}
.navigationBlock .v-list-item__content .el-input--suffix,.navigationBlock .v-list-item__content .el-input--suffix i {
  height: 0 !important;
}
.navigationBlock .el-select-dropdown{
  margin-top: -10px !important;
}
.activedItem{
  background-color: #E7E9EB;
}
.disactivedItem{
  background-color:transparent;
}
.activedItem .navFont{
  font-size: 18px;
  color: #767D8A;
  font-family: Roboto-Medium;
}
.disactivedItem .navFont{
  font-size: 18px;
  color: #9DA6B7;
  font-family: Roboto-Regular;
}
.workspaceImg {
  width: 45px;
  height: 39px;
  line-height: 39px;
  margin: 6px 5px 6px 0;
}
.el-select-dropdown__item {
  height: 60px !important;
}
.optionsItem {
  display: flex;
  height: 50px;
  margin: 5px 0;
}
.optionsItem .workspaceTitle {
  line-height: 15px;
  font-size: 13px;
  color: #000000;
  font-family: Roboto-Medium;
}
.optionsItem .workspaceDes {
  line-height: 15px;
  font-size: 13px;
  color: #9B9B9B;
  font-family: Roboto-Regular;
}
.shownItem{
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.3);
  padding: 0 5px;
  height: 66px;
}
.btndisable{
  cursor:not-allowed;
}
.btndisable i{
  background-color: #F9F9F9;
  color:#E1E3E6 !important;
}
.upDown{
  font-size: 16px;
  width: 16px;
  height: 16px;
}
.menuItemsImg{
  font-size: 16px;
  width: 16px;
  height: 16px;
  margin: auto;
}

</style>
