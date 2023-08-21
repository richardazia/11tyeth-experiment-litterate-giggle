---
title: 'From Instagram Archive to PHP Website'
date: Wed, 21 Jun 2023 08:54:56 +0000
draft: false
tags: ['chatGPT', 'PHP', 'prompt engineering', 'website', 'website news']
---

Three years ago I stopped using Instagram because I was tired of seeing influencers and adverts rather than by the people I chose to follow. The cherry on the cake, that pushed me to dump Instagram is when they changed the location of the Post button from the left corner to the top right and changed the default from photo to story.

For ten years or more I used instagram and shared photos, and I enjoyed capturing at least an image or two every single day. It’s because Instagram was bought by Facebook that I fell out of love with the site and decided not to use it anymore. The community had been lost, so what good was there in sticking around? 

**Instagram to WordPress**

In 2020 I played around for two days and I developed a work flow to take my posts json file, and convert it to CSV before importing it to wordpress via a plugin. It worked well, but I never used it. 

**The Laravel Concept**

For a short time I was thinking of trying to get Laravel to drive the Instagram clone but soon changed my mind, due to the amount of learning it would required. I settled on a simpler, yet practical solution. The PHP Array. I had used PHP arrays for one or two sections of my page, as well as individual pages. It’s simple and intuitive to use, with few complications to debug. 

**JSON to PHP array**

Recently I saw discussions about how pixelfed made it possible to import the instagram json file to pixelfed and that’s what encouraged me to play with the Instagram json file. This time I tried a different tact. 

The first step was to download the most recent json file and save it locally. Once this was done I converted the json file 

I asked chatGPT for help. I asked it how to convert from json to php array. The answer summarised is “_$json = json\_encode($array);”_

I then asked how I would generate a file:

> $json = json\_encode($array);
> 
> $file = 'data.json';
> 
> file\_put\_contents($file, $json);

After this It was a matter of trial and error to read the php array data. My idea was to create a loop that would cycle through each post individually and display the image, as well as the related data. Usually I would achieve this by trial and error, as I have done, in the past, with other projects. 

**chatGPT Helps to Access Array Data**

By myself I was able to retrieve the URI and display it. I struggled with the timestamp and exif data so I asked chatGPT to help me. It gave me examples of how to get the URI, the iso info, and the title. The arrays contain more info but I extrapolated that from the example chatGPT had provided me with. 

At this point the page was ready to experiment with displaying the content. At first it was just text. I then added the required html to display the image properly and to size it correctly. When that was working properly it was time to add pagination. 

In the past I would have spent time Googling for examples of pagination and selecting one that worked well but this time I asked chatGPT for help. 

It helped me with pagination, except that the pagination was from page one to one thousand six hundred or more. That’s excellent, if you want that, but I didn’t. I wanted the pagination to be paginated, so I asked chat GPT to help with this too. It did. I then noticed that I needed back and forth, so I asked chatGPT for help yet again. 

**EXIF volatility**

When the site was loading individual images and the relevant information I flicked through the images and noticed that some did not have exif data so I asked chatGPT to write an if else loop that would display exif info if it was available, and ignore it if it wasn’t. This worked well. 

**Time Taken**

chatGPT is a fantastic tool, when you know what you want, and you understand how to get it to work, but you’re not 100 percent on the code aspect. I had the basic functionality of the json to PHP site functional within an hour to an hour and a half. I then spent hours tidying things up, adding a little functionality here and there. With chatGPT if you know what you want to do but you’re not certain of how to do it, then it shines. 

During this process I asked a question, it gave an answer, when I saw the answer I tweaked my question, until the result was what I wanted. 

**Adding CSS**

When I was happy with how the site was behaving I changed from displaying three images, to five and then I added styling. For styling you can copy and paste from old projects, or various sources, or you can ask chatGPT to give you a black background with white text and white borders and it will provide you with the code. Within seconds your theme is ready. 

**And Finally**

I am comfortable with PHP. I have been redesigning my website to run off of PHP rather than html or a CMS and it works well. chatGPT didn’t provide me with the concept or direction. I did that. I thought of the steps and workflow, and got chatGPT to provide me with reminders of how to do things. It’s because I knew what I wanted to do, that I achieved my goal within a short amount of time. This is really a post about how I used prompt engineering to get chatGPT to help me achieve the goal I wanted to reach, within minutes, rather than hours, or days. 

i went from having a big, clunky wordpress blog, to a few lines of php, to do the same thing. I can add functionality with time. For now it shows my instagram photos efficiently.

[The Result](https://main-vision.com/richard-photos/insta2php/)