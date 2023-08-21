---
title: "Using WordPress as a Fediverse Instance"
tags: [fediverse, webfinger, json, wordpress]
date: 2023-07-06T10:07:43+02:00
draft: false
---

Over a period of a few days I have turned my WordPress blog into a fediverse instance. The process took some trial and error. In the end it was quit easy and there are three steps. 

## Step One: Have a WordPress Instance

The first step is to have a WordPress blog/CMS. You can start with an existing website, that you are willing to have on the fediverse, or you can install the WordPress CMS in another director and use that as a dedicated Fediverse CMS. 

## Step Two

Go the the plugins tab and add the activityPub plugin. Once this is done your blog will work as a fediverse instance. When someone subscribes to your instance via Calckey they will be able to read entire blog posts within Calckey, as if the blog was written natively. They can also comment but this is one way. You will need to check for comments and replies manually.

## Step Three

The third step is to install the webfinger plugin for wordpress. This was the most complicated challenge for me, because webfinger expects to find the .well-known directory in the root of the website rather than the directory where the blog may actually be. 
If your blog is in the root then you're fine, your WordPress blog is now a Fediverse instance.
If you're like me, and webfinger points to the wrong place then I have a simple solution.
Go to the [webfinger lookup](https://webfinger.net/lookup/) url and type your username. It will show you a get https line with where it expects to find your json file. Copy this into the URL bar but type the correct path. You will know you wrote it correctly when you get some JSON data. Copy this data and paste it into a file called webfinger.json.
Create a .well-known directory in the web rooot folder of your site. Add the webfinger.json file to this directory. Go back to the webfinger lookup page and check that your username@domain works correctly. If it returns the right json you're in. Your blog is now a Fediverse instance

## The Complicated Alternative

The advice I give for step three is the advice I would have liked to receive. People suggested that I change the htaccess file, which I tried to do, but without success. If you do attempt to change the htaccess file keep an unmodified backup in case you break something. I wouldn't recommend experimenting with the htaccess file. The webfinger.json solution is simple and intuitive. 

## Why Does This Matter

The [pre-requisites](https://docs.joinmastodon.org/admin/install/#pre-requisites) for installing Mastodon instances require permissions that we might not have on the host we are currently using. This limits what we are able to do. By having WordPress and the ActivityPub plugin and Webfinger we are able to bypass several barriers and get a fediverse instance running within minutes and in theory anyone can do it. Anyone that is familiar with WordPress.

## And Finally

On Mastodon blog posts are shown as links to articles. People still have to visit the blog. If and when people comment on the mastodon toot those comments are added to the blog post comments, and vice versa.
With Calckey the blog posts that you write in WordPress display natively in Calckey. It does remove formatting however, so that's something to work on. People that comment on the calckey post will be visible in the blog posts and vice versa. It's native integration. It works well.
Now, when we write blog posts, people can see them directly in the fediverse, without having to browse away, especially with Calckey integration. In theory your blog post is not a blog post. It's a note. This seamless integration should bring new life into blog posts. What I find especially amusing is that my blog already has 2100+ posts, in theory. In practice it has many more. People do not see legacy posts. They only see posts from the moment they start following on Mastodon or Calckey.
