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
    var handleWorkTypesList = document.getElementById("choose-work-type")
    var choosenWorkType = document.getElementById("choosen-work-type")

    if (!choosenWorkType) return
    choosenWorkType.innerHTML = "Выберите вид работ"

    if (!dropdown || !listContainer || !handleWorkTypesList) return;

    function renderList(filter = "") {
        listContainer.innerHTML = "";

        Object.keys(componentAiAgentChat.workTypes).forEach(function (category) {
            var filteredItems = componentAiAgentChat.workTypes[category].filter(function (item) {
                return item.toLowerCase().includes(filter.toLowerCase());
            });

            if (filteredItems.length === 0) return;

            var categoryEl = document.createElement("div");
            categoryEl.className = "worktype-category";
            categoryEl.textContent = category;
            listContainer.appendChild(categoryEl);

            filteredItems.forEach(function (item) {
                var itemEl = document.createElement("div");
                itemEl.className = "worktype-dropdown-item";
                itemEl.textContent = item;
                itemEl.addEventListener("click", function () {
                    componentAiAgentChat.selectedWorkType = item;
                    choosenWorkType.innerHTML = item;
                    dropdown.classList.remove("active");

                    var toolkit = document.getElementById('toolkit-container')
                    toolkit.classList.remove('active')
                });
                listContainer.appendChild(itemEl);
            });
        });
    }

    handleWorkTypesList.addEventListener("click", function (e) {
        e.stopPropagation();

        dropdown.classList.toggle("active");
        renderList();
        searchInput.focus();
    });

    searchInput.addEventListener("input", function () {
        renderList(this.value);
    });

    document.addEventListener("click", function () {
        dropdown.classList.remove("active");
    });
};
