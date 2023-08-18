---
layout: posts.njk
title: ClassicPress and the Fediverse part deux
description: ""
date: 2023-08-01T08:42:56.976Z
preview: ""
draft: false
tags: [experimenting, fediverse, nightlybuild, ClassicPress 2, mastodon, firefish]
categories: []
---

After my first post about playing with ClassicPress and the Fediverse it was suggested that I try the [nightly](https://www.classicpress.net/help-test-classicpress-v2/) build of [ClassicPress](https://classicpress.main-vision.com/) so I did. The result can be seen [here](https://mastodon.social/@classic-admin@classicpress.main-vision.com).

## Mastodon and Firefish

I have tested integration with the fediverse via Mastodon.social but also [firefish.social](https://firefish.social/) and [mastodon.social](https://mastodon.social/) is faster, but [mastodon.social](https://mastodon.social/) eventually catches up. I tried posting a blog post, and commenting on blog posts and it works although not instantly. You need to wait for the changes to be propagated to where they are needed.

## A change in tact

Initially I was going to try using a different domain but I struggled with getting the SSL certificates to work so I decided to create the subdomain ClassicPress.main-vision.com for ClassicPress tests and blog.main-vision.com for WordPress. In the case of ClassicPress I wanted to be able to play around, without making too much noise with my daily blog.

With the WordPress blog I wanted to test whether the webfinger json file for individual users would work, and it does, at least partially. When I looked up the usernames on [webfinger](https://webfinger.net/lookup/) it did show the users, but mastodon and Firefish do not detect them.

## ClassicPress and WordPress Are Viable Options

I spent most of yesterday playing around with the two, and seeing if ideas worked, and so far the answer is "yes, if you're patient" but that's because the idea is still relatively new so progress has to be made. WordPress does work well, and ClassicPress is close behind. If you write a post, and check for comments the next day, then it works fine.

## Sub-Domains count
The other question was whether it had to be example.com or whether subdomain.example.com would work and the answer is that subdomains work. If your blog instance is two or three subdirectories deep, then subdomains are a good alternative to manually generating webfinger files.
