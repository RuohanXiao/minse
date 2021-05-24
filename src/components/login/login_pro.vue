<template>
  <!-- <div>
        111111111
        <button>main</button>
        <ul class="ul-nav">
        <li><router-link to="main"><span>首页</span><i>></i></router-link></li>
        </ul>
    </div> -->
  <div class="mainBlock blockChild">
    <div class="loginBlock">
      <div class="formBlock">
        <div class="loginForm">
          <div class="loginTitle">
            <div class="blockChild">
              <img
                src="../../assets/img/logo1.png"
                alt=""
                style="margin: auto; width: 100%"
              />
              <!-- <p class="titleFront">MineSec</p> -->
            </div>
          </div>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            v-show="validProcess"
          >
            <v-text-field
              class="RobotoMedium inputLabelStyle"
              v-model="formData.Username"
              :rules="nameRules"
              label="Username"
              required
            ></v-text-field>

            <v-text-field
              class="RobotoMedium inputLabelStyle"
              v-model="formData.Password"
              :rules="passwordRules"
              label="Password"
               type="password"
              required
            ></v-text-field>
            <div class="processBlock">
              <v-checkbox
                class="RobotoMedium labelStyle"
                v-model="formData.rememberMe"
                label="Remember me"
                required
              ></v-checkbox>
              <span class="RobotoMedium labelStyle" style="line-height: 66px"
                >Forgot Password</span
              >
            </div>
            <div class="btnBlock">
              <!-- <router-link to="main">
                <v-btn depressed>
                  <span class="formBtn">Login</span>
                </v-btn>
              </router-link> -->
              <v-btn depressed @click="submitForm">
                <span class="formBtn">Login</span>
              </v-btn>
            </div>
          </v-form>
          <div v-show="!validProcess">
            <el-progress
              :text-inside="true"
              :show-text="false"
              :stroke-width="21"
              :percentage="processPer"
              :color="customColor"
            ></el-progress>
            <p class="processLabel">{{ processLabel }}</p>
          </div>
          <div class="copyRightBlock">
            <p class="lightFont">© Copyright 2021, MineSec.</p>
            <p class="hardFont">Term of use. Privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    processPer: 0,
    processLabel: "",
    customColor: "#A449FC",
    validProcess: true,
    valid: false,
    authList: [],
    formData: {
      Username: "",
      Password: "",
      rememberMe: false,
    },
    userValidateInfo: [
      {
        name: "Admin",
        password: "123456",
        auth: [
          {
            title: "Dashboard",
            router: "dashboard",
            icon: require("../../static/Home.png"),
          },
          {
            title: "License",
            router: "license",
            icon: require("../../static/License.png"),
          },
          {
            title: "Billing",
            router: "billing",
            icon: require("../../static/Billing.png"),
          },
          {
            title: "Service Provider",
            router: "serviceProvidesr",
            icon: require("../../static/ServiceProvider.png"),
          },
          {
            title: "SDK Log",
            router: "sdkLog",
            icon: require("../../static/SDKLogs.png"),
          },
          {
            title: "SDK Version",
            router: "sdkVersion",
            icon: require("../../static/SDKVersion.png"),
          },
          {
            title: "Attestation",
            router: "attestation",
            icon: require("../../static/Attestation.png"),
          },
        ],
        userType: "admin",
      },
      {
        name: "Provider",
        password: "123qwe",
        auth: [
          {
            title: "Dashboard",
            router: "dashboard",
            icon: require("../../static/Home.png"),
          },
          {
            title: "License",
            router: "license",
            icon: require("../../static/License.png"),
          },
          {
            title: "Attestation",
            router: "attestation",
            icon: require("../../static/Attestation.png"),
          },
          {
            title: "UserManage",
            router: "userManage",
            icon: require("../../static/Attestation.png"),
          },
        ],
        userType: "provider",
      },
      {
        name: "wangyu",
        password: "wangyu",
        auth: [
          {
            title: "Dashboard",
            router: "dashboard",
            icon: require("../../static/Home.png"),
          },
          {
            title: "Billing",
            router: "billing",
            icon: require("../../static/Billing.png"),
          },
          {
            title: "Attestation",
            router: "attestation",
            icon: require("../../static/Attestation.png"),
          },
        ],
        userType: "provider",
      },
    ],
    nameRules: [(v) => !!v || "Name is required"],
    passwordRules: [(v) => !!v || "Password is required"],
    // email: "",
    // emailRules: [
    //   (v) => !!v || "E-mail is required",
    //   (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    // ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submitForm() {
      let mthis = this;
      // 验证登录信息
      mthis.validate();
      console.log(mthis.valid);
      mthis.processPer = 0;
      mthis.processLabel = "Login Verification...";
      if (mthis.valid) {
        // 认证通过
        let uname = mthis.formData.Username;
        let upass = mthis.formData.Password;
        //验证用户名和密码并获取权限
        let validateInfo = mthis.userValidateInfo.filter((item) => {
          return item.name == uname && item.password == upass;
        });
        mthis.validProcess = false;
        if (validateInfo.length > 0) {
          setTimeout(() => {
            mthis.processPer = 30;
            mthis.processLabel = "Internet Network...";
            console.log(validateInfo);
            setTimeout(() => {
              mthis.processPer = 70;
              mthis.processLabel = "Security Check...";
              setTimeout(() => {
                mthis.processPer = 100;
                mthis.processLabel = "Success!";
                setTimeout(() => {
                mthis.authList = validateInfo[0].auth;
                mthis.$router.push({
                  path: "/main",
                  query: { authList: mthis.authList, uname,userType:validateInfo[0].userType },
                });
                }, 1000);
              }, 2000);
            }, 2000);
          }, 1000);
        } else {
          mthis.validProcess = true;
          mthis.$message({
            type: "error",
            message: "Username Or Password is error",
          });
        }
      } else {
        mthis.$message({
          type: "error",
          message: "Username Or Password is error",
        });
      }
      // this.formData
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
}
.mainBlock {
  /* background-color: white; */
  background-color: #dab6fd;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.blockChild > * {
  display: grid;
}
.loginBlock {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: calc(95vh);
  width: calc(100vw - 5vh);
  /* 底色 */
  background-color: #dab6fd;
  background-color: white;
  /* chrome 2+, safari 4+; multiple color stops */
  background-image: -webkit-gradient(
    linear,
    left bottom,
    right top,
    color-stop(0.32, #dab6fd),
    color-stop(1, #3b0273)
  );
  /* chrome 10+, safari 5.1+ */
  background-image: -webkit-linear-gradient(45deg, #dab6fd, #3b0273);
  /* firefox; multiple color stops */
  background-image: -moz-linear-gradient(45deg, #dab6fd, #3b0273);
  /* ie10 */
  background-image: -ms-linear-gradient(45deg, #dab6fd 0%, #3b0273 100%);
  /* opera 11.1 */
  background-image: -o-linear-gradient(45deg, #dab6fd, #3b0273);
  /* 标准写法 */
  background-image: linear-gradient(45deg, #dab6fd, #3b0273);
}
.loginBlock .el-form-item {
  border-bottom: 1px solid;
}
.formBlock {
  background-color: white;
  height: 80%;
  width: 50%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginForm {
  /* padding: 10px 0; */
  width: 80%;
  height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.loginTitle {
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 10%;
}
.titleFront {
  font-family: MilknBalls;
  font-size: 30px;
}
/* .LTEmphasisFont .v-label,
.LTEmphasisFont {
  font-size: 16px;
  font-weight: 300;
  color: black !important;
  font-family: LTEmphasis;
} */
.processBlock {
  display: flex;
  justify-content: space-between;
}
.btnBlock {
  display: flex;
  justify-content: center;
}
.btnBlock .theme--light.v-btn.v-btn--has-bg {
  background-color: #dcb8ff !important;
  transition: all 0.5s;
  width: 172px;
  height: 46px;
}
.btnBlock .theme--light.v-btn.v-btn--has-bg:hover {
  background-color: #a449fc !important;
  transition: all 0.5s;
}
.labelStyle,
.labelStyle .v-label {
  color: #454545 !important;
  font-size: 18px;
}
.inputLabelStyle {
  color: #868686 !important;
  font-size: 18px;
}
.RobotoMedium {
  font-family: Roboto-Medium;
}
.formBtn {
  font-size: 20px;
  color: white !important;
  font-family: Roboto-Regular;
}
.copyRightBlock {
  font-size: 14px;
  text-align: center;
  /* margin-bottom: 5%; */
}
.copyRightBlock .lightFont {
  color: #646464;
  font-family: Roboto-Regular;
  line-height: 172.2%;
}
.copyRightBlock .hardFont {
  color: #646464;
  font-family: Roboto-Medium;
  line-height: 172.2%;
}
.processLabel{
  margin-top: 20px;
  text-align: center;
  font-size: 24px;
  font-family: Roboto-Regular;
  color: #000000;
}
</style>
