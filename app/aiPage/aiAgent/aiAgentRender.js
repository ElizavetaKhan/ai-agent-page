// Рендер чата с стройАгентом
componentAiAgentChat.render = function () {
  var content = document.getElementById("aiAgentContainer")
  if (content) {
    content.innerHTML = `
        <div class="ai-agent-chat-container">
          
          <!-- ИКОНКА И ИМЯ -->
          <div class="ai-agent-icon-and-name">
            <div class="ai-block">
              <svg width="8.88vh" height="8.88vh" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 25.499V32.999" stroke="#5FAFFF" stroke-width="6.75" stroke-linecap="square"/>
                <path d="M40 7.72461C44.0179 7.72461 47.2754 10.9821 47.2754 15C47.2754 19.0179 44.0179 22.2754 40 22.2754C35.9821 22.2754 32.7246 19.0179 32.7246 15C32.7246 10.9821 35.9821 7.72461 40 7.72461Z" fill="#2785E5" stroke="#2785E5" stroke-width="5.45"/>
                <path d="M57.5 35H22.5C12.835 35 5 42.835 5 52.5C5 62.165 12.835 70 22.5 70H57.5C67.165 70 75 62.165 75 52.5C75 42.835 67.165 35 57.5 35Z" fill="#5FAFFF" stroke="#2785E5" stroke-width="6.75"/>
                <path d="M27.5 45.2275C31.5166 45.2275 34.7725 48.4834 34.7725 52.5C34.7725 56.5166 31.5166 59.7725 27.5 59.7725C23.4834 59.7725 20.2275 56.5166 20.2275 52.5C20.2275 48.4834 23.4834 45.2275 27.5 45.2275Z" fill="#13161B" stroke="#2785E5" stroke-width="5.45455"/>
                <path d="M52.5 45.2275C56.5166 45.2275 59.7725 48.4834 59.7725 52.5C59.7725 56.5166 56.5166 59.7725 52.5 59.7725C48.4834 59.7725 45.2275 56.5166 45.2275 52.5C45.2275 48.4834 48.4834 45.2275 52.5 45.2275Z" fill="#13161B" stroke="#2785E5" stroke-width="5.45455"/>
                <path d="M40 60L44.3301 67.5H35.6699L40 60Z" fill="#2785E5"/>
                <path d="M40 45L35.6699 37.5H44.3301L40 45Z" fill="#2785E5"/>
              </svg>
              <!-- ТУЛКИТ -->
              <div class="ai-agent-toolkit-container" id="toolkit-container">
                <svg width="24.642vh" height="8.658vh" viewBox="0 0 222 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.66406 20.056C9.66406 9.20211 18.4628 0.40332 29.3167 0.40332V28.8479H9.66406V20.056Z" fill="#31404F" stroke="#31404F" stroke-width="0.805851"/>
                  <rect x="9.66406" y="28.8477" width="19.6526" height="20.1217" fill="#31404F" stroke="#31404F" stroke-width="0.805851"/>
                  <path d="M29.3169 48.9697V77.4141C24.5572 77.4141 20.1931 75.7216 16.7925 72.9062C13.4001 75.1663 7.96139 77.316 1.38916 76.1211C3.19942 75.3452 10.1809 70.6908 9.92236 61.3818C9.95309 61.4241 9.98772 61.4635 10.021 61.5039C9.78742 60.2924 9.66357 59.0414 9.66357 57.7617V48.9697H29.3169Z" fill="#31404F"/>
                  <path d="M29.3169 48.9697H29.7198V48.5668H29.3169V48.9697ZM29.3169 77.4141V77.817H29.7198V77.4141H29.3169ZM16.7925 72.9062L17.0494 72.5959L16.8185 72.4047L16.5691 72.5709L16.7925 72.9062ZM1.38916 76.1211L1.23043 75.7508L0.000112772 76.2781L1.31708 76.5175L1.38916 76.1211ZM9.92236 61.3818L10.2482 61.1448L9.48349 60.0933L9.51959 61.393L9.92236 61.3818ZM10.021 61.5039L9.71006 61.7602L10.4166 61.4276L10.021 61.5039ZM9.66357 57.7617H9.26065H9.66357ZM9.66357 48.9697V48.5668H9.26065V48.9697H9.66357ZM29.3169 48.9697H28.914V77.4141H29.3169H29.7198V48.9697H29.3169ZM29.3169 77.4141V77.0111C24.6545 77.0111 20.3805 75.3537 17.0494 72.5959L16.7925 72.9062L16.5355 73.2166C20.0057 76.0896 24.46 77.817 29.3169 77.817V77.4141ZM16.7925 72.9062L16.5691 72.5709C13.2391 74.7895 7.90505 76.8963 1.46124 75.7247L1.38916 76.1211L1.31708 76.5175C8.01773 77.7358 13.5612 75.5432 17.0159 73.2416L16.7925 72.9062ZM1.38916 76.1211L1.54789 76.4914C2.51474 76.077 4.76599 74.6784 6.74621 72.2031C8.73435 69.7179 10.4575 66.1363 10.3251 61.3706L9.92236 61.3818L9.51959 61.393C9.64579 65.9363 8.00749 69.3365 6.11695 71.6997C4.21849 74.0728 2.07385 75.3893 1.23043 75.7508L1.38916 76.1211ZM9.92236 61.3818L9.5965 61.6188C9.63679 61.6742 9.68751 61.7328 9.71006 61.7602L10.021 61.5039L10.3319 61.2477C10.2879 61.1943 10.2694 61.174 10.2482 61.1448L9.92236 61.3818ZM10.021 61.5039L10.4166 61.4276C10.1878 60.2408 10.0665 59.0154 10.0665 57.7617H9.66357H9.26065C9.26065 59.0675 9.38702 60.344 9.62536 61.5802L10.021 61.5039ZM9.66357 57.7617H10.0665V48.9697H9.66357H9.26065V57.7617H9.66357ZM9.66357 48.9697V49.3727H29.3169V48.9697V48.5668H9.66357V48.9697Z" fill="#31404F"/>
                  <rect x="29.3169" y="0.40332" width="172" height="77.0106" fill="#31404F"/>
                  <rect x="29.3169" y="0.40332" width="172" height="77.0106" stroke="#31404F" stroke-width="0.805851"/>
                  <path d="M220.97 20.056C220.97 9.20211 212.171 0.40332 201.317 0.40332V28.8479H220.97V20.056Z" fill="#31404F" stroke="#31404F" stroke-width="0.805851"/>
                  <rect width="19.6526" height="20.1214" transform="matrix(-1 0 0 1 220.97 28.8477)" fill="#31404F" stroke="#31404F" stroke-width="0.805851"/>
                  <path d="M220.97 57.7614C220.97 68.6153 212.171 77.4141 201.317 77.4141V48.9695H220.97V57.7614Z" fill="#31404F" stroke="#31404F" stroke-width="0.805851"/>
                </svg>
                <span class="ai-agent-toolkit-text">Для начала выберите вид работ</span>
              </div>
            </div>

            <div class="ai-agent-title-and-status">
              <span class="ai-agent-title">СТРОЙАГЕНТ</span>
              <div class="ai-agent-status">
                <div class="online-dot"></div>
                <span>на связи</span>
              </div>
            </div>
            
            
          </div>

          <div class="ai-agent-select-work" id="choose-work-type">
            <span id="choosen-work-type"></span>
            <svg width="2.664vh" height="2.664vh" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8079 14.7695L8.09346 10.3121C7.65924 9.79109 8.02976 9 8.70803 9L15.292 9C15.9702 9 16.3408 9.79108 15.9065 10.3121L12.1921 14.7695C12.0921 14.8895 11.9079 14.8895 11.8079 14.7695Z" fill="#5FAFFF"/>
            </svg>
          </div>

          <!-- DROPDOWN ДЛЯ ВЫБОРА ВИДА РАБОТ -->
          <div class="worktype-dropdown" id="aiWorkTypeDropdown">
            <div class="worktype-dropdown-input">
              <input 
                type="text" 
                id="aiWorkTypeSearch" 
                placeholder="Поиск"
                autoailete="off"
              />
              <svg class="worktype-dropdown-icon" width="2.664vh" height="2.664vh" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5159_9318)">
                <circle cx="11" cy="11" r="7" stroke="#D0D0D1" stroke-width="2"/>
                <path d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11" stroke="#D0D0D1" stroke-width="2" stroke-linecap="round"/>
                <path d="M20 20L17 17" stroke="#D0D0D1" stroke-width="2" stroke-linecap="round"/>
                </g>
                <defs>
                <clipPath id="clip0_5159_9318">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
              </svg>

            </div>
            <div class="worktype-dropdown-list" id="aiWorkTypeDropdownList">
              <!-- Список застройщиков будет добавлен динамически -->
            </div>
          </div>

          <!-- ПОЛЕ ДЛЯ ЧАТА -->
          <div class="ai-agent-chat-input">
            <input 
              type="text" 
              id="aiChatInput"
              placeholder="Приветствую, чем могу быть полезен?" 
            />
            <svg class="ai-agent-send-button" id="open-fullscreen-chat" width="4.44vh" height="4.44vh" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#31404F"/>
              <path d="M26.7656 18.033C28.4566 18.8786 29.3026 19.3012 29.3026 19.9707C29.3026 20.6402 28.4566 21.0628 26.7656 21.9083L18.0704 26.2559C15.6668 27.4577 14.4648 28.0586 13.9127 27.5065C13.3609 26.9543 13.9623 25.7527 15.1639 23.3495L16.3116 21.0527L22.9814 21.0534C23.5794 21.0532 24.0639 20.5686 24.0642 19.9707C24.064 19.3726 23.5789 18.8872 22.9807 18.8872L16.3109 18.8865L15.1639 16.5919C13.9623 14.1887 13.3609 12.9871 13.9127 12.4349C14.4648 11.8828 15.6668 12.4837 18.0704 13.6854L26.7656 18.033Z" fill="#5FAFFF"/>
            </svg>
          </div>

          <!-- КНОПКИ ИСТОРИИ И НОВОГО ЧАТА -->
          <div class="bottom-buttons">
            <svg id="open-history-btn" width="3.552vh" height="3.552vh" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="#31404F"/>
              <path d="M13 8V24M8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H22C22.5304 8 23.0391 8.21071 23.4142 8.58579C23.7893 8.96086 24 9.46957 24 10V22C24 22.5304 23.7893 23.0391 23.4142 23.4142C23.0391 23.7893 22.5304 24 22 24H10C9.46957 24 8.96086 23.7893 8.58579 23.4142C8.21071 23.0391 8 22.5304 8 22V10Z" stroke="#5FAFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg id="open-new-chat-bottom-btn" width="3.552vh" height="3.552vh" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="#31404F"/>
              <circle cx="16" cy="16" r="9" stroke="#5FAFFF" stroke-width="2"/>
              <path d="M16 19L16 13" stroke="#5FAFFF" stroke-width="2" stroke-linecap="square"/>
              <path d="M19 16L13 16" stroke="#5FAFFF" stroke-width="2" stroke-linecap="square"/>
            </svg>
          </div>
        </div>
    `
  }
  var openButton = document.getElementById("open-fullscreen-chat")
  if (openButton) {
    openButton.addEventListener("click", () => {
      componentAiAgentChat.openChat(2)
    })
  }
  var openNewChatBtn = document.getElementById("open-new-chat-bottom-btn")
  if (openNewChatBtn) {
    openNewChatBtn.addEventListener("click", () => {
      componentAiAgentChat.openChat(1)
    })
  }

  componentAiAgentChat.initWorkTypes()
  componentAiAgentChat.renderChatHistory()
}
