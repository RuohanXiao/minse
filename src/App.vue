<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  height: 100%;
  border: 0px;
  padding: 0px;
  margin: 0px;
}
*::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
*::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background-color: #dbc2ff;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
*::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}



/* 共用样式 */
.pageTitle {
  font-size: 36px;
  color: #5F6775;
  line-height: 40px;
  padding-bottom: 10px;
  font-family: Roboto-Regular;
}
.pageTitleProcess{
  line-height: 40px;
  padding-bottom: 10px;
}
.mBlock{
  padding: 5%;
  height: 100%;
  background-color: white;
  border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}
@font-face {
  font-family: babySchool;
  src: url("./assets/font/BabySchoolItalic.ttf");
}
@font-face {
  font-family: MilknBalls;
  src: url("./assets/font/MilknBalls.ttf");
}
@font-face {
  font-family: LTEmphasis;
  src: url("./assets/font/LTEmphasis.ttf");
}
/* 新加字体 */
@font-face {
  font-family: Aileron-Black;
  src: url("./assets/font/Aileron-Black.otf");
}
@font-face {
  font-family: Aileron-BlackItalic;
  src: url("./assets/font/Aileron-BlackItalic.otf");
}
@font-face {
  font-family: Aileron-Bold;
  src: url("./assets/font/Aileron-Bold.otf");
}
@font-face {
  font-family: Aileron-BoldItalic;
  src: url("./assets/font/Aileron-BoldItalic.otf");
}
@font-face {
  font-family: Aileron-Heavy;
  src: url("./assets/font/Aileron-Heavy.otf");
}
@font-face {
  font-family: Aileron-HeavyItalic;
  src: url("./assets/font/Aileron-HeavyItalic.otf");
}
@font-face {
  font-family: Aileron-Italic;
  src: url("./assets/font/Aileron-Italic.otf");
}
@font-face {
  font-family: Aileron-Light;
  src: url("./assets/font/Aileron-Light.otf");
}

@font-face {
  font-family: Aileron-LightItalic;
  src: url("./assets/font/Aileron-LightItalic.otf");
}

@font-face {
  font-family: Aileron-Regular;
  src: url("./assets/font/Aileron-Regular.otf");
}

@font-face {
  font-family: Aileron-SemiBold;
  src: url("./assets/font/Aileron-SemiBold.otf");
}

@font-face {
  font-family: Aileron-SemiBoldItalic;
  src: url("./assets/font/Aileron-SemiBoldItalic.otf");
}

@font-face {
  font-family: Aileron-Thin;
  src: url("./assets/font/Aileron-Thin.otf");
}

@font-face {
  font-family: Aileron-ThinItalic;
  src: url("./assets/font/Aileron-ThinItalic.otf");
}

@font-face {
  font-family: Aileron-UltraLight;
  src: url("./assets/font/Aileron-UltraLight.otf");
}

@font-face {
  font-family: Aileron-UltraLightItalic;
  src: url("./assets/font/Aileron-UltraLightItalic.otf");
}

@font-face {
  font-family: KellySlab-Regular;
  src: url("./assets/font/KellySlab-Regular.ttf");
}

@font-face {
  font-family: Roboto-Black;
  src: url("./assets/font/Roboto-Black.ttf");
}
@font-face {
  font-family: Roboto-BlackItalic;
  src: url("./assets/font/Roboto-BlackItalic.ttf");
}
@font-face {
  font-family: Roboto-Bold;
  src: url("./assets/font/Roboto-Bold.ttf");
}
@font-face {
  font-family: Roboto-BoldItalic;
  src: url("./assets/font/Roboto-BoldItalic.ttf");
}
@font-face {
  font-family: Roboto-Italic;
  src: url("./assets/font/Roboto-Italic.ttf");
}
@font-face {
  font-family: Roboto-Light;
  src: url("./assets/font/Roboto-Light.ttf");
}
@font-face {
  font-family: Roboto-LightItalic;
  src: url("./assets/font/Roboto-LightItalic.ttf");
}
@font-face {
  font-family: Roboto-Medium;
  src: url("./assets/font/Roboto-Medium.ttf");
}
@font-face {
  font-family: Roboto-MediumItalic;
  src: url("./assets/font/Roboto-MediumItalic.ttf");
}
@font-face {
  font-family: Roboto-Regular;
  src: url("./assets/font/Roboto-Regular.ttf");
}
@font-face {
  font-family: Roboto-Thin;
  src: url("./assets/font/Roboto-Thin.ttf");
}
@font-face {
  font-family: Roboto-ThinItalic;
  src: url("./assets/font/Roboto-ThinItalic.ttf");
} 
 





</style>
