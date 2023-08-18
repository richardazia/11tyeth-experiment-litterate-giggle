---
layout: posts.njk
title: YQ, FrontMatter and Jekyll
description: ""
date: 2023-07-26T08:15:42.037Z
preview: ""
draft: false
tags: [YQ, FrontMatter, Hugo, yaml]
categories: []
---

For two days I have been trying to understand how to use Jekyll, a Ruby version of Hugo. It is a Static website generator that is similar to Hugo but rather than being written in Go, it is written in Ruby. I find that it renders sites faster than Hugo, but that it has less assistance for creating pages, giving them layouts and the rest. That's why I experimented with [YQ](https://github.com/mikefarah/yq)

> a lightweight and portable command-line YAML, JSON and XML processor. [YQ](https://github.com/mikefarah/yq) uses jq like syntax but works with yaml files as well as json, xml, properties, csv and tsv. It doesn't yet support everything jq does - but it does support the most common operations and functions, and more is being added continuously.

I read about it in [this article](https://roneo.org/en/hugo-edit-yaml-files-from-the-cli-with-yq/). You can install [YQ](https://github.com/mikefarah/yq) with a brew command `brew install yq` or you can install it in a number of other ways, depending on whether you're using MacOS, Linux or Windows.

## The Use case

Exporting a WordPress blog to MD files can be done with a multitude of tools but they don't add all the FrontMatter that you need for a blog, especially Jekyll. I imported the most recent blog posts, that I created for Hugo, with a year-month-date-title.md name to the posts folder but I created a second one for the archive. As the file title was different Jekyll did not like the files. The problem was the file name format, so that's why I created a separate directory. 

## Side Note on Reading the Archives MD Files

[Bard's help](https://g.co/bard/share/995044bd6897): I provide this to help you understand Jekyll logic, as well as Bard help.

## Getting It To Work On MacOS

In the article about using YQ to edit FrontMatter for Hugo pages the first part worked fine, but it's written for Linux rather than macOS so some commands failed. This is where Bard comes in.You can ask Bard to explain what parts of a line of code or a command does and it will explain it to you, and you can eventually transfer the command that is understood by one OS and get it to work with the other. 

I tried this `find -name  "*.md" -exec yq --front-matter="process" '.updated_at = now' {} \;` but it failed to work. [Bard was kind enough to explain the options](https://g.co/bard/share/5ef10215c9d5) for me to figure out which options to use. I added the correct path, and specified that I was looking for the files with the 'type f' flag.

`find ./_posts -type f -name "*.md" -exec yq '.title' {} \; To see the title of .md files`

I wanted to add these two lines to the FrontMatter of the files in the relevant folder. 

I tested `find ../unprocessed "*.md" -exec yq --front-matter="process" '.updated_at = now' {} \;` and this works but does not make changes.

This works and updates the pages to add the updated at field to the metadata with the keyword now. The -i tells it to write to the file. 

The full command is `find ../unprocessed -name "*.md" -exec yq e --front-matter="process" '.updated_at = now' -i {} \; works to add updated now tag`. 

## Implementing the Required Change

The lines that I wanted to add to the front matter were 'layout: post' and 'categories: [archives]'. After the trial and error described above I tried:

> `find ../unprocessed -name "*.md" -exec yq e --front-matter="process" '.updated_at = now' -i {} \;` works to add updated now tag
>`find ../unprocessed -name "*.md" -exec yq e --front-matter="process" '.layout = post' -i {} \;` works to add updated now tag

Finally the command to make a permanent change was:
`find ../_archives -name "*.md" -exec yq e --front-matter="process" '.layout = "post"' -i {} \;`

`find ../_archives -name "*.md" -exec yq e --front-matter="process" '.categories = "[categories]"' -i {} \;`

- A Quick explanation. The ../archives needs to be replaced with the name of the folder your files are in, when terminal i in the same folder. .layout and .categories are the names of the field to add and the "text" part is the content that you want to add to the front matter.
- I have unprocessed and archives folders because I tested the code on two files to start with, and when I saw that it worked, then I moved to the main archives folder. I also used git to have a backup of the latest versions. If something had gone wrong I could have "stashed" the mistake, and been back to normal.

The first line ads the layout information to the FrontMatter post and the second one adds the categories information to the posts. Instead of spending hours doing something manually I was able to find the right tools to do what I wanted within seconds.

## The Process

I knew what I wanted to do. I started with a google search to see if I could find a tool with some instructions and I did. The instructions were useful, but of limited use for my setup so I used the app's documentation to try one thing, establishing that this worked, before moving on to accomplish the task that I had set for myself-. Google Bard was able to provide me with some help, but so did chatGPT.

The value of AI tools, in my eyes, is to help us understand the code we're looking at, but also to help us tweak it for the OS we're using, when we get error messages. I appreciate that with AI we can ask "I'm getting this error message, why?" and it will help find an answer to the question.

If a web article had provided me with a solution that worked I would have stuck to the web page and I would have little to write about. It is because of trial and error, and using four sources to achieve the goal that I wanted to achieve, that it becomes blog worthy.
