---
layout: posts.njk
title: Git-FTP and Web Development
description: ""
date: 2023-08-09T07:31:50.855Z
preview: ""
draft: false
tags: [git-ftp, web development, ftp, git]
categories: []
---

From the way people write about Github you would believe that everything has to pass through it, for anything to work but after some trial and error I found this to be a misconception.

I found that with [GIT-FTP on Github](https://github.com/git-ftp/git-ftp) I could upload and download files to a website after each git update. I learned this through following instructions for [another workflow](https://blog.hajruli.ch/2020/05/hugo-infomaniak-githubactions/). I followed these instructions but because I use disroot rather than github the workflow didn't work for me. I considered migrating my repository to github but chose not to.

## Experimenting with Git-FTP

I spent a lot of time experimenting with Git-FTP, not because it's complicated to use, but because the instructions I had confused me. 

When I experiment with Hugo I have a git repository that tracks the changes for everything but the public file, so when I tried to upload the website after telling it not to use public, I then had to delete tens of thousands of files from the FTP site, twice. 

The workflow that is mentioned above works well if you're on github but I am not so it was nice to try, but not that useful. The more interesting option is to use git-FTP directly with the "public" Hugo build directory.

## Git, Git FTP and the Public directory

The quickest, smoothest workflow I found is to track changes within the public folder and upload to the ftp server that way.

- Git init within the public folder and commit the initial version.

## The instructions to Install Git FTP

The simplest way to [install git-ftp] on a mac is with Brew. Within a few seconds you're ready.

The next step: 

1. git config git-ftp.url "ftp://ftp.example.net:21/public_html"
2. git config git-ftp.user "ftp-user"
3. git config git-ftp.password "secr3t"

After this you use git ftp init and it will upload all the files.

[List of Commands](https://github.com/git-ftp/git-ftp/blob/master/man/git-ftp.1.md)

With this workflow you don't need github or any other repository. You make your changes locally, update git, and once that is done "push" the files that have been changed. It takes seconds and a few lines of instructions

## The Old Method

The old method, that I have been using for decadess, is to work on a file, save it, and then use filezilla, cyberduck or some other client and upload the changed files. This method requires you to keep track of dates, and ensure that all files, from all locations, are uploaded. By using git-ftp you eliminate the need for github and others, and upload files, straight after updating the git repository. I can see myself using this all the time from now on.

While writing this blog post I did come across this command.

> -P, --ask-passwd : Ask for FTP password interactively.

If you use a machine that other people use then this command is a better one to use because I noticed that you can see information in clear text in terminal, which is not good. Anyone that has access to the computer can run check the terminal log and find that sensitive information.

In my case, and for my experimenting the ftp account I created only has access to the blog folder, and no others. In this manner only one folder can be compromised so easily.

## The Beauty of This Tool

The beauty of this tool, in my eyes, is that I can work on a website and I can track changes with Git but I don't need to use github pages, netlify or any other tools. I can create full fledged websites and webpages and update the site by updating the git repo and then git ftp push and within seconds the site that I'm working on is up to date, without being locked in to any other site where I am the product.

I like being self-hosted, and I disliked the idea of dumping a website and domain I have used for decades, to take advantage of a simpler workflow.

## And Finally

Plenty of instructions and workflows show the benefit of using their products and their workflows, to lock you in to their system. By trial and error I learned that tools exist to streamline the workflow without github. Too much of the web is built around docker, github and other solutions. The result is that you find plenty of instructions for a technique that will trap you, rather than provide you with independence. My blog post is written to help you enjoy greater freedom.
