// Управление дропбоксами застройщика
aiPage.updateContainersVisibility = function () {
  var customerCard = document.getElementById("aiCustomerCard")
  var dropdown = document.getElementById("aiCustomerDropdown")

  if (!customerCard || !dropdown) return

  if (customerCard.classList.contains("active")) {
    dropdown.classList.add("active")
  } else {
    dropdown.classList.remove("active")
  }
}

// Инициализация переключения между карточками AI методов
aiPage.initAIMethodsCardToggle = function () {
  var agentCard = document.getElementById("aiAgentCard")
  var gigaCard = document.getElementById("aiGigaCard")
  var resourcesCard = document.getElementById("aiResourcesCard")
  var forecastCard = document.getElementById("aiForecastCard")

  var cardToContainer = {
    aiAgentCard: "aiAgentContainer",
    aiGigaCard: "aiGigaContainer",
    aiResourcesCard: "aiResourcesContainer",
    aiForecastCard: "aiForecastContainer"
  }

  if (!agentCard || !gigaCard || !resourcesCard || !forecastCard) return

  var allCards = [agentCard, gigaCard, resourcesCard, forecastCard]

  var toggleActiveCard = function (activeCard) {
    allCards.forEach(function (card) {
      if (card === activeCard) {
        card.classList.add("active")
      } else {
        card.classList.remove("active")
      }
    })

    // скрываем все контейнеры
    Object.values(cardToContainer).forEach(function (containerId) {
      document.getElementById(containerId).style.display = "none";
    });

    // показываем только нужный
    var activeContainerId = cardToContainer[activeCard.id];
    if (activeContainerId) {
      document.getElementById(activeContainerId).style.display = "block";
    }
  }

  allCards.forEach(function (card) {
    card.addEventListener("click", function (e) {
      e.stopPropagation()
      toggleActiveCard(card)
    })
  })
  allCards[0].classList.add("active")

}
