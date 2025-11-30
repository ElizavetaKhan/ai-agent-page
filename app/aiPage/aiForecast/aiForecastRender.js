// Рендер страницы AI прогноза
componentAiForecast.render = function () {
  var content = document.getElementById("aiForecastContainer")

  if (content) {
    content.innerHTML = `
        <div style="color: white">
            aiForecastContainer
        </div>
    `
  }
}