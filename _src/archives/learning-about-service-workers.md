---
title: 'Learning About Service Workers'
date: Wed, 02 Mar 2022 09:50:24 +0000
draft: false
tags: ['service workers', 'student life', 'Swiss walks']
---

I am currently learning about [Working With Service Workers](https://www.linkedin.com/learning/vanilla-javascript-service-workers). Service workers allow you to make a website faster, for those who visit a website more often, or offline, in situations where connectivity may be unreliable. Some of the code used can be found on my [github page](https://github.com/richardazia/galivanting-js-practice/tree/main/serviceWorkers). MDN Web Docs also have useful information about [working with service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers).

With service workers you can web first, retrieve from cache and stale while refresh:

1.  With the first option you visit a website and the cache is generated in case the connection is dropped
2.  With the Retrieve from cache it will access the files in the cache, before looking towards the web for content
3.  In the last case the website will load the content it has but will check for new content in the background.

With these three approaches, and with some experimenting you can speed up static websites, and make others available offline if needed.

Aside from helping you to save content locally service workers can also clean up after themselves. If your website is updated or changes you can give a new archive version number and tell it to delete all the others, for your own web page. I have played with static content and will explore more.

I took some time to practice the new skills I learned in this course on my own website, on the local machine. It will take some time to learn the intricacies of how to get this to work correctly. For now I am on a learning curve.

In the process of learning about service workers I also learned about manifest.json and web app manifests. "PWAs can be downloaded in advance and can work offline, as well as use regular [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)."