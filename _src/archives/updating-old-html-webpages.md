---
title: 'Updating Old HTML Webpages'
date: Sat, 29 Apr 2023 09:14:06 +0000
draft: false
tags: ['learning', 'Linkedin Learning', 'tech related', 'web development', 'website', 'website news']
---

Most websites are simple. They have five to ten pages at most but usually a single page is enough. Most pages are about one specific thing, whether it’s a CV inspired page to find new clients or a simple page with a few products. Most are usually about a single topic.

This makes website maintenance and design simple, because one theme fits every page. My website is different. It has articles about [the Romans](http://main-vision.com/richard/romans.php), [Geography](https://main-vision.com/richard/geo.php), [Environmental Studies](https://main-vision.com/richard/richard/environm.php), [old student newspaper articles](https://main-vision.com/richard/surfing.php), Media studies pages and more. In effect it is several websites rolled into one.

The challenge with updating this website is in the size of the website. Since 1996 I have been adding pages, until about 2003 when I switched to wordpress- The website still has a thousand or more individual pages. Every time I update I have to update hundreds of pages.

Recently I converted the [surfing the World Wide Waves](https://main-vision.com/richard/surfing.php) section to PHP, including one php page where I put the articles into arrays, and individual pages that load the title, content, navigation and more. The [Surfing the World Wide Waves](https://main-vision.com/richard/surfing.php) session is now a simple to edit set of PHP pages, rather than 50 individual pages. I can edit the navigation in a single place, rather than for each article.

For the sake of consolidating my knowledge I was watching a [learning path about HT](https://www.linkedin.com/learning/paths/advance-your-skills-in-html) and I saw that one challenge was to take an [old HTML page, and improve it, to be a semantically correct web page](https://www.linkedin.com/learning/crafting-meaningful-html/solution-identify-semantic-problems?autoplay=true&contextUrn=urn%3Ali%3AlyndaLearningPath%3A5f6cf86d3cb2b65e8317c82f). This is a process that I have done several hundred times over the years. 

I created style sheets, one for the Romans section, another for the Surfing The World Wide Waves Section and one or two other CSS files, where one CSS file is used by multiple pages. It helps to make the website uniform. 

## Removing Tables and Inline formatting

Front Page 2000 and other website editor software added a lot of code, inline, which, today is not needed. Part of the process of going through the old pages is to strip out old code and replace it with modern code. I replace tables with divs, strong, and other tags with headers and more. I make it so that the website uses less code. 

Old pages sometimes have the font, font size, strong and other tags for each p tag. That’s a lot of code, for a page where CSS does the same thing, just once per tag, header etc. 

## A Quick Tip


If and when you’re working on an old page you may find nobr and other tags. In VS Code you can search and find nobr and use find and replace to review every individual use individually and it automatically moves on to the next instance.

I converted some long blocks of text from html to php within an echo tag and I had to escape a lot of ‘. I did this by selecting “‘“ and using find and replace with “\\’” to go through every occurrence individually before moving it to an echo tag. I saved time and effort.

## List Items

If you’re working on a list of items you often have to write the same code for each list item and this takes time. With VS Code you can option select the front to each individual item and type <li> just once. With the closing tag you do the same, except that it will auto-complete the tag so that’s even easier than expected. This saves time. 

Re-working an entire website is slow and repetitive but that repetition is good for two reasons. The first is that it gives me time to think about what I am doing, and to understand why I am doing it. The second is to develop work flows that increase efficiency. 

I read, assess, clean up and then re-format individual pages so that they’re template friendly. My Surfing the World Wide Waves section is now like a blog, where I have the bare bones code on each page, and the content in a centralised place. If I took one more step then it would be a one page website. As I gain experience I can take that last step. 

I am now focused on putting what I have learned to practice. I am consolidating what I have learned and finding solutions to practical challenges I encounter while working on my website.