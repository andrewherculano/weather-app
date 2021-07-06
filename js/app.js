const cityForm = document.querySelector('[data-js="search-city"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cardInfos = document.querySelector('[data-js="show-card"]')
const weatherIconContainer = document.querySelector('[data-js="show-weather-icon"]')

let imageCard = document.querySelector('[data-js="img-card"]')

cityForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const inputValue = event.target.city.value
  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key)
  const weatherIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

  if (cardInfos.classList.contains('display-none')) {
    cardInfos.classList.remove('display-none')
  }

  if (IsDayTime) {
    imageCard.src = './src/day.svg'
  } else {
    imageCard.src = './src/night.svg'
  }

  weatherIconContainer.innerHTML = weatherIcon
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value

  cityForm.reset()
})