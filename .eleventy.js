module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('archive', 'layouts/base.njk');
};

module.exports = function(eleventyConfig) {
  // Copy static assets to the output directory
  eleventyConfig.addPassthroughCopy("src/archive");

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
};


