<script setup>
import { ref } from 'vue'
import { authStore } from '@/store/modules/auth'
import { uuid, guid } from '@/utils'

const authState = authStore()
const uapopRef = ref()
const formObj = ref({
  username: '',
  password: ''
})

const handleSubmit = () => {
  const { username, password } = formObj.value
  if(!username || !password){
    toast('warn', '验证失败')
  }else{
    toast('success', '验证通过', () => {
      uni.switchTab({
        url: '/pages/index/index'
      })
    })
    authState.setAuthorization(guid(32))
    authState.setUserInfo({
      avatar: '',
      username,
      token: uuid(64)
    })
  }
}

const toast = (icon='info', content, fn) => {
  uapopRef.value.open({
    type: 'toast',
    icon,
    content,
    customStyle: {'border-radius': '10px'},
    time: 2,
    onClose: fn
  })
}
</script>

<template>
  <view class="ulive__authlayout">
    <view class="ulive__authwrap flexbox flex-col">
      <view class="ulive__authwrap-header flex1">
        <view class="ulive__authwrap-slogan">
          <!-- 移除了图片引用 -->
          <view></view>
        </view>
        <view class="ulive__authwrap-forms">
          <view class="item flexbox">
            <ua-input v-model="formObj.username" placeholder="请输入账号" style="width: 100%;" />
          </view>
          <view class="item flexbox">
            <ua-input v-model="formObj.password" showPassword placeholder="请输入密码" style="width: 100%;" />
          </view>
          <view class="item btns">
            <button class="flex-c" @click="handleSubmit">登录</button>
          </view>
          <view class="item lgreg-lk">
            <text class="navigator" to="#">忘记密码</text>
            <text class="navigator" to="#">注册账号</text>
          </view>
        </view>
      </view>
      <view class="ulive__authwrap-footer">
        <text class="version">UNIAPP-WELIVE v1.0</text>
      </view>
    </view>
  </view>
  
  <!-- 函数式弹框 -->
  <ua-popup ref="uapopRef" />
</template>

<style lang="scss" scoped>
.ulive__authlayout {height: 100vh; width: 100%; position: relative;}
.ulive__authwrap {height: 100%; position: relative; z-index: 1001;}
.ulive__authwrap-slogan {color: #2979ff; font-size: 28px; text-align: center; margin-bottom: 30px;}
.ulive__authwrap-header {padding: 200rpx 50rpx 25rpx;}
.ulive__authwrap-forms {margin: 50rpx 0;}
.ulive__authwrap-forms .item{margin: 25rpx 25rpx 0; position: relative;}
.ulive__authwrap-forms .btns{margin-top: 20px;}
.ulive__authwrap-forms .btns button {background-image: linear-gradient(45deg, #ff007f 15%, #705cf6); border: 0; border-radius: 12px; color: #fff; font-size: 16px; justify-content: center; margin: 0 auto; height: 40px; width: 100%;}
.ulive__authwrap-forms .lgreg-lk{text-align: center; padding: 25rpx 25rpx 0;}
.ulive__authwrap-forms .lgreg-lk .navigator{color: #777; font-size: 28rpx; display: inline-block; vertical-align: top; padding: 0 15rpx; position: relative;}
.ulive__authwrap-footer {color: var(--vg__divider-0); font-size: 24rpx; text-align: center; padding: 25rpx;}
::v-deep .ve__input-wrapper {
  border-radius: 12px;
}
</style>