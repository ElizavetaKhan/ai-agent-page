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

componentAiAgentChat.initWorkTypes = function () {
    var dropdown = document.getElementById("aiWorkTypeDropdown")
    var listContainer = document.getElementById("aiWorkTypeDropdownList")
    var searchInput = document.getElementById("aiWorkTypeSearch")
    var primaryHandle = document.getElementById("choose-work-type")
    var primaryLabel = document.getElementById("choosen-work-type")

    if (!primaryLabel) { return }
    primaryLabel.innerHTML = "Выберите вид работ"

    if (!dropdown || !listContainer || !primaryHandle) { return }

    var activeLabel = primaryLabel

    function updateDropdownPosition(triggerEl) {
        if (!triggerEl) { return }
        var rect = triggerEl.getBoundingClientRect()
        dropdown.style.left = ((rect.left + window.scrollX) * 0.111) + "vh"
        dropdown.style.top = ((rect.bottom + window.scrollY) * 0.111) + "vh"
        dropdown.style.width = (rect.width * 0.111) + "vh"
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
                    if (primaryLabel) {
                        primaryLabel.innerHTML = item
                    }
                    var fullscreenLabel = document.getElementById("selected-work-type")
                    if (fullscreenLabel) {
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

    function toggleDropdown(triggerEl, labelEl) {
        if (dropdown.classList.contains("active") && activeLabel === labelEl) {
            closeDropdown()
            return
        }
        activeLabel = labelEl || primaryLabel
        dropdown.classList.add("active")
        renderList("")
        updateDropdownPosition(triggerEl)
        if (searchInput) {
            searchInput.value = ""
            searchInput.focus()
        }
    }

    primaryHandle.addEventListener("click", function (e) {
        e.stopPropagation()
        toggleDropdown(primaryHandle, primaryLabel)
    })

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            renderList(this.value)
        })
    }

    document.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target)) {
            closeDropdown()
        }
    })

    componentAiAgentChat.toggleWorkTypeDropdown = toggleDropdown
    componentAiAgentChat.closeWorkTypeDropdown = closeDropdown
};

componentAiAgentChat.attachFullscreenWorkTypeHandle = function () {
    var handle = document.getElementById("choose-work-type-fullscreen")
    if (!handle || handle.dataset.dropdownAttached === "true" || typeof componentAiAgentChat.toggleWorkTypeDropdown !== "function") {
        return
    }
    handle.dataset.dropdownAttached = "true"
    handle.addEventListener("click", function (e) {
        e.stopPropagation()
        var fullscreenLabel = document.getElementById("selected-work-type")
        componentAiAgentChat.toggleWorkTypeDropdown(handle, fullscreenLabel)
    })
}
