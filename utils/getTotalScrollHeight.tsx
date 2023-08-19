export default function getTotalScrollHeight() {
  var body = document.body,
    html = document.documentElement
  var scrollTotalHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight,
  )
  return scrollTotalHeight
}
