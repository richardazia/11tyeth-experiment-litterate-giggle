---
title: "Hugo and Wordpress"
tags: [learning, experimenting, hugo, wordpress]
date: 2023-06-29T10:34:34+02:00
draft: false
---

## Transitioning from WordPress to Hugo

Transitioning from WordPress to Hugo is tempting because I don't need an entire CMS for what I'm doing. What I need is a centralised system that checks for tags, titles and the theme, and updates the navigation as I add new pages. You don't need a CMS for that.

## The Good Old Days

If you go through the meta data for many of my static pages you will see that they were created with dreamweaver, frontpage 2000 and other solutions. The aim of these was to create an application that would prepare the html and navigation for pages, so we could concentrate on content creation. This was before the age of the CMS.

## A short Learning Curve

If you want to create a simple blog, without changing much the learning curve for WordPress and Hugo is short, compared to what is required for Laravel, Angular and other solutions. You create content and there are tools that will take care of almost everything else.
With Hugo and WordPress you can, theoretically, start creating content and sharing it within minutes, or even seconds, depending on how many times you have set things up before.

## HTML or Markdown

With Hugo if you want to create a simple page you can use markdown and save a lot of time and effort. You focus on headings, images, lists and hyperlinks. If you want to have more flexibility you can generate an HTML page, and with this you can do anything you want, and have the experience, to do.

* hugo new blogs/big-timber.html
* hugo new posts/hugo-and-wordpress.md

## A Huge Mess

I need to find a solution to a problem. I have a blog with thousands of articles so I have thousands of markdown pages in a single directory. I considered using the creation date with year-m-d-article-title.md but if I do this then Hugo will use that as the headline for new blog posts. I would need to edit the Title of new posts, to remove the date information. For the public folder, once the blog is exported the files are tidy. 

## Thousands of Files and Directories

Hugo likes to create a folder and file for every single page. The result is that every page has its own folder. That's fine, when everything is working well, but chaotic every time you make changes. At the moment of writing every change generates 6000 files and folders. That's 10-20 seconds per export, and this doesn't include the upload time.

## Minor Changes With A Big Cost

When you're using a CMS like wordpress changing a theme takes seconds. You find a theme, apply it, and a few seconds later you're ready to role. With Hugo if you change the theme you need to regenerate and then reupload the website in its entirety. Small changes become big changes. Having said this, with a static website, managed by hand, rather than Hugo, this would take hours, rather than seconds.

## Very Fast, Flexible

I see that Hugo is fast and flexible. It provides the organisational features of a CMS with the flexibility of HTML pages, when that is desired. This makes it easy to circumvent the limitations that are imposed by markdown, for those that want to embed videos or other features into a specific web page or blog post.

## And Finally

Hugo requires no back end. Anywhere that you can upload html, can display a Hugo website, or individual pages. You have the ability to tell Hugo where the files will be on a server, so that links are built to play nicely. Both the static part of my website, and the blog may soon run via Hugo.
