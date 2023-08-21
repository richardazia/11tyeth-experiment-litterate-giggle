---
title: 'Playing with the Hugo With An Old Site'
date: Thu, 01 Jun 2023 11:03:35 +0000
draft: false
tags: ['hugo', 'learning', 'static website', 'Swiss walks', 'website']
---

For a few days I have been playing with [Hugo](https://gohugo.io/) with Markdown and HTML pages. It says that it is “the world’s fastest framework for building websites” and so far I do notice that it has a key strength that I like. 

**Front Matter**

That strength is that with small modifications you can take an existing static website and make it dynamic.  Hugo requires that each page has Front Matter.  

Front matter is:

• title

• date

• tags

• description

• author

• slug

• draft

• and more. It’s a quick and easy way of organising a website, one page at a time. 

Front Matter according to chatGPT is “a metadata configuration section that is commonly used in static site generators like Hugo, Jekyll, and others.” It is placed at the top of a document to provide useful information like post title, publish date, tags and more. The beauty of tags, author and other tags is that they are used to organise data without the need for a CMS back end. 

**The Niche it Fills**

The advantage of Hugo, over a CMS like Wordpress, is that it doesn’t lock you into itself. It allows you to create pages, and to organise those pages by tags, category or other. It allows you, via the layout metadata to specify which css layout a page should use. You can have one website section with one theme, and another section with another theme. 

If your website has a section that is about geography, and another about environmental systems. You use the relevant tags for each page. If you click on the geography tag you get a page with a list of all the pages tagged with geography. If you click on “Environmental Studies” you get the content on that topic. 

Aside from creating tags you can create a hierarchy. If you write “film/french” it will recognise that you have the tag “film” and within that tag you have the sub tag of french. If you write about french films you can add the tag “french/film” rather than “french, film” and it will create sub-tags. This is an effective means of organising tags. 

**The Weaknesses**

When you create pages their default is draft, which means that you need to change draft to false if you want it to generate pages with the hugo command. When a page is generated it does not switch the draft status from true to false, so you need to tell it to export drafts each time. 

When you generate the static website it creates a directory for each page, with an index.html page in each. 

The same is true of the tags page generation. If you have 20 pages you will have 20 directories with index.html pages. If you have  100 tags you will have one hundred folders with an index.html file and an index.xml page.  If you want to fix this [Hugo calls them ugly URLs](https://gohugo.io/content-management/urls/#ugly-urls). 

**Switching from Pelican to Hugo**

Initially I thought Pelican looked like a powerful tool until I encountered the issue with categories being “one per page” by default. The plugin to allow for more was simple to implement but I like to experiment with tools and I found that Hugo is an interesting alternative. 

**The Strength**

I want the flexibility of a CMS driven website without being stuck within Wordpress or another CMS. This tool gives me the features of a CMS without the limitations. As i add Front Matter information to each page, so it becomes easy to index every page and update navigation one final time, rather than every single time small changes are made. 

**Partial Templates**

With Hugo you can create [partial templates](https://gohugo.io/templates/partials/), as you can with Laravel and other framework tools, except that with this framework html and markdown are used. The learning curve is more gradual. 

**The Sitemap**

A nice feature of Hugo is that it generates a sitemap with information about the location of each file, when it was last changed, the change frequency and priority. In this way Google and other search engines may quickly see what has changed and when. 

**And Finally**

If your website is already written in HTML it makes sense to find a tool that will connect all the pages together, for navigation. The CSS, JS, and html stay the same. It’s just the framework behind the scenes, connecting everything efficiently.