let textInput = document.querySelector('.location-field')

const search = () => {
  let userInput = textInput.value
  const cityApi = 'https://api.openweathermap.org/data/2.5/weather'
  const apiKey = '4012072fbc944a45f6dbbb0ac17d8cb0'
  const newUrl =
    cityApi + '?' + 'q=' + userInput + '&units=imperial' + '&appid=' + apiKey
  console.log(newUrl)
  return newUrl
}

const getWeather = () => {
  fetch(search())
    .then(response => {
      return response.json()
    })
    .then(textInput => {
      console.log(textInput)
      document.querySelector('.forecast').textContent =
        textInput.weather[0].main
      document.querySelector('.temp').textContent = textInput.main.temp
    })
}

document.querySelector('.search-button').addEventListener('click', getWeather)
