module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/_redirects");


  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
  };
};
