componentAiAgentChat.renderChatHistory = function () {
  var content = document.getElementById("aiAgentChatHistory")
  var openBtn = document.getElementById("open-history-btn")

  if (!openBtn) return

  openBtn.addEventListener("click", function (e) {
    e.stopPropagation()
    content.classList.add("open")
  })

  if (content) {
    content.innerHTML = `
            <div class="chat-history-container">
                <div class="chat-history-header">
                    <span class="chat-history-header-text">СТРОЙАГЕНТ</span>
                    <svg class="chat-close-icon" id="chat-close-icon" width="2.664vh" height="2.664vh" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4V20M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z" stroke="#D0D0D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="new-chat-button" id="open-new-chat-btn">
                    <span class="chat-history-new-chat">Новый чат</span>
                    <svg width="2.664vh" height="2.664vh" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" fill="#3F4246"/>
                        <path d="M12 8L12 16" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                        <path d="M16 12L8 12" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="chat-history-message-container">
                    <span class="chat-history-date">Сегодня</span>
                    <span class="chat-history-message">
                        Приветсвую, Друг мой!Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текстекст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текстекст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст
                    </span>
                </div>
                <div class="chat-history-message-container">
                    <span class="chat-history-date">Вчера</span>
                    <span class="chat-history-message">
                        Приветсвую, Друг мой!Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текстекст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текстекст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст Текст текст текст текст текст текст текст текст
                    </span>
                </div>
            </div>
        `
  }
  var closeBtn = document.getElementById("chat-close-icon")
  if (!closeBtn) return

  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation()
    content.classList.remove("open")
  })

  var openNewChatBtn = document.getElementById("open-new-chat-btn")
  if (!openNewChatBtn) return

  if (openNewChatBtn) {
    content.classList.remove("open")

    openNewChatBtn.addEventListener("click", () => {
      componentAiAgentChat.openChat(1)
    })
  }
}
