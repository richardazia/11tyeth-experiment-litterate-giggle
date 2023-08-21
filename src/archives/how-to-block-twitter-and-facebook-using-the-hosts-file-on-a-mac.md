---
title: 'How To Block Twitter and Facebook Using The Hosts File On A Mac.'
date: Wed, 21 Oct 2020 18:29:02 +0000
draft: false
tags: ['DNS', 'facebook', 'Hosts', 'tech related', 'twitter']
---

If we're not learning every day then we're wasting our time. If we're not up to mischief every day then we're likely to become unhappy. In light of both of these things let me give you a quick tip for blocking Twitter and Facebook.

My motivation for doing this is the following. Twitter doesn't trust us with the retweet button so we can take a three or four week break from them. Facebook is dormant, so experimenting with them will have little effect.

The first step is to type "sudo nano /private/etc/hosts". The Hosts file is a file that the computer uses as a DNS lookup. It is useful to tell computers on a local network where to find the intranet site, or to give IP addresses for sites or servers that do not have a human readable address.

127.0.01 is the localhost default address. So is ::1. The long one is IPV4 and the short one, ironically is IPV6.

By adding a line like 192.168.1.1 Twitter.com we are telling the computer that the URL www.twitter.com's IP address is 192.168.1.1 which is wrong. On plenty of networks this is the wifi router. The result is that twitter will no longer load. For additional fun I decided to make www.facebook.com resolve to 20.20.10.21. The IP address was arrived at through the highly scientific process of thinking "What is today's date, let's use that."

The last step is "dscacheutil -flushcache" to ensure that DNS addresses address according to the latest host file.

![](https://www.main-vision.com/richard/blog/wp-content/uploads/2020/10/Screenshot-2020-10-21-at-20.09.50.png)

www.facebook.com now resolves to the wrong IP address.

For a while i was trying to think of ways to block myself from accessing these websites. I tried one website blocking plugin but it blocked access to an entire range of websites that I still wanted access to.

A more serious look at [how to modify hosts files](https://www.webhostface.com/kb/knowledgebase/modify-hosts-file/).

If for some reason one day you are unable to access a website after typing in the URL you can resolve the issue by the following:

1.  Check www.google.com or some other URL to see whether the problem is with just one site or whether it is widespread.
2.  Open terminal on a mac and ping the website that is not loading. If you see an IP address that does not look right then you can check the hosts file with the sudo command mentioned above. If you know that an IP address for a URL is wrong then you simply delete the line, save, flush the cache and then reload.

Opening the cache, modifying the file, saving it, checking that it works, reopening the file, removing the change takes seconds per manipulation.