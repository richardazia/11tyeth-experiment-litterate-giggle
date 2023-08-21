module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('archive', 'layouts/base.njk');
};

module.exports = function(eleventyConfig) {
  // Copy static assets to the output directory
  eleventyConfig.addPassthroughCopy("archives");

  return {
    dir: {
      input: "arhives",
      output: "dist"
    }
  };
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
};


