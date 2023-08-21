---
title: 'Conservation and PHP'
date: Tue, 22 Nov 2022 16:07:45 +0000
draft: false
tags: ['Conservation', 'learning', 'PHP', 'website', 'website news']
---

Today I have struggled with PHP. I struggled because I want to recreate the same table using loops with PHP as I did formatting with HTML. If I wasn't up for a challenge I would let PHP loops format it according the default and I'd be done. In the end I did get [the table](https://main-vision.com/richard/conserva.php) to display as I wanted but not using for loops. I created a table page, laid it out using the data file I've been using for this section, and then using include to add that content where I wanted it to be on the page.

It works, and it's elegant. I want it to be done by a loop. This is important to me because it requires me to learn more about how to use nested loops and this is an important element of programming. It's a skill worth having.

[Before](https://main-vision.com/richard/richard/environm.htm) : [intermediate](https://www.main-vision.com/richard/environm.htm) : [After](https://main-vision.com/richard/environm.php)

Above you can see before css was added, the website looked simple. When CSS was added it looked better, and once it became php it looks similar but the code needed is much less, as data is with included files. The footer and the nav bar are always the same, and for most pages the usual loops are enough to display content on all pages.

With PHP you can just echo html and the page will display as you want it to. With variables and includes you can display the information you want to display automatically, rather than manually.

In most cases you can use "Title", and "content" and use HTML to format all the data as you want it to be. By doing this the conservation page would be done within minutes but the content would be less flexible. By creating arrays within arrays I make things more modular. I can remove or add sections and it will just change that part of the site without affecting other parts.

The point with PHP, frameworks and javascript is to set everything up so that when changes are made they can be as small or as big as we want, in a modular manner. That's why my struggling to get things to work today is important. Once I learn how to do this, I will be more confident with future challenges.