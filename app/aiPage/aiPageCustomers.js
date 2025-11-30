// Рендеринг списка застройщиков в dropdown, поиск, выбор проекта
aiPage.renderCustomerList = function (customers) {
  var listContainer = document.getElementById("aiCustomerDropdownList")
  if (!listContainer) return

  if (customers.length === 0) {
    listContainer.innerHTML = '<div style="padding:1.2vh;color:#A9ABAC">Не найдено</div>'
    return
  }

  listContainer.innerHTML = customers
    .map(function (name) {
      return `
        <div class="customer-dropdown-item" data-name="${name.replace(/"/g, '&quot;')}">
          ${name}
        </div>`
    })
    .join("")

  listContainer.querySelectorAll(".customer-dropdown-item").forEach(function (item) {
    item.addEventListener("click", function () {
      var name = this.getAttribute("data-name")
      aiPage.selectCustomer(name)
    })
  })
}

// Выбор застройщика
aiPage.selectCustomer = function (customerName) {
  var nameEl = document.getElementById("customerName")
  var dropdown = document.getElementById("aiCustomerDropdown")
  var searchInput = document.getElementById("aiCustomerSearch")
  var checkbox = document.getElementsByClassName("custom-checkbox")[0].querySelector("input")

  // поставить галочку
  checkbox.checked = true;

  if (nameEl) {
    nameEl.textContent = customerName
    checkbox.checked = true;
  }
  dropdown.classList.remove("active")
  if (searchInput) searchInput.value = ""

  aiPage.renderCustomerList(aiPage.customersData)
}


// Инициализация dropdown для выбора застройщика
aiPage.initCustomerDropdown = function () {
  var card = document.getElementById("aiCustomerCard")
  var dropdown = document.getElementById("aiCustomerDropdown")
  var searchInput = document.getElementById("aiCustomerSearch")

  if (!card || !dropdown) return

  aiPage.renderCustomerList(aiPage.customersData)

  function updateDropdownPosition() {
    if (!dropdown.classList.contains("active")) return

    var rect = card.getBoundingClientRect()

    dropdown.style.top = rect.bottom + window.scrollY + "px"
    dropdown.style.left = rect.left + window.scrollX + "px"
    dropdown.style.width = rect.width + "px"
  }

  card.addEventListener("click", function (e) {
    e.stopPropagation()
    dropdown.classList.add("active")

    if (dropdown.classList.contains("active")) {
      updateDropdownPosition()
      if (searchInput) searchInput.focus()
    }
  })

  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target) && !card.contains(e.target)) {
      dropdown.classList.remove("active")
    }
  })

  window.addEventListener("scroll", updateDropdownPosition)
  window.addEventListener("resize", updateDropdownPosition)

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var q = this.value.toLowerCase()
      var filtered = aiPage.customersData.filter(function (name) {
        return name.toLowerCase().includes(q)
      })
      aiPage.renderCustomerList(filtered)
    })
  }
}