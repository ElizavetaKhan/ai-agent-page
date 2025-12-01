// type 1 - newChat, type 2 - with messages
componentAiAgentChat.openChat = function (type) {
  const shouldRenderMessages = type === 2

  if (shouldRenderMessages) {
    // вывод тулкита
    if (!componentAiAgentChat.selectedWorkType) {
      var toolkitContainer = document.getElementById("toolkit-container")
      toolkitContainer.classList.add("active")
      return
    }
    var input = document.getElementById("aiChatInput")
    if (input.value === "") {
      return
    }
  }

  var content = document.getElementById("aiFullscreenChat")

  content.classList.add("open")

  if (content) {
    content.innerHTML = `
            <div class="ai-agent-chat-container fullscreen">
                <svg class="ai-agent-close-fullscreen" id="close-fullscreen-chat" width="2.664vh" height="2.664vh" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="#D0D0D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6L18 18" stroke="#D0D0D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <!-- ИКОНКА И ИМЯ -->
                <div class="ai-agent-icon-and-name">
                    <svg width="8.88vh" height="8.88vh" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 25.499V32.999" stroke="#5FAFFF" stroke-width="6.75" stroke-linecap="square"/>
                        <path d="M40 7.72461C44.0179 7.72461 47.2754 10.9821 47.2754 15C47.2754 19.0179 44.0179 22.2754 40 22.2754C35.9821 22.2754 32.7246 19.0179 32.7246 15C32.7246 10.9821 35.9821 7.72461 40 7.72461Z" fill="#2785E5" stroke="#2785E5" stroke-width="5.45"/>
                        <path d="M57.5 35H22.5C12.835 35 5 42.835 5 52.5C5 62.165 12.835 70 22.5 70H57.5C67.165 70 75 62.165 75 52.5C75 42.835 67.165 35 57.5 35Z" fill="#5FAFFF" stroke="#2785E5" stroke-width="6.75"/>
                        <path d="M27.5 45.2275C31.5166 45.2275 34.7725 48.4834 34.7725 52.5C34.7725 56.5166 31.5166 59.7725 27.5 59.7725C23.4834 59.7725 20.2275 56.5166 20.2275 52.5C20.2275 48.4834 23.4834 45.2275 27.5 45.2275Z" fill="#13161B" stroke="#2785E5" stroke-width="5.45455"/>
                        <path d="M52.5 45.2275C56.5166 45.2275 59.7725 48.4834 59.7725 52.5C59.7725 56.5166 56.5166 59.7725 52.5 59.7725C48.4834 59.7725 45.2275 56.5166 45.2275 52.5C45.2275 48.4834 48.4834 45.2275 52.5 45.2275Z" fill="#13161B" stroke="#2785E5" stroke-width="5.45455"/>
                        <path d="M40 60L44.3301 67.5H35.6699L40 60Z" fill="#2785E5"/>
                        <path d="M40 45L35.6699 37.5H44.3301L40 45Z" fill="#2785E5"/>
                    </svg>

                    <div class="ai-agent-title-and-status"> 
                    <span class="ai-agent-title">СТРОЙАГЕНТ</span>
                    <div class="ai-agent-status">
                        <div class="online-dot"></div>
                        <span>на связи</span>
                    </div>
                    </div>
                </div>

                <div class="ai-agent-messages" id="ai-agent-messages">
                    <span  id="aiChatMessages" class="message right"></span>
                    <span class="message left">
                        Приветствую, Друг мой! Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текстекст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текстекст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст
                    </span>
                </div>

                <div class="ai-agent-fullscreen-input">
                    <!-- ВЫБОР ВИДА РАБОТ -->
                    <div class="ai-agent-select-work fullscreen">
                        <span id="selected-work-type"></span>
                    </div>

                    <!-- ПОЛЕ ДЛЯ ЧАТА -->
                    <div class="ai-agent-chat-input fullscreen">
                        <input 
                        type="text" 
                        placeholder="Сообщение" 
                        />
                        <svg class="ai-agent-send-button" width="4.44vh" height="4.44vh" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="8" fill="#31404F"/>
                            <path d="M26.7656 18.033C28.4566 18.8786 29.3026 19.3012 29.3026 19.9707C29.3026 20.6402 28.4566 21.0628 26.7656 21.9083L18.0704 26.2559C15.6668 27.4577 14.4648 28.0586 13.9127 27.5065C13.3609 26.9543 13.9623 25.7527 15.1639 23.3495L16.3116 21.0527L22.9814 21.0534C23.5794 21.0532 24.0639 20.5686 24.0642 19.9707C24.064 19.3726 23.5789 18.8872 22.9807 18.8872L16.3109 18.8865L15.1639 16.5919C13.9623 14.1887 13.3609 12.9871 13.9127 12.4349C14.4648 11.8828 15.6668 12.4837 18.0704 13.6854L26.7656 18.033Z" fill="#5FAFFF"/>
                        </svg>
                    </div>
                </div>
            </div>
        `
  }

  var selectedWorkTypeContainer = document.getElementById("selected-work-type")

  if (!componentAiAgentChat.selectedWorkType) {
    selectedWorkTypeContainer.innerHTML = "Выберите вид работ"
  } else {
    selectedWorkTypeContainer.innerHTML = componentAiAgentChat.selectedWorkType
  }

  if (shouldRenderMessages) {
    componentAiAgentChat.sendMessage(input.value)
  } else {
    var messagesContainer = document.getElementById("ai-agent-messages")
    messagesContainer.classList.add("off")
  }

  componentAiAgentChat.renderChatHistory()

  var closeButton = document.getElementById("close-fullscreen-chat")
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      componentAiAgentChat.closeChat()
    })
  }
}

componentAiAgentChat.closeChat = function () {
  var content = document.getElementById("aiFullscreenChat")
  content.classList.remove("open")

  // сброс выбранного вида работ
  componentAiAgentChat.selectedWorkType = null
  var choosenWorkType = document.getElementById("choosen-work-type")
  choosenWorkType.innerHTML = "Выберите вид работ"
}
