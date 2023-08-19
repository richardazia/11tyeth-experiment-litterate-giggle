---
title: 'A Shift to PHP'
date: Fri, 18 Nov 2022 18:39:11 +0000
draft: false
tags: ['PHP', 'website news', 'website update']
---

PHP has been around for decades but I learned of a way to experiment with it easily recently so that is why I am playing with it now. The main page is php as is my first "blog" although it was part of a column for the student newspaper, that I converted to an electronic format and published frequently.

I tried to keep [Surfing the World Wide Waves](https://main-vision.com/richard/surfing.php) looking as it had back in the day. The aim is to practice with PHP and get some things to become automatic. I include one php file with the data, and a second for the footer. I use a loop to populate each blog post.

It looks like this

*   include data\_file.php
*   echo header etc.
*   article title, content etc
*   include footer

The format is simple and I could have made everything a for each loop so that each page is generated automatically but for the sake of learning and persistance I updated each page individually.

Aside from learning how to use PHP it was also an opportunity to practice using VIM.

[![](https://www.main-vision.com/richard/blog/wp-content/uploads/2022/11/Screenshot-2022-11-18-at-19.30.14.png)](https://www.main-vision.com/richard/blog/wp-content/uploads/2022/11/Screenshot-2022-11-18-at-19.30.14.png)

List of PHP files accessed with vim.

VIM is great for this process because you type vim name of file and you edit the little lines. I used shift V to use visual edit. I bulk deleted the old code I wanted to replace with the include footer line. It's a repetitive task but that's good for learning, and for a skill to practice and become habit.

Now that this repetitive task has been done I have more flexibility to edit the footer without having to edit every other individual file. I would have tried with the header element but I need to think about how to do this without losing meta data etc. It should be added to the data file and I could access it as a variable in a different part of the page.

With time I will fine tune all of these ideas and it will be reusable for future projects.