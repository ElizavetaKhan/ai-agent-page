componentAiAgentChat.selectedWorkType = null

componentAiAgentChat.workTypes = {
    "Черновые подготовительные работы": [
        "Грунтовка",
        "Стяжка пола",
        "Штукатурка стен по маячкам",
        "Разводка электропроводки",
        "Разводка сантехники",
        "Монтаж гипсокартона"
    ],
    "Подготовительные работы под чистовую отделку": [
        "Грунтовка",
        "Шпаклевка стен",
        "Чистовая отделка",
        "Покраска стен",
        "Поклейка обоев",
        "Укладка ламината",
        "Установка межкомнатных дверей",
        "Установка плинтусов"
    ]
};

// type: 0 - обычный чат, 1 - fullscreen
componentAiAgentChat.initWorkTypes = function (type) {
    var isFullscreen = type === 1

    var dropdown = document.getElementById(
        isFullscreen ? "aiWorkTypeDropdownFullscreen" : "aiWorkTypeDropdown"
    )
    var listContainer = document.getElementById(
        isFullscreen ? "aiWorkTypeDropdownListFullscreen" : "aiWorkTypeDropdownList"
    )
    var searchInput = document.getElementById(
        isFullscreen ? "aiWorkTypeSearchFullscreen" : "aiWorkTypeSearch"
    )
    var handle = document.getElementById(
        isFullscreen ? "choose-work-type-fullscreen" : "choose-work-type"
    )
    var label = document.getElementById(
        isFullscreen ? "selected-work-type" : "choosen-work-type"
    )

    if (!dropdown || !listContainer || !handle) { return }

    // для основного чата по умолчанию показываем подсказку
    if (!isFullscreen && label) {
        label.innerHTML = "Выберите вид работ"
    }

    function closeDropdown() {
        dropdown.classList.remove("active")
    }

    function renderList(filter) {
        listContainer.innerHTML = ""

        Object.keys(componentAiAgentChat.workTypes).forEach(function (category) {
            var filteredItems = componentAiAgentChat.workTypes[category].filter(function (item) {
                if (!filter) { return true }
                return item.toLowerCase().includes(filter.toLowerCase())
            })

            if (filteredItems.length === 0) { return }

            var categoryEl = document.createElement("div")
            categoryEl.className = "worktype-category"
            categoryEl.textContent = category
            listContainer.appendChild(categoryEl)

            filteredItems.forEach(function (item) {
                var itemEl = document.createElement("div")
                itemEl.className = "worktype-dropdown-item"
                itemEl.textContent = item
                itemEl.addEventListener("click", function () {
                    componentAiAgentChat.selectedWorkType = item

                    // обновляем текущий label
                    if (label) {
                        label.innerHTML = item
                    }

                    var baseLabel = document.getElementById("choosen-work-type")
                    var fullscreenLabel = document.getElementById("selected-work-type")
                    if (baseLabel && baseLabel !== label) {
                        baseLabel.innerHTML = item
                    }
                    if (fullscreenLabel && fullscreenLabel !== label) {
                        fullscreenLabel.innerHTML = item
                    }

                    var toolkit = document.getElementById("toolkit-container")
                    if (toolkit) {
                        toolkit.classList.remove("active")
                    }

                    closeDropdown()
                })
                listContainer.appendChild(itemEl)
            })
        })
    }

    function toggleDropdown() {
        if (dropdown.classList.contains("active")) {
            closeDropdown()
            return
        }
        dropdown.classList.add("active")
        renderList("")
        if (searchInput) {
            searchInput.value = ""
            searchInput.focus()
        }
    }

    handle.addEventListener("click", function (e) {
        e.stopPropagation()
        toggleDropdown()
    })

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            renderList(this.value)
        })
    }

    document.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target) && !handle.contains(e.target)) {
            closeDropdown()
        }
    })
}