<template>
  <div class="dashboardBlock mBlock">
    <div class="pageTitle">Dashboard</div>
    <v-divider></v-divider>
    <div>
      <div class="dashboardClientItems" style="display: flex">
        <div class="dashboardClient">
          <div style="display: gird">
            <!-- <v-icon class="dashboardClientImg"
              >mdi-account-group-outline</v-icon
            > -->
            <img
              :src="require('@/assets/img/Blue SP.png')"
              class="dashboardClientImg"
            />
          </div>
          <div style="display: gird">
            <p class="dashboardClientsTitle">New clients</p>
            <p class="dashboardClientsNum">9</p>
          </div>
        </div>
        <div class="dashboardClient">
          <div style="display: gird">
            <!-- <v-icon class="dashboardClientImg"
              >mdi-account-group-outline</v-icon
            > -->
            <img
              :src="require('@/assets/img/Blue SP.png')"
              class="dashboardClientImg"
            />
          </div>
          <div style="display: gird">
            <p class="dashboardClientsTitle">Total clients</p>
            <p class="dashboardClientsNum">39</p>
          </div>
        </div>
        <div class="dashboardClient">
          <div style="display: gird">
            <!-- <v-icon class="dashboardClientImg">mdi-download-box-outline</v-icon> -->
            <img
              :src="require('@/assets/img/Blue SDK version.png')"
              class="dashboardClientImg"
            />
          </div>
          <div style="display: gird">
            <p class="dashboardClientsTitle">SDK Version</p>
            <p class="dashboardClientsNum">1.2.2</p>
          </div>
        </div>
      </div>
      <div class="otherInfo" v-if="userType === 'admin'">
        Provider activity in April
      </div>
      <div v-else-if="userType === 'provider'">
        <v-divider></v-divider>
        <div class="dateBlock">
          <el-date-picker
            v-model="dateRange"
            type="daterange"
            range-separator="To"
            start-placeholder="Start Date"
            end-placeholder="End Date"
          >
          </el-date-picker>
          <el-button-group>
            <el-button
              :class="dataType === 'day' ? 'typeActived' : ''"
              @click="changeDateType('day')"
              >day</el-button
            >
            <el-button
              :class="dataType === 'week' ? 'typeActived' : ''"
              @click="changeDateType('week')"
              >week</el-button
            >
            <el-button
              :class="dataType === 'month' ? 'typeActived' : ''"
              @click="changeDateType('month')"
              >month</el-button
            >
          </el-button-group>
        </div>
        <div>22222</div>
        <div style="display:flex">
          <div  class="dateBlock" style="display:block ">
            <div class="dashboardItemTitle">
              <p>1111111</p>
            </div>
            <div>
              22222
            </div>
          </div>
          <div  class="dateBlock" style="display:block ">
            <div class="dashboardItemTitle">
              <p>1111111</p>
            </div>
            <div>
              22222
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userType: "",
      dateRange: "",
      dataType: "day",
    };
  },
  mounted() {
    this.userType = this.$route.query.userInfo.userType;
    console.log("userType", this.$route.query.userInfo);
  },
  methods: {
    changeDateType(type) {
      // alert(type)
      this.dataType = type;
      // 切换时间轴
    },
  },
};
</script>
<style>
.dashboardBlock .dashboardClientItems {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
}
.dashboardBlock .dashboardClient {
  display: flex;
  width: 30%;
  height: 80px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #f8f8f9;
  box-shadow: 0 0 5px #7f8591;
}
.dashboardBlock .dashboardClientImg {
  width: 40px;
  height: auto;
  font-size: 40px !important;
  margin: 19px 20px;
  line-height: 80px;
  color: royalblue !important;
}
.dashboardBlock .dashboardClientsTitle {
  font-weight: 500;
  line-height: 20px;
  font-size: 18px;
  color: #7f8591;
  padding-top: 10px;
}
.dashboardBlock .dashboardClientsNum {
  font-weight: bolder;
  line-height: 40px;
  font-size: 30px;
}
.dashboardBlock .otherInfo {
  margin-top: 30px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #f8f8f9;
  box-shadow: 0 0 5px #7f8591;
  color: #7f8591;
  padding: 20px;
  width: 100%;
  height: 300px;
}
.dateBlock {
  margin: 20px 0px;
  justify-content: space-between;
  width: 100%;
  display: flex;
  padding: 20px;
  border: 1px solid;
  border-radius: 5px;
  border: 1px solid #f8f8f9;
  box-shadow: 0 0 5px #7f8591;
}
.dashboardItemTitle{
  line-height: 40px;
  width: 100%;
  border-bottom: 1px solid #EBEBEB;
}
.typeActived {
  background-color: #edebeb !important;
  color: #555555 !important;
}
</style>