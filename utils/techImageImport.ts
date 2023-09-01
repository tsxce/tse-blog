const importAll = require =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const techImages = importAll(
  require.context("../images/tech-logos", false, /\.(png|jpe?g|svg)$/)
);

export default techImages;