---
title: 'Switching From MySQL to MariaDB with Infomaniak'
date: Wed, 06 Oct 2021 12:10:14 +0000
draft: false
tags: ['infomaniak', 'MariaDB', 'tech related', 'website news', 'wordpress']
---

Today I tried Switching from MySQL to MariaDB with Infomaniak as a webhost. This morning they sent an e-mail to say that we could switch from MySQL to MariaDB automatically so I tried. For the test I:

*   downloaded a new install of wordpress to my local machine and put it in the MAMP htdocs folder under mariadb.
*   I installed MariaDB on port 3310.
*   Using the command line I created a wordpress database.
*   I configured WordPress. Within seconds the website was up and running.
*   When I saw that the interface was that the same and that I had to make no changes I went ahead with Infomaniak.
*   Of course I backed up the MySQL server data, just in case.

Within a matter of minutes of telling Infomaniak to switch from MySQL to MariaDB the migration was finished and the website was up and running again. It was quick and painless. If something did go wrong I could easily step back but I also ensured that the user interface for MariaDB and MySQL were the same. When you're coding websites from scratch some databases require different lines of code to function. That was my concern, and that's why I decided to experiment with a small scale trial on my own machine.

How to [create a database and tables in MariaDB](https://mariadb.com/kb/en/a-mariadb-primer/)

To learn about the [differences between MariaDB and MySQL](https://www.guru99.com/mariadb-vs-mysql.html).

The plugin I modified for my own use, works on one of my local wordpress installs so I could port it to the website. I still want to experiment with having custom css for those pages without pasting the code as custom html. Custom HTML in WordPress is messy to deal with. I prefer to find a clean solution.