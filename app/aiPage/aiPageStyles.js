// Подключение CSS стилей: общие стили
aiPage.addCommonStyles = function () {
  if (document.getElementById("aiPageCommonStyles")) return

  var linkEl = document.createElement("link")
  linkEl.rel = "stylesheet"
  linkEl.href = "css/aiPageStyles/ai-page-common.css"
  linkEl.id = "aiPageCommonStyles"
  document.head.appendChild(linkEl)
}