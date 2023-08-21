---
title: 'Timetrap - A Command Line Time Tracking App'
date: Fri, 23 Oct 2020 09:34:34 +0000
draft: false
tags: ['productivity', 'Python', 'tech related', 'time tracking', 'timetrap']
---

Today I played with [Timetrap](https://github.com/samg/timetrap), a command line time tracking app. It allows you to track the time you spend doing specific tasks with ease. To install the app you can run the command.

```
gem install timetrap
```

To create a timesheet you type:

```
t sheet blogging
```

and it will create/switch to that timesheet. Type this to start the timer.

```
t in
```

And to stop the timer

```
t out
```

t list will show a list of timesheets, t display will show the timed sessions for that document and more.

I was playing with a time tracking app that is integrated to the OS and web browsers but found that when studying courses with videos or other types of content it did not time the entirety of the time I spent on a task.

With this app I can type "t sheet study-german" and then "t in" and it will log the time I spend studying German. When I finish I type "t out". I can then switch to "t sheet blogging" and it will switch to the blogging timesheet. I can then start that timer.

The advantage of using the command line is that it's quick and clean and it provides me with a way of tracking time without spending 70 or more CHF a year for something that can be tracked in a simple manner.

With people currently working from home time tracking apps and features become interesting because it allows for people to show that they spent time on specific tasks, especially in contexts where people are paid per hour, rather than per project or result.

It has CSV and iCal functionality so although the raw information is text you can export the data to present it in a visual manner. You could keep track of how long you spend coding, blogging, studying languages and a multitude of other tasks.

You can integrate the data that is created through this app to SQLlite3. Such flexibility means that this project can be adapted to a number of uses and projects. If you understand python then you can contribute to the project and add the features that you find useful.