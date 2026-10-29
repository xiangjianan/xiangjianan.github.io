<script setup>
import { t } from '../data/locale'
</script>
<template>
  <div class="hero">
    <div class="container">
      <p class="hero-eyebrow label" v-reveal>{{ t('A PLACE FOR SMALL IDEAS', '一些小想法') }}</p>
      <h1 v-reveal="60">{{ t('Make room for curiosity.', '给好奇留点空间，') }}<br><em>{{ t('Make everyday a little more interesting.', '让日子多点意思。') }}</em></h1>
      <div class="hero-bottom" v-reveal="120">
        <p class="hero-intro">{{ t('Tools, experiments, and ideas worth spending a little time on. Some are useful. Some are simply fun.', '一些工具、实验和值得花时间的小想法。有些有用，有些只是好玩。') }}</p>
        <a class="hero-cue" href="#work">{{ t('Take a look around', '随便看看') }} <span aria-hidden="true">↓</span></a>
      </div>
    </div>
  </div>
</template>
