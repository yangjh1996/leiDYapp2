<template>
  <view class="container">
    <!-- 页面顶部 -->
    <view class="header" :style="{ paddingTop: statusHeight }">
      <view class="close-button" @click="handleClose">×</view>
      <!-- <view class="help" @click="showHelp">帮助</view> -->
    </view>

    <!-- 中央提示信息 -->
    <view class="main-content">
      <text class="title">注册账号</text>
    </view>

    <view>
      <!-- 用户名输入 -->
      <view class="input-section">
        <text class="input-label">用户名</text>
        <input
          class="input-field"
          v-model="username"
          placeholder="请输入用户名"
        />
      </view>

      <!-- 密码输入 -->
      <view class="input-section">
        <text class="input-label">密码</text>
        <input
          class="input-field"
          v-model="password"
          type="password"
          placeholder="请输入密码"
        />
      </view>
    </view>

    <!-- 登录按钮 -->
    <button
      class="login-button"
      @click="handleLogin"
      :disabled="!username || !password"
    >
      注册
    </button>
  </view>
</template>

<script setup>
// import { ref, onMounted, inject, computed } from "vue";
// import { fetchRegister } from "@/api/video";
const store = inject("store");
// 用户名和密码
const username = ref("");
const password = ref("");

const handleClose = () => {
  uni.navigateBack();
};

const statusHeight = computed(() => store.state.statusHeight + "px");

// 处理登录
const handleLogin = async () => {
  if (!username.value || !password.value) {
    uni.showToast({
      title: "请输入用户名和密码",
      icon: "none",
    });
    return;
  }

  try {
    const res = await fetchRegister({
      username: username.value,
      password: password.value,
      nickname: `用户${new Date().getTime()}`,
      rePassword: password.value,
    });
    if (res.code === 200) {
      uni.navigateTo({ url: "/pages/login/login" });
      uni.showToast({
        title: "注册成功,请登录",
        icon: "error",
      });
    } else {
      uni.showToast({
        title: res.msg,
        icon: "error",
      });
    }
  } catch (e) {
    uni.showToast({
      title: "网络错误",
      icon: "error",
    });
  }
};

// 打开用户协议
const openUserAgreement = () => {
  uni.showToast({
    title: "打开用户协议",
    icon: "none",
  });
  // 实际应用中应该打开相应的页面或弹窗
};

// 打开隐私政策
const openPrivacyPolicy = () => {
  uni.showToast({
    title: "打开隐私政策",
    icon: "none",
  });
  // 实际应用中应该打开相应的页面或弹窗
};
</script>

<style scoped>
.container {
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-button {
  font-size: 24px;
  font-weight: bold;
}

.help {
  font-size: 26upx;
  color: #333;
}

.main-content {
  margin-top: 50upx;
  text-align: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.input-section {
  width: 100%;
  margin-top: 20upx;
  display: flex;
  flex-direction: column;
}

.input-label {
  margin-bottom: 10upx;
  font-size: 14px;
  color: #666;
}

.input-field {
  width: 100%;
  padding: 15upx;
  border: 1px solid #ddd;
  border-radius: 10upx;
  font-size: 14px;
}

.login-button {
  width: 400upx;
  background-color: #0d80b6;
  color: white;
  border-radius: 25px;
  padding: 15upx 0;
  font-size: 28upx;
  margin-top: 50upx;
  border: none;
}

.login-button:disabled {
  background-color: #ccc;
  opacity: 0.7;
}

.agreement {
  display: flex;
  align-items: center;
  margin-top: 30px;
  font-size: 12px;
  color: #666;
}

.checkbox {
  margin-right: 5px;
  transform: scale(0.8);
}

.agreement-text {
  flex: 1;
}

.agreement-link {
  color: #007bff;
  text-decoration: underline;
}

/* 适配不同屏幕尺寸 */
@media (max-width: 320px) {
  .title {
    font-size: 20px;
  }

  .login-button {
    padding: 12px 0;
  }
}
</style>
