---
title: 'Close to Success - Exporting Instagram images to WordPress Natively'
date: Tue, 02 Jun 2020 21:18:59 +0000
draft: false
tags: ['instagram', 'JSON', 'learning', 'localwp', 'mysql', 'perseverance', 'social media', 'social media living room', 'social networking', 'trial and error', 'wordpress', 'wp-cli', 'xampp']
---

When Instagram was a self-run startup I loved the product. I loved that it was a way of sharing images with friends. I loved that it was fast and that it was light. I also liked that it had it's own community. I liked that it was a way of sharing real life with people we conversed with online.

When Facebook bought Instagram that slowly changed. Algorithms and popularity contests became more important than sharing between friends and so the sense of community was lost and we were posting for strangers rather than friends.

For months, or even a number of seasons now, I have felt that Instagram is just a way of forcing us to see images by people we are not that interested in, with the hope that we will eventually see images that are relevant to us. That time investment we make is devalued when you consider that the Facebook behemoth is making millions from our mindless scrolling.

During the pandemic my patience for social media finally fizzled out and I've been playing with my website. By playing I mean, experimenting, learning, and developing and trying new ideas.

One of those ideas was to export my Instagram account and find a way to flip it over to Wordpress. Why Wordpress, rather than another social network? WordPress is an open-source social network that we control. We control advertising, we control posting frequency, we control layout, and best of all, there is no group of investors holding our... ...I'll leave that to your creative imagination, over the fire.

I tried finding tools to import from JSON to WordPress but in one case I needed to install [wp-cli](https://wp-cli.org/) and that was complicated, and I wasn't confident that it would be tolerated by the web host. I could have asked but instead, I set myself the challenge of installing MySQL on the laptop and running the localhost for experimenting. I failed to connect my localhost WordPress install with MySQL and eventually after two days of trial and error I decided to take a break and try something easier. I tried [XAMPP](https://www.apachefriends.org/index.html) but then I found what looked like a simpler tool, with WP-CLI integrated.

I settled on [LocalWP](https://localwp.com/). With this, I tried the GitHub project I thought would help me import the JSON files but that failed so I looked for another solution and it got me 90 percent of the way to achieving what I wanted to achieve. When I confirm that this process works I will post a How-To guide.