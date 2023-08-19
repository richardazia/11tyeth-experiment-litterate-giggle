---
title: 'Playing With Pelican - A Static Blog Website'
date: Tue, 23 May 2023 09:17:42 +0000
draft: false
tags: ['learning', 'pelican', 'Python', 'static generators', 'website news']
---

When looking at Codeberg as a European alternative to github I came across mentions of Pelican, a static blog generator. Yesterday I spent several hours setting it up and playing. Whilst playing with it I saw some opportunities. 

By default Pelican is designed to have one category per blog post. For small websites this is fine. It encourages people to focus on three to five topics, and ensure that each topic is clearly visible in the nav bar at the top of the page. 

When I imported two different wordpress blogs I had success is importing the blog posts, but a failure when it came to the nav bar. 

**How Does Pelican Work**

[Pelican](https://docs.getpelican.com/en/stable/content.html) can use html, reStructuredText or markdown. It wants to know the date, tags, category, slug, authors, summary and more for each page. Once a page has this information, as well as some content you type “pelican content” and it will generate the static website for you. You can then test the site with pelican listen and check that the website is displaying and working as desired. 

**Categories**

If I wrote a blog post about hiking in Vaud, Switzerland I would have that blog in “hiking”, “Switzerland” and “Vaud”. Pelican combined the three categories and created a nav page. The result is that I had a bloated nav bar. 

When I enquired about parsing the categories I was told that Pelican wanted to have one category per page, intentionally. They also told me that a plugin allows you to create [more categories](https://github.com/pelican-plugins/more-categories).  This plugin is quick and easy to install and implement. 

**More Categories**

With [More Categories](https://github.com/pelican-plugins/more-categories) you can add several categories per blog post, but you can also add a hierarchy. If you write a post about hiking in Vaud, Switzerland, you can have hiking, vaud, switzerland, as a flat hierarchy. You can also have “sports/hiking” and “Switzerland/Vaud” as subcategories. This opens up the possibility of creating a nuanced static website. 

**Importing a Website**

You can [import content](https://docs.getpelican.com/en/latest/importer.html) from another source by using pelican import. You can choose from Blogger, Wordpress etc. I experimented with importing from Wordpress and it  worked well, except for the issues I mentioned earlier. 

**Streamlining an HTML Site**

My website is split into three parts

• [The legacy HTML section](https://www.main-vision.com/)

• the main blog

• [the photo blog](https://www.main-vision.com/richard-photos/)

After the two tests I ran yesterday I came to the conclusion that, for now, I will keep using wordpress for the blogs. The reason I think Pelican is interesting for me is that it can read html and the legacy part of my website is html. The challenge with legacy code is keeping the navigation and other parts up to date each time you make small changes. With Pelican I hope to delegate navigation creation. By ensuring that each page has the correct meta data in the header I can then get Pelican to regenerate the website with a navigation that is easier to keep up to date. 

**Measuring Success**

If I am successful then I will have the website imported into Pelican and I will have a geography, environmental systems, Ancient Rome, and other sections and one or two sections will have themes that are specific to them. 

[List of other Python Static Website Generators](https://wiki.python.org/moin/StaticSiteGenerator)