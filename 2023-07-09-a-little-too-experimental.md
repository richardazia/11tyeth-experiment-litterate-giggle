---
layout: posts.njk
title: A Little Too Experimental
description: "The fediverse is great because people love to experiment but in the process they release things that are not ready"
date: 2023-07-09T13:01:19.289Z
preview: "The fediverse is great because people love to experiment but in the process they release things that are not ready"
draft: false
tags: [social media, fediverse, experimentation, learning, development]
categories: []
---

The Fediverse is great because people are experimenting and trying new idea. It's also great because we can be there through every step of the process. This is also why things could be better.
I am now writing my blog in Hugo first, and then moving the content over to Wordpress at the moment. I could just replace my Wordpress blog with Hugo but I don't for two reasons. The first reason is that I'm experimenting, and if I change my mind about something, I can, without affecting Quality of Service. The second reason is that I believe that the production server should be in fine working order with as little downtime for users as possible. With one or two projects on the fediverse this isn't the case. Downtime can be for hours, or even days at a time. 

## A Reminder of Seesmic and Twitter

For a long time Twitter was suffering because it was using Ruby and Ruby had bottle necks. The result was a lot of downtime. The failwhale became a cultural icon as a result. Seesmic was a fantastic video sharing community. It was about video instant messaging. Watch a video, record an answer, watch other answers, record another video. It would go for a thousand video exchanges for some topics. It was great. At the end of the day we even had Seesmix videos to summarise the best moments. In this case as new features were added we would make sure that they worked well. In the end I think Seesmic was sold or abandonned. It marked a turning point in online communities.

## Production Server Level Testing

For a while I have been reading and studying web development and one of the key things I read is that you should have a testing environment that is exactly like your production environment, to make sure that everything works well, in testing before pushing to production. With The Fediverse I see people testing in production whilst looking for more people to join. It is normal to want to move fast, but if a site goes down for several days then there are wekanesses in the workflow.If I was playing and experimenting with a fediverse instance I would make sure that I run tests locally, and when I see they're stable, migrate across. If things broke then I would revert to another instance as quickly as possible.

## Playing With WordPress

Sometimes I play with WordPress, as I try to learn new things. I could experiment directly on my blog, and sometimes I do, but I try not to do this too often. I setup a mamp instance instead, and that's where I break things, and try to rebuild them. That's where I can break things, experiment, learn, mess up, give up, and more. The production server can go down for a few minutes here and there, as I experiment, but not for hours at a time. My blog has gone down for extended periods of time (a day or two, due to vulnerabilities on my site being exploited)

## The Social Web, Conversations and Exchanges

Social networks should have as little downtime as possible because if they go down then the community that relies on them to stay in touch finds itself tempoarily out of reach. If a social network goes down too regularly when people want to use it, then it makes sense to migrate instances. Finding people willing to use a site is one challenge. The second, bigger challenge is to keep them around. If you experiment on a production server then you are disconnecting the community for the time of that experiment. That's why you have A/B testing, but also why you have two or more instances. If you make a mistake on one instance to switch to the secondary system, fix the primary, and then switch, and fix the secondary. 

## And Finally

I wanted to experiment with [FrontMatter](https://frontmatter.codes/docs) yesterday when playing with my website but found that it has one serious limitation. It requires pages to be markdown, not HTML to work. It is a Visual Studio Code plugin that helps use VS Code as a cms for MD pages for Hugo and other blogging sites. The beauty of this app is that you can see all your tags at a glance. You can sort your pages any way you like. You can create new pages and it will add the appropriate information. What I especially like is that the file name is year-date-day-title and that's fantastic, for me. I work as a media asset manager and that's what I wanted to do with my blog, but I didn't know whether it would then require me to rename every page. With this plugin you choose the website section, the title, and it does the rest. It's fast and effective, once the DB is populated. The data is kept in a json file.

I will write a more comprehensive blog post about this when I learn more.
