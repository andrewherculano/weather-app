const cityForm = document.querySelector('[data-js="search-city"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cardInfos = document.querySelector('[data-js="show-card"]')

cityForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const inputValue = event.target.city.value
  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature }] = await getCityWeather(Key)

  if (cardInfos.classList.contains('display-none')) {
    cardInfos.classList.remove('display-none')
  }

  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value

  cityForm.reset()
})