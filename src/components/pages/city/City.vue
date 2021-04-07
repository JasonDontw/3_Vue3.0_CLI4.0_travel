<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch :cities="cities"></CitySearch>
    <CityList
      :cities="data.cities"
      :hot="data.hotCities"
      :letter="letter"
    ></CityList>
    <CityAlphabet :cities="data.cities" @change="handleLetterClick"></CityAlphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import { onMounted, reactive, ref } from 'vue'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  setup () {
    const {letter, handleLetterClick} = useLetterLogic()
    const {data} = useCityLogic()
    
    return {data, letter, handleLetterClick}
  }
}

function useCityLogic () {
  const data = reactive({
      cities: {},
      hotCities: []
    })

  async function getCityInfo () {
      let res = await axios.get('/api/city.json')
      res = res.data

      if (res.ret && res.data) {
        const result = res.data
        data.cities = result.cities
        data.hotCities = result.hotCities
      }
    }

  onMounted(() =>{
      getCityInfo()
  })

  return {data}

}

function useLetterLogic () {
    const letter = ref('')

    function handleLetterClick(selected) {
      letter.value = selected
    }

    return {letter, handleLetterClick, letter}
}
</script>

<style lang='stylus' scoped>

</style>
