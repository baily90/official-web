import { isPc } from './ua'

const baseSize = 37.5
function refreshRem () {
  let clientWidth = document.documentElement.clientWidth
  let scale = clientWidth / (baseSize * 10)

  // 当屏幕超过1920px以后就不在随着屏幕的变大而变大了
  if (clientWidth > 1920) {
    clientWidth = 1920
  }
  if (isPc()) {
    scale = clientWidth / 1920 // 1920 是PC端设计稿的宽度
  } else {
    scale = clientWidth / 375 // 375 是移动端端设计稿的宽度
  }

  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
refreshRem()

window.onresize = function () {
  refreshRem()
}
