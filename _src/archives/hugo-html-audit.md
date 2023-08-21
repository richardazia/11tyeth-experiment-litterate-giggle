---
title: "Hugo Html Audit"
tags: [hugo, html, audit]
date: 2023-07-05T10:12:34+02:00
draft: false
---

With Hugo you can generate entire websites within milliseconds if they're small and seconds if they're large. Within a very short amount of time thousands of pages are generated. If you went through and checked each page then this could take hours, or even weeks, depending on the size of the site. To save time Hugo does have a command to check for html in Markdown in seconds. The next step is to see the title of the markdown pages with an issue and fix them individually.  

You can run an html audit on Hugo by running the command: `HUGO_MINIFY_TDEWOLFF_HTML_KEEPCOMMENTS=true HUGO_ENABLEMISSINGTRANSLATIONPLACEHOLDERS=true hugo && grep -inorE "<\!-- raw HTML omitted -->|ZgotmplZ|\[i18n\]|\(<nil>\)|(&lt;nil&gt;)|hahahugo" public/`. It will go through your website and check that all html is working properly. 

## When to Use It

The best time to run an audit is when you have imported a wordpress blog to md, or from some other source to markdown. Markdown recognises some HTML but not all. I found that it is especially at comments that markdown was confused. It saw the time and date tags and detected an error. It also generates errors when it comes across html tags. If you want to display code with md you need to use back `example code` for the code to be ignored. \ Does not work in markdown. 

## How it Helps

Auditing Hugo before building helps to detect flaws that are not visible unless you check the source code for each page individually. With this simple solution you can check the entire website when you build. The first time you run it you will find errors, but over time those errors will increase. In the tutorial they say that you will run it once to check, and a second time for the official build. I ran it more often than that. The errors I got were intuitive to fix. Look for html code in markdown and you'll find the problems. Markdown does not like smileys so if comments are converted to markdown, you need to remove the smileys. 

The [article](https://discourse.gohugo.io/t/audit-your-published-site-for-problems/35184) is here if you want to learn more. 

## And Finally

If you want to learn more about Hugo you can read the [tutorials](https://discourse.gohugo.io/t/hugo-tutorials-tips/39009) pages. I also use [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) in Visual Studio for help with checking markdown and ensuring that it is correct.
