// Рендер страницы анализа ресурсов
componentAiResources.render = function () {
  var content = document.getElementById("aiResourcesContainer")

  if (content) {
    content.innerHTML = `
        <div style="color: white">
            aiResourcesContainer
        </div>
    `
  }
}