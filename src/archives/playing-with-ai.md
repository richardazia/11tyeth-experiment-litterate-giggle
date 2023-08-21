---
title: "Playing With AI"
tags: [chatGPT, AI, learning, PHP, kiss]
date: 2023-06-27T16:58:06+02:00
draft: false
---

# Playing with AI and Learning to Keep It Simple, Silly
Yesterday I was playing with AI in the evening and I asked it to help me write a function that would detect whether an array item was a photo or a video. I told the AI, this is a photo array item, and this is a video array item. I want the photo array item to display the img src code and for the video item to be displayed with video src code. At first it failed to detect anything and gave me an error message. I decided to highlight the photo array item snippet and the video array snippet. 
It didn’t come back with an error but it did not display any img or video code. In the end I decided to say “here’s the img src tag. I want you to detect whether the file is mp4 or jpg. If it’s mp4 add the video player, and if it’s a photo load the image. I went from asking it to read the array to determine what to do, to “check the filetype and load the appropriate src type. That worked, and required very little code. 
Don’t Over-Engineer With AI
The moral I came away with, after the trial and error I went through last night is that whilst AI is great at reading and understanding code, and giving us answers it can sometimes fail. I was making something far more complicated than it had to be and chatGPT got confused, as would a human trying to complicate something simple. 
PHP has a lot of functionality built into it. It has tools that allow it to read exif information, file types and more, and if you know about these tools, then you can come up with elegant solutions, rather than complicated ones. 
## The Winning prompt: 
I want to check whether a file is .jpg or .mp4. I want the default to be this: echo ' <img src="' . $imageUri . '" width="800" height="800" alt="' . $title . '"> '; It the loop detects that the file is .mp4 I would like the video player to be loaded instead.
## The Code

if (isset($article['media'][0]['uri'])) {
$fileUri = $article['media'][0]['uri'];
$fileExtension = pathinfo($fileUri, PATHINFO_EXTENSION);
if ($fileExtension === 'mp4') {
    echo '<video src="' . $fileUri . '" width="800" height="800" controls>';
    echo 'Your browser does not support the video tag.';
    echo '</video>';
} else {
    echo '<img src="' . $fileUri . '" width="800" height="800" alt="' . $title . '">';
}
}

It gives a summary of what it did: 
In this code, we use the [pathinfo()](https://www.php.net/manual/en/function.pathinfo.php) function to extract the file extension from the $fileUri. If the file extension is .mp4, we generate the video tag with the src attribute pointing to the video file, and if it's not .mp4, we generate the img tag with the src attribute pointing to the image file.

## But Wait, There’s More
I then asked chatGPT “Would it be better to determine a file type by reading the array type from a php array, or checking the file directly with php info?
The answer it gave was “In this code, we use mime_content_type() function to retrieve the MIME type of the file. We then check if the MIME type starts with image/ or video/ to determine if it's an image or a video. This approach provides a more reliable way to determine the file type based on its content.” after providing an alternative code for me to use instead.  
## Iterating
I was reading an article about AI and how Stack Overflow didn’t want to use AI for answers because it provided them with a lot more work but I think that AI is interesting because it allows you to experiment with different approaches. In fact you can ask chatGPT a simple question. Is Solution A or Solution B if I want to do C12, and it will come back with an answer, and then you can ask about how to write the code. In my eyes the strength of chatGPT is that it allows you to experiment and cycle through options much faster than if you were reading dozens of articles and solutions to find one that would work. the more I play/experiment, the more I learn, and the more I learn, the faster I can engineer prompts that will get the code I require. I like consolidating what I have learned, with chatGPT as a pair programmer. 

