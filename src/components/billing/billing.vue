<template>
  <div class="billingBlock mBlock">
    <div class="pageTitle">Billing</div>
    <v-divider></v-divider>
    <div class="billingBox" v-if="shownBillingList">
      <div class="searchBlock">
        <el-input placeholder="Search for a provider..." v-model="searchInput">
        </el-input>
      </div>
      <div class="blockList">
        <div v-for="(item, index) in billings" :key="index" class="blockItem" @click="turnToLink(index)">
            <img src="@/assets/img/workspace3.png" alt="" >
            <v-divider></v-divider>
          <div style="text-align:left;padding:0 20px 5px 20px;">
              <p class="blockItemTitle">
                Spectra
                </p>
                <p class="blockItemDes">
                Lorem ipsum
                </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
        <div>
            <p class="billingDetailTitle">Transaction</p>
            <div class="priceBlock">
                <p class="totalMoney">13 403.50</p>
                <p class="moneyUnit">USD</p>
            </div>
        </div>
        <el-tabs tab-position="top" style="height: 200px;" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Summary" name="Summary">
                <p class="paneTitle">Activation fees</p>
                <div v-for="(items,indexs) in DataItems" :key="'DataItems'+indexs" style="display:grid">
                    <p class="paneSubtitle">{{items.title}}</p>
                    <div v-for="(item,index) in items.data" :key="index" class="DataItems">
                        <p class="tableBoldFont">{{item.name}}</p>
                        <div class="statusItem">
                            <div class="statusTag" :class="item.status+'Style'">
                                <div class="statusball" ></div>
                            </div>
                            <span>{{item.status}}</span>
                        </div>
                        <p class="tableFont">{{item.date}}</p>
                        <p class="tableFont">{{item.price}}</p>
                        <div class="tableIcon">
                            <v-icon >mdi-dots-vertical</v-icon>
                        </div>
                    </div>
                <v-divider style="margin:20px 0"></v-divider>
                </div>
            </el-tab-pane>
            <el-tab-pane label="Chart" name="Chart">Chart</el-tab-pane>
            <el-tab-pane label="Statistics" name="Statistics">Statistics</el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        DataItems:[{title:'April',data:[{
            name:'Transaction Description1',
            status:'Credit',
            date:'10 April, 20',
            price:'+ $70,00'
        },
        {
            name:'Transaction Description1',
            status:'Refund',
            date:'10 April, 20',
            price:'- $190,00'
        }]},
        {title:' March',data:[{
            name:'Transaction Description1',
            status:'Credit',
            date:'10 March, 20',
            price:'+ $70,00'
        },
        {
            name:'Transaction Description1',
            status:'Refund',
            date:'10 March, 20',
            price:'- $190,00'
        },{
            name:'Transaction Description1',
            status:'Refund',
            date:'10 March, 20',
            price:'- $190,00'
        }]}],
        
        activeName: 'Summary',
    shownBillingList:true,
      searchInput: null,
      billings: new Array(230).fill(""),
    };
  },
  methods: {
      turnToLink(index){
          console.log(index)
          this.shownBillingList = false
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
  },
};
</script>
<style>
.billingBlock .searchBlock {
  margin: 10px 0;
}
.searchBlock .el-input__inner {
  color: gray !important;
  border: none !important;
  background: rgba(0, 0, 0, 0.08) !important;
}
.searchBlock input::-webkit-input-placeholder {
  color: gray !important;
}
.searchBlock input::-moz-input-placeholder {
  color: gray !important;
}
.searchBlock input::-ms-input-placeholder {
  color: gray !important;
}

.billingBlock .blockList {
  display: flex;
  flex-wrap: wrap;
  height: calc(100% - 60px);
  overflow-y: scroll;
}
.billingBlock .blockItem {
  width: calc(16.6% - 10px);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin: 0 5px 10px 5px;
  height: 250px;
  text-align: center;
}
.billingBlock .billingBox {
  height: calc(100% - 60px) !important;
}
.blockItem img{
    height: 60%;
    width: auto;
    max-width: 100%;
    padding: 5px;
}

.blockItemTitle{
    font-weight: bold;
    line-height: 30px;
}
.blockItemDes{
    font-weight: 300;
    line-height: 20px;
}
@media screen and (max-width: 2000px) {
  .billingBlock .blockList {
    display: flex;
    flex-wrap: wrap;
    height: calc(100% - 60px);
    overflow-y: scroll;
  }
  .billingBlock .blockItem {
    width: calc(25% - 10px);
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    margin: 0 5px 10px 5px;
    height: 150px;
  }
  .billingBlock .billingBox {
    height: calc(100% - 60px) !important;
  }
}

/* 设置了浏览器宽度不大于901px时 abc 显示200px宽度 */
@media screen and (max-width: 1400px) {
  .billingBlock .blockList {
    display: flex;
    flex-wrap: wrap;
    height: calc(100% - 60px);
    overflow-y: scroll;
  }
  .billingBlock .blockItem {
    width: calc(33% - 10px);
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    margin: 0 5px 10px 5px;
    height: 150px;
  }
  .billingBlock .billingBox {
    height: calc(100% - 60px) !important;
  }
}
.billingDetailTitle{
    font-size: 14px;
    color: darkgray;
    margin: 15px 0;
}
.priceBlock{
    display: flex;
}
.totalMoney{
    font-weight: 500;
    font-size: 60px;
}
.moneyUnit{
    color: darkgray;
    margin: 15px 20px;
}
.paneTitle{
    font-weight: 600;
    font-size: 18px;
    margin: 10px 0;
}
.paneSubtitle{
    font-weight: 550;
    font-size: 16px;
    color: darkgray;
    margin: 10px 0;
}
.DataItems{
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
}
.statusItem{
    display: flex;
     width: 7em;
     text-align: left;
}
.statusTag{
    border-radius: 5px;
    /* border: 1px solid #dab6fd; */
    
    width: 20px;
    height: 20px;
}
.statusTag .statusball{
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 4px;
}
  .CreditStyle{
      text-align: left;
      line-height: 40px;
          margin: auto 5px;
    border: 1px solid #bb81f5;
    background: rgba(218,182,253,0.5);
  }
  .CreditStyle .statusball{
    background: #bb81f5;
  }
  .RefundStyle{
      text-align: left;
      line-height: 40px;
      margin: auto 5px;
    border: 1px solid #8CDFEC;
    background: rgba(140,223,236,0.1);
  }
  .RefundStyle .statusball{
    background: #8CDFEC;
  }
  .tableBoldFont{
      font-weight: bold;
      font-size: 14px;
  }
  .tableFont{
      width: 8em;
      font-weight: 550;
      font-size: 14px;
      color: #757589;
  }
  .tableIcon{
      color: #757589;
  }
</style>