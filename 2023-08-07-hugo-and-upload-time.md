---
layout: posts.njk
title: Hugo and Upload Time
description: ""
date: 2023-08-07T08:35:48.351Z
preview: ""
draft: false
tags: [ftp, sftp, upload time, hugo]
categories: []
---

I like blogging with Hugo. I like writing my daily article in VIM and then exporting it to WordPress, before publishing it both with Hugo and WordPress. The build time for this build was 14 seconds but it can take up to 20 seconds. Although this i slow this isn't the bottle neck.

## New Files and Hugo

Every time you create a blog post, and every time you use a keyword that's tag page has to be regenerated. If you use two, three or more tags then three or four pages need to be updated. As well as these pages needing to be regenerated so does the site's index page, and others. If you include related pages at the bottom of the page, then every article with the tag also needs to be updated. The result is that tens, or even hundreds of pages need to updated at a time.

## FTP Compare

Every day I write a blog post and every day I use Hugo to rebuild the website. All the files that have been updated need to be uploaded to the server. I don't want to overwrite every page, when it makes more sense just to overwrite the updated pages. This usually takes time. I experimented with Filezilla and Cyberduck. Both take at least an hour or two every single day, to work through and upload the new pages. This is time consuming and inefficient. With WordPress, Drupal and other solutions, you write the post, publish and you're done. The same is true of Hugo with smaller websites.

When a website has thousands of articles and tags Hugo becomes slow, at the upload stage. It's at this point that the switch to a faster solution makes sense.

## And Finally

I will continue to experiment with Hugo and my blog but I will not publish on a regular basis, since uploading takes time. I will upload once a week to save time and resources. I have come up with a workflow and it works. I have learned at least the basics of Hugo and now I can move on to carry out more experimentation.
