const cityForm = document.querySelector('[data-js="search-city"]')

cityForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const inputValue = event.target.city.value
  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature }] = await getCityWeather(Key)

  console.log(WeatherText, Temperature.Metric.Value)
  cityForm.reset()
})