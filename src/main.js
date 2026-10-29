import { createApp } from 'vue'
import App from './App.vue'
import { reveal } from './directives/reveal'
import './styles/main.css'
import { isChinese } from './data/locale'

document.documentElement.lang = isChinese ? 'zh-CN' : 'en'
if (isChinese) {
  document.title = '一些小想法 — xiangjianan'
  document.querySelector('meta[name=description]').content = '一些日常工具、好玩的实验，以及出于好奇做出来的小东西。'
}

createApp(App).directive('reveal', reveal).mount('#app')
