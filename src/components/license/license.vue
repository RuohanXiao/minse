<template>
  <div class="licenseBlock mBlock">
    <div style="display: flex; justify-content: space-between">
      <div class="pageTitle">License</div>
      <div class="pageTitleProcess">
        <div class="licenseBtnGroup">
          <el-button-group>
            <el-button
              style="margin: 0 5px !important"
              plain
              size="small"
              class="licenseBtn"
              @click="btnChange('REVOKE')"
              :class="btnType === 'REVOKE' ? 'btnActived' : ''"
              >REVOKE</el-button
            >
            <el-button
              style="margin: 0 5px !important"
              size="small"
              @click="btnChange('ACTIVATE')"
              plain
              class="licenseBtn"
              :class="btnType === 'ACTIVATE' ? 'btnActived' : ''"
              >ACTIVATE</el-button
            >
            <el-button
              style="margin: 0 5px !important"
              @click="addLicense"
              size="small"
              icon="el-icon-plus"
              class="licenseBtnWithe"
              >NEW LICENSE</el-button
            >
          </el-button-group>
        </div>
      </div>
    </div>
    <v-divider></v-divider>
    <div style="display: flex; justify-content: space-between; margin: 10px 0">
      <div style="width: 100%">
        <el-input
          placeholder="Search..."
          prefix-icon="el-icon-search"
          v-model="input2"
        >
        </el-input>
      </div>
      <div
        style="
          display: flex;
          justify-content: space-between;
          width: 50%;
          max-width: 700px;
          min-width: 500px;
        "
      >
        <span class="splitLine">&nbsp;</span>
        <div style="margin: 0 1em 0 0">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Date of creation"
          >
          </el-date-picker>
        </div>
        <div>
          <el-select v-model="value" placeholder="Select...">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <el-button
          style="margin: 0 0 0 1em"
          @click="clear"
          size="small"
          class="licenseBtnWithe"
          >Clear</el-button
        >
      </div>
    </div>
    <v-divider></v-divider>
    <span>{{tableData.length}} items</span>
    <div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="30"> </el-table-column>
        <el-table-column prop="REF" label="REF" width="60" />
        <el-table-column prop="CREATED" label="CREATED" />
        <el-table-column prop="PROVIDER" label="PROVIDER" />
        <el-table-column prop="SDKVERSION" label="SDK VERSION" width="120"/>
        <el-table-column prop="LICENSE" label="LICENSE"/>
        <el-table-column prop="STARTTIME" label="START TIME"  width="120"/>
        <el-table-column prop="ENDTIME" label="END TIME" />
        <el-table-column prop="STATUS" label="STATUS" width="80">
          <template slot-scope="scope">
            <el-tag :type="scope.row.STATUS === 0 ? 'info' : 'primary'">{{
              options[scope.row.STATUS].value
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="DELIVERYSTATUS"
          label="DELIVERY STATUS"
          width="150"
        >
          <template slot-scope="scope">
            <div class="ballTag" :class="colorList[scope.row.DELIVERYSTATUS]">
              &nbsp;
            </div>
            <span>{{ options[scope.row.STATUS].value }}</span>
            <!-- <el-tag :type="scope.row.STATUS === 0 ? 'info' : 'primary'">{{options[scope.row.STATUS].value}}</el-tag> -->
          </template>
        </el-table-column>
        <!-- <el-table-column prop="address" label="地址" show-overflow-tooltip /> -->
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colorList: ["grayStyle", "redStyle", "blueStyle"],
      options: [
        {
          value: "Expired",
          label: "Expired",
        },
        {
          value: "Expired1",
          label: "Expired1",
        },
        {
          value: "Expired2",
          label: "Expired2",
        },
      ],
      value: "Expired",
      btnType: "",
      tableData: [
        {
          REF: "MS01",
          CREATED: ["23 APR 2021", "23:54"],
          PROVIDER: "Spectra",
          SDKVERSION: "1.2.2",
          LICENSE: "114242350",
          STARTTIME: ["24 APR 2021", "08:00"],
          ENDTIME: ["24 APR 2021", "08:00"],
          STATUS: 0,
          DELIVERYSTATUS: 0,
        },
        {
          REF: "MS01",
          CREATED: ["23 APR 2021", "23:54"],
          PROVIDER: "Spectra",
          SDKVERSION: "1.2.2",
          LICENSE: "114242350",
          STARTTIME: ["24 APR 2021", "08:00"],
          ENDTIME: ["24 APR 2021", "08:00"],
          STATUS: 0,
          DELIVERYSTATUS: 0,
        },
        {
          REF: "MS01",
          CREATED: ["23 APR 2021", "23:54"],
          PROVIDER: "Spectra",
          SDKVERSION: "1.2.2",
          LICENSE: "114242350",
          STARTTIME: ["24 APR 2021", "08:00"],
          ENDTIME: ["24 APR 2021", "08:00"],
          STATUS: 0,
          DELIVERYSTATUS: 0,
        },
        {
          REF: "MS02",
          CREATED: ["23 APR 2021", "23:54"],
          PROVIDER: "Spectra",
          SDKVERSION: "1.2.2",
          LICENSE: "114242350",
          STARTTIME: ["24 APR 2021", "08:00"],
          ENDTIME: ["24 APR 2021", "08:00"],
          STATUS: 1,
          DELIVERYSTATUS: 1,
        },
        {
          REF: "MS03",
          CREATED: ["23 APR 2021", "23:54"],
          PROVIDER: "Spectra",
          SDKVERSION: "1.2.2",
          LICENSE: "114242350",
          STARTTIME: ["24 APR 2021", "08:00"],
          ENDTIME: ["24 APR 2021", "08:00"],
          STATUS: 2,
          DELIVERYSTATUS: 2,
        },
        {
          REF: "MS01",
          CREATED: ["23 APR 2021", "23:54"],
          PROVIDER: "Spectra",
          SDKVERSION: "1.2.2",
          LICENSE: "114242350",
          STARTTIME: ["24 APR 2021", "08:00"],
          ENDTIME: ["24 APR 2021", "08:00"],
          STATUS: 0,
          DELIVERYSTATUS: 0,
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
            "Revoke license!"
          ),
          h(
            "p",
            { style: "font-weight:300;margin:10px 0;font-size:14px;" },
                    `Warning! You are going to revoke a
                    license ! All data will be back to the
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
.grayStyle {
  background: gray;
}
.redStyle {
  background: red;
}
.blueStyle {
  background: #409eff;
}
</style>