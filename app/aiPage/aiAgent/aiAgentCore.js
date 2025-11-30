// Инициализация компонента чата с стройАгентом
var componentAiAgentChat = {}
window.componentAiAgentChat = componentAiAgentChat

componentAiAgentChat.messages = []

componentAiAgentChat.sendMessage = function (text) {
    if (!text.trim()) return;
    this.messages.push(text);

    var container = document.getElementById("aiChatMessages");

    if (!container) return;
    container.innerHTML = this.messages[0]

    document.getElementById("aiChatInput").value = "";
}