---
title: 'My AI Teacher'
date: Sat, 24 Jun 2023 08:53:40 +0000
draft: false
tags: ['AI', 'chatGPT', 'learning', 'prompt engineering', 'teacher', 'tech related']
---

Today I want to discuss something different. I want to discuss using AI as a teacher, rather than as a tool to replace us. For a few days I have been playing with the Instagram json file that I got when I requested my archive. With this json file I thought about things to do, and in so doing asked chatGPT for help, and it provided answers.

**Adapting the Questions**

When you ask chatGPT to do something it will do what you asked. If you see that you got a partial answer then you can tell chatGPT more specifically what to do. In some cases I would ask it to do something, but I didn't tell it that the data was in an external file, so I told it the name of the external file and it was added.

**You Still Need to Think And Understand**

Although ChatGPT is a great tool you need to learn to debug. Sometimes if you get an error message you can ask chatGPT how to resolve it, but in other cases, chatGPT will not realise what the error is.

**The Zero Width Asset**

[![A heatmap of photos taken per day from the Instagram JSON data for my account ](https://www.main-vision.com/richard/blog/wp-content/uploads/2023/06/Screenshot-2023-06-24-at-10.53.56-1024x439.png)](https://www.main-vision.com/richard/blog/wp-content/uploads/2023/06/Screenshot-2023-06-24-at-10.53.56.png)

Yesterday I was trying to generate a heat map of when I took photographs with ChatGPT via the instagram json file but it did not detect that the height for an element had been set to zero. It's by experimenting that I found this error and fixed it. ChatGPT gave me a useful answer, but only resolved part of what I was trying to achieve. I had to do the rest.

**Testing and Double Checking**

In one case I told chatGPT that I wanted to make something available in the head element. It helped me to do that but then removed some functionality from another part of the page. I had to tell it "put that functionality back", not in those words, and it did. Double check everything.

**Trial And Error**

Coding, and finding solutions, with chatGPT is about having an idea, and seeing if, and how, to get chatGPT to understand the request that you're making. I find that I often have to ask a question several times, and in different ways, before I get to an answer that is useful for me. The more you play with chatGPT the more you learn about its quirks and how to avoid them.

**Context Aware**

One feature that I find especially useful with chatGPT is that it is context aware. With Google you can ask how to do something, but usually you can't go into the specifics because it is not as context aware. The best example I can think of is the array. With an array you have layers within layers and it can be confusing to see whether something is one or three layers down, and how precisely to get to that data. With chatGPT you can say "here's one array item, I want to retrieve x from that array, how do I do it, and it does. It gives you the request you need to access that bit of information from the array.

**Practical Example**

The Instagram Archive JSON is thousands of elements, but they all have the same structure, as long as they have the same data. The first step is to create the foreach loop to cycle through the data. Getting the first bit of info, with the instagram json file was easy, but deciphering the exif element wasn't, so I asked chatGPT for help within this specific context, and it worked fine. I could then copy and paste for the exif that I had not asked it to help me with.

**Converting Time Stamps from Epoch to Human Readable Dates and Times**

There are plenty of places where you can find where to convert from epoch to machine readable time. chatGPT can also provide you with a context relevant solution, rather than a generic one.

**Learning by Repetition**

People may say "but you're not learning, you're just playing with chatGPT in the hope that it will give the right answer, to which I answer that we all learn in different ways. People that studied computer science and understand all of the theory might be able to read the fabulous manual, and understand everything, but for those of us that are learning bits and pieces, in an informal context, chatGPT allows us to ask "how do I do this in that context?"

We are learning three skills in processes such as mine. The first is to think about how to write functions for an app. The second is being able to communicate this desire to an AI. The skill has a name: Prompt engineering. It wouldn't have a name if it wasn't an important aspect of working with AI. The final skill we are learning is how to assemble code to make it work as we want it to work.

ChatGPT doesn't just give us a few lines of code. It provides us with relevant contextual information to help us understand what is happening.

In short chatGPT can be used as a tutor, or course program, to teach us how to write better code, when others may not be around, or have the time to help us.

**Udemy Courses**

At least two of the "teachers I followed on Udemy, to learn about JavaScript and other technology have now made courses teaching people how to use AI to help them with their workflows. Rather than watch how others are using chatGPT I am playing and learning, with projects I think up. It's fun. I should call it experimenting, rather than playing, but in the end I am playing.

Does this make sense to chatGPT?

Does that make sense to chatGPT?

Would chatGPT understand what I mean if I asked this?

**ChatGPT and Debugging**

I find it really interesting that chatGPT can be used for debugging. It tells you, do this using that library, assuming that the library is installed, but if it isn't then you need to install it, but that's not the end. You need to see which version chatGPT meant for you to implement. I got error messages and asked chatGPT for help, tried one version, got another error message. I then shared the new error message and chatGPT said "Oh, if you're using this version then you're meant to use this code, rather than that code." I didn't change the code. I swapped versions and the app worked.

**Conclusion**

The more time you invest in prompt engineering, with a specific goal in mind, the more you will learn, and the more you learn, the more useful chatGPT becomes. It goes from being an interesting curiousity to being an interesting tool.