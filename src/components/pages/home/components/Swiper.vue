<template>
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
        <swiper-slide v-for="item of list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
</template>

<script>
import {computed} from 'vue'

export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  setup (props) {
    const swiperOptions = {
       pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true
    }

    const showSwiper = computed(() => {
      return props.list.length
    })

    return {swiperOptions, showSwiper}
  }
}
</script>

<style lang='stylus' scoped>
  .swiper-button-prev, .swiper-button-next {
    --swiper-theme-color: #eee;
  }
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-pagination-bullet-active
      background: red !important
    .swiper-img
      width: 100%
</style>
