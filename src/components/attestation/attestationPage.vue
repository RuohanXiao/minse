<template>
  <div class="licenseBlock mBlock">
    <div style="display: flex; justify-content: space-between">
      <div class="pageTitle">Attestation</div>
    </div>
    <v-divider></v-divider>
    <div style="display: flex; justify-content: space-between; margin: 10px 0">
      <div style="width: 100%">
        <el-input
          placeholder="Search..."
          prefix-icon="el-icon-search"
          v-model="inputSearch"
        >
        </el-input>
      </div>
    </div>
    <v-divider></v-divider>
    <div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
      >
        <el-table-column type="selection" width="30"> </el-table-column>
        <el-table-column prop="DATE" label="DATE" sortable/>
        <el-table-column prop="TIME" label="TIME" sortable/>
        <el-table-column prop="PROVIDER" label="PROVIDER" sortable>
             <template slot-scope="scope" style="display: inline-flex;width:'8em';">
                <span style="font-weight:bold;">{{scope.row.PROVIDER}}</span>
            </template>
        </el-table-column> 
        <el-table-column prop="SDKID" label="SDK ID"  sortable>
            <template slot-scope="scope" style="display: inline-flex;width:'8em';">
                <span style="font-weight:bold;">{{scope.row.SDKID}}</span>
                <v-icon x-small :alt="scope" style="color: orange !important;margin: 0 5px;">mdi-alert-outline</v-icon>
            </template>
        </el-table-column> 
        <el-table-column
          prop="RESULT"
          label="RESULT"
          sortable
        >
          <template slot-scope="scope">
            <div class="ballTag" :class="colorList[scope.row.RESULT]">
              &nbsp;
            </div>
            <span>{{ scope.row.RESULT }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        inputSearch:null,
      colorList: {
          'Error':'ErrorStyle',
          "Delivered":'DeliveredStyle'
      },
      value: "Expired",
      btnType: "",
      tableData: [
        {
          DATE: "20 APR 2021",
          TIME: '23:50',
          PROVIDER: "Spectra",
          SDKID: "BIN00",
          RESULT: "Error",
          able:false
        },
        {
          DATE: "21 APR 2021",
          TIME: '23:51',
          PROVIDER: "Spectra",
          SDKID: "BIN01",
          RESULT: "Delivered",
          able:true
        },
        {
          DATE: "22 APR 2021",
          TIME: '23:52',
          PROVIDER: "Spectra",
          SDKID: "BIN02",
          RESULT: "Delivered",
          able:false
        },
        {
          DATE: "23 APR 2021",
          TIME: '23:53',
          PROVIDER: "Spectra",
          SDKID: "BIN03",
          RESULT: "Error",
          able:true
        },
        {
          DATE: "24 APR 2021",
          TIME: '23:54',
          PROVIDER: "Spectra",
          SDKID: "BIN04",
          RESULT: "Error",
          able:true
        },
        
      ],
      multipleSelection: [],
    };
  },
  methods: {
    clear() {
      const h = this.$createElement;
      this.$msgbox({
        title: "",
        message: h("p", { style: "text-align:center" }, [
          h("i", {
            style: "color:#409eff;font-size:50px",
            class: "el-icon-warning-outline",
          }),
          h(
            "p",
            { style: "font-weight:600;margin:10px 0;font-size:16px;" },
            "Revoke attestation!"
          ),
          h(
            "p",
            { style: "font-weight:300;margin:10px 0;font-size:14px;" },
                    `Warning! You are going to revoke a
                    attestation ! All data will be back to the
                    provider`
          ),

          h("div", { style: "text-align:center;display:grid;" }, [
            h(
              "button",
              {
                style: `border-radius: 5px !important;
                        color: #fff !important;
                        background-color: #409eff;
                        border-color: #409eff;
                        height:40px;
                        margin-bottom:10px`,
              },
              "REVOKE"
            ),
            h("button", { style: "height:40px;" }, "Cancel"),
          ]),
        ]),
        showConfirmButton: false,
        showCancelButton: false,
        // confirmButtonText: "确定",
        // cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        },
      }).then((action) => {
        this.$message({
          type: "info",
          message: "action: " + action,
        });
      });
    },
    btnChange(type) {
      this.btnType = type;
    },
    addLicense() {
      //   alert('添加关系')
      this.$message({
        message: "添加关系",
        type: "info",
      });
    },
  },
};
</script>
<style>
.licenseBlock {
}
.licenseBlock .licenseBtnGroup {
  justify-content: space-around;
  /* width: 200px; */
}
.licenseBlock .el-button.is-plain:focus,
.el-button.is-plain:hover {
  margin: 0 5px !important;
  border-radius: 5px !important;
  border-color: gray !important;
  color: gray !important;
  background-color: rgba(0, 0, 0, 0.2) !important;
}
.licenseBlock .licenseBtn:not(.btnActived) {
  border-radius: 5px !important;
  border-color: #409eff !important;
  color: #409eff !important;
}
.licenseBlock .licenseBtnWithe:not(.btnActived) {
  border-radius: 5px !important;
  color: #fff !important;
  background-color: #409eff;
  border-color: #409eff;
}
.licenseBlock .btnActived {
  border-radius: 5px !important;
  border-color: gray !important;
  color: gray !important;
  background-color: rgba(0, 0, 0, 0.2) !important;
}
.licenseBlock .splitLine {
  margin: 5px 10px;
  height: 30px;
  width: 1px;
  line-height: 40px;
  background-color: gray !important;
}
.ballTag {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
}
.ErrorStyle {
  background: red;
}
.DeliveredStyle {
  background: lightgreen;
}
</style>