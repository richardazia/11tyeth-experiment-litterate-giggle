---
title: 'The Fun and Games of Attempting to Migrate Instagram Data continue'
date: Fri, 05 Jun 2020 13:15:56 +0000
draft: false
tags: ['CVS', 'instagram', 'PHPmyAdmin', 'social media', 'wordpress', 'XML']
---

The Fun and games of attempting to migrate Instagram data continue. I have now spent several days on the task. I have my Instagram posts currently sitting on a local blog. The challenge has been to migrate it from my local WordPress installation to the main website.

After dozens of failed attempts the SQL database, seperate from this blog's database was getting filled with lines of data. I was up to over 31,000 pieces of data or more. I didn't check the term a plugin uses.

From my experience of playing with JSON files they are dealt with differently by each app you use to convert them, so what works in one instance, fails in another. This is true of JSON to XML and JSON to CVS conversion.

I went to PHPMyAdmin and purged two tables and now I'm back to having a blank slate. I cleared both the media and the post tables. I also emptied the uploads folder. I feel optimistic that my next attempt will be successful.