// Инициализация страницы
aiPage.init = function () {
  // Рендерим верхние блоки
  aiPage.renderAiPageBlocks()
  aiPage.initAIMethodsCardToggle()

  setTimeout(function () {
    aiPage.initCustomerDropdown()

    // Рендерим компонент AI agent
    if (
      typeof componentAiAgentChat !== "undefined" &&
      typeof componentAiAgentChat.render === "function"
    ) {
      componentAiAgentChat.render()
    }

    // Рендерим компонент AI прогноза
    if (
      typeof componentAiForecast !== "undefined" &&
      typeof componentAiForecast.render === "function"
    ) {
      componentAiForecast.render()
    }

    // Рендерим компонент GIGA планерки
    if (
      typeof componentAiGiga !== "undefined" &&
      typeof componentAiGiga.render === "function"
    ) {
      componentAiGiga.render()
    }

    // Рендерим компонент анализа ресурсов
    if (
      typeof componentAiResources !== "undefined" &&
      typeof componentAiResources.render === "function"
    ) {
      componentAiResources.render()
    }
  }, 100)
}

// Запускаем инициализацию при загрузке DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    aiPage.init()
  })
} else {
  componentAiAgentChat.init()
}