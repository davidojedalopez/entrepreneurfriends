module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("businesses", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("businesses/*.md")
  })

  eleventyConfig.addPassthroughCopy("assets");
}