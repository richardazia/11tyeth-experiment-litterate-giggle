---
title: 'Experiments With Time Machine'
date: Mon, 16 Nov 2020 21:02:01 +0000
draft: false
tags: ['backup', 'MacOS', 'SuperDuper', 'tech related', 'Time Machine']
---

Recently I was using a one terabyte drive to backup a half terabyte drive and it would take four and a half hours to backup and I think I may have figured out why the software was taking so long. It's because it was never designed to be used as I am using it.

Time Machine is designed to work with a hard drive that is smaller or as big as the system it's backing up. When you get a one terabyte disk to backup a half terabyte hard drive it has the opportunity to save many more files than are on the system and this is fine initially but over time the number of files that it has to check gets larger and larger until finally it takes hours, rather than minutes to backup.

We need a new feature in Time Machine so that it becomes archival software, rather than backup and version software. It should keep at least two log files. The first log file should be of all the changes on an hourly, weekly and monthly basis on both the system drive and the backup drive.

The purpose of these log files would be to be a quick place for Time Machine or other backup software to see what has changed between the most recent backup and the current file situation.

It should check what files have been changed since the last backup and sync those, but not bother with older files unless the directory says that something has been deleted. This feature could be added to spotlight as it is already indexing all the files.

The purpose would be to check one or two master log files, synchronise and then complete the task within minutes, whether the backup software has been run minutes or weeks ago.

For now I think that time machine checks every single file on the system, and then every file of every backup for however many months you have been backing up. In theory this comes to millions of files, so millions of checks.

The data that Time Machine had to backup was regularly ten or twenty gigabytes but it was taking four hours per backup, which is far too long, for something that is meant to take minutes. It would take that long on a daily basis.

In related news my 2007 licence for Superduper is still valid today, so I can use that to backup, now that my experimentation is coming to a close. With Superduper it keeps a current clone of the system disk so that if and when a drive fails you can switch to the backup drive within 30 seconds of a drive failure.

Now that I know what the issue is, I can act accordingly.