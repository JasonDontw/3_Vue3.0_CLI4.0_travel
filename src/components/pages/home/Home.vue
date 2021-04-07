<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper :list="swiperList"></HomeSwiper>
    <HomeIcons :list="iconList"></HomeIcons>
    <HomeRecommend :list="recommendList"></HomeRecommend>
    <HomeWeekend :list="weekendList"></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {onMounted, ref, reactive} from 'vue'
import {useStore} from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  setup() {
    //整包物件使用reactive來響應，取值時不須用.value
    // const data = reactive({
    //   swiperList: [],
    //   iconList: [],
    //   recommendList: [],
    //   weekendList: []
    // })

    //單個使用ref來響應，取值時必須用.value
    const swiperList = ref([])
    const iconList = ref([])
    const recommendList = ref([])
    const weekendList = ref([])
    const store = useStore()
    
    async function getHomeInfo () {
      let res = await axios.get('/api/index.json?city=' + store.state.city) // 網址設定放於config/index.js的proxyTable中
      res = res.data

      if (res.ret && res.data) {
        swiperList.value = res.data.swiperList
        iconList.value = res.data.iconList
        recommendList.value = res.data.recommendList
        weekendList.value = res.data.weekendList
      }
    }

    onMounted(() => {
      getHomeInfo()
    }) 

    return {swiperList, iconList, recommendList, weekendList}
  }
}
</script>

<style lang='stylus' scoped>

</style>
