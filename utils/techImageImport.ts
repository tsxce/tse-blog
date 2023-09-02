function importAll(r) {
  //   let images = {}
  //   r.keys().forEach((item, index) => {
  //     images[item.replace('./', '')] = r(item)
  //   })
  let images = []
  r.keys().forEach((item, index) => {
    images.push(r(item))
  })
  return images.slice(0, Math.ceil(images.length / 2))
}

const techImages = importAll(
  require.context('../images/tech-logos/', false, /\.(png|jpe?g|svg)$/),
)

export default techImages
