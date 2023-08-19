module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('archive', 'layouts/base.njk');
};



module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
};


