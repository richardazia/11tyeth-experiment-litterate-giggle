---
layout: posts.njk
title: More Experimenting with ClassicPress
description: ""
date: 2023-07-31T08:17:13.103Z
preview: ""
draft: false
tags: [Fediverse, classicpress, experimentation]
categories: []
---

Although I didn't achieve what I set out to achieve I have been experimenting with ClassicPress and the Fediverse, but rather than do it from my main blog I have decided to experiment within a subdomain and so far I have achieved much. I see that activitypub and webfinger can be installed on ClassicPress.

I checked that a webfinger was created and displayed correctly but this took trial and error. The biggest error is that to create a webfinger that is valid you must come from an https hyperlink. If it is not secure you get a "socket not secure error". I found a solution, by creating classicpress.main-vision.com for the sake of testing.

In so doing I achieved two things. The first is that I found a way to experiment with ClassicPress without destroying my website but at the same time I found a way to experiment with other things too. By a similar setup I could get Wordpress and webfingers, where a few accounts are possible, rather than just one.


## The Stumbling Block

I have hit a wall. I created the ClassicPress instance. The webfinger works when I test it and the account is visible on the Fediverse. The problem, at the moment, is that posts do not appear in Fediverse timelines. I don't know why that is yet. I also noticed that if I follow from mastodon instances, I can, but from Firefish I can't. It's not meant to work, so my experimentation is out of curiousity.

## The Next Step

The next step will be to create a subdomain and experiment with a wordpress blog. I expect this to work flawlessly, but what I really want to see, is whether I can get the webfinger to work so that it displays several users for a single instance. If I succeed then I will have demonstrated that Wordpress can be a full-fledged Fediverse instance.
