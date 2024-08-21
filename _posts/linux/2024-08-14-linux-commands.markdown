---
layout: post
title:  "Linux Commands"
date:   2024-08-18 15:34:43 -0400
category: "linux"
tags: "basics"
---

# Table of Contents
- [The Shell](#the-shell)
  - [Terminal Emulators: Your Gateway to the Shell](#terminal-emulators-your-gateway-to-the-shell)
  - [Getting Started with the Terminal](#getting-started-with-the-terminal)
  - [Command History and Cursor Movement](#command-history-and-cursor-movement)
  - [Trying Some Simple Commands](#trying-some-simple-commands)
  - [Virtual Console: A Glimpse Behind the GUI](#virtual-console-a-glimpse-behind-the-gui)
  - [Ending a Terminal Session](#ending-a-terminal-session)
- [Navigation](#navigation)
  - [Understanding the File System Tree](#understanding-the-file-system-tree)
  - [The Current Working Directory](#the-current-working-directory)
  - [Listing the Contents of a Directory](#listing-the-contents-of-a-directory)
  - [Changing the Current Working Directory](#changing-the-current-working-directory)
- [Text Processing](#text-processing)
  - [cat](#cat)
  - [sort](#sort)

## The Shell
When we talk about the command line in Linux, what we're really referring to is the shell. The shell is a powerful program that interprets the commands we type and passes them to the operating system to execute. Most Linux distributions come with a shell called `bash`, which stands for "bourne-again shell," a nod to its origins as an enhanced replacement for the original Unix shell, `sh`, created by Steve Bourne.

### Terminal Emulators: Your Gateway to the Shell
If you're using a graphical user interface (GUI), you'll need a terminal emulator to interact with the shell. Terminal emulators like Konsole in KDE or GNOME Terminal (often just called "Terminal") provide a window where you can type and execute commands. While there are many terminal emulators available, they all serve the same basic purpose—giving you access to the shell. As you explore different options, you might develop a preference based on the features each one offers.

### Getting Started with the Terminal
Once you launch your terminal emulator, you'll se something like this:
```bash
chandler@linux:~$ 
```

This is the shell prompt, and it appears whenever the shell is ready to accept your input. Typically, the prompt includes your username, machine name, the current working directory, and a dollar sign. If you see a hash mark (`#`) instead of a dollar sign, it means you have superuser (root) privileges.

Now, let's try entering some text. Type any random gibberish at the prompt:
```bash
chandler@linux:~$ aosdfjee
```
Since this command doesn't exist, the shell will let you know:
```bash
bash: aosdfjee: command not found
chandler@linux:~$ 
```

### Command History and Cursor Movement
The shell remembers the last 1,000 commands you've entered. You can recall previous commands by pressing the up arrow key. For example:

```bash
chandler@linux:~$ aosdfjee
```

You can also use the left and right arrow keys to move the cursor along the command line, making it easy to edit your commands.

### Trying Some Simple Commands
Now that you're comfortable typing in the terminal, let's try a few basic commands. The `date` command displays the current time and date:
```bash
chandler@linux:~$ date
Fri 16 Aug 2024 05:38:21 PM EDT
```
The cal command shows a calendar of the current month:
```bash
chandler@linux:~$ cal
    August 2024
Su Mo Tu We Th Fr Sa
             1  2  3
 4  5  6  7  8  9 10
11 12 13 14 15 16 17
18 19 20 21 22 23 24
25 26 27 28 29 30 31
```
To check how much free disk space you have, use `df`:
```bash
chandler@linux:~$ df
Filesystem           1K-blocks      Used Available Use% Mounted on
/dev/sda2             15115452   5012392   9949716  34% /
/dev/sda5             59631908  26545424  30008432  47% /home
/dev/sda1               147764     17370    122765  13% /boot
tmpfs                   256856         0    256856   0% /dev/shm
```
And to see how much free memory is available, try the `free` command:
```bash
chandler@linux:~$ free 
         total       used       free     shared    buffers     cached
Mem:    513712     503976       9736          0       5312     122916
-/+ buffers/cache: 375748     137964
Swap:  1052248     104712     947536
```


### Virtual Console: A Glimpse Behind the GUI
Even if you don't have a terminal emulator open, Linux keeps several terminal sessions running in the background, called virtual consoles. You can access these by pressing `CTRL-ALT-F1` through `CTRL-ALT-F6`. Each console presents a login prompt. To switch between them, use `ALT-F1` through `ALT-F6`. To return to your graphical desktop, press `ALT-F7`.

### Ending a Terminal Session
You can end a terminal session by closing the terminal window, entering the `exit` command, or pressing `CTRL-D`.
```bash
chandler@linux:~$ exit
```

## Navigation
`pwd`: Print the name of the current working directory
`cd`: Change directory
`ls`: List directory contents

### Understanding the File System Tree
Linux has what is called a **hierarchical directory structure**. This is similar to how Windows organizes its files as they are organized in a *tree-like pattern* of directories (also called *folders*), which may contain files and other directories. The first directory in the file system is called the *root* directory and is denoted with a `/`. It looks like this:

```bash
/
├── bin/
├── boot/
├── dev/
├── etc/
├── home/
│   ├── user1/
│   └── user2/
├── lib/
├── media/
├── opt/
├── proc/
├── root/
├── sbin/
├── sys/
├── tmp/
├── usr/
└── var/

```

Unlike windows, Unix-like systems such as Linux always have a single file system tree, regardless of the number of attached drives or storage devices.

### The Current Working Directory
The file system can be visualized as an upside-down tree with directories as nodes. Standing in the middle represents being in the current working directory, where you can see files, the path to the parent directory, and any subdirectories. Use the `pwd` (print working directory) command to display your current location.

```bash
chandler@linux:~$ pwd
/home/chandler
```

When you first log in (or start a terminal emulator session), our current working direetory is st to our *home* directory. Each user is given its own home directory, and **it is the only place a regular user is allowed to write files**.

### Listing the Contents of a Directory
To list the files and directories in the current working directory, use the `ls` command.

```bash
chandler@linux:~$ ls
Desktop  Documents  Music  Pictures  Public  Templates  Videos
```
We can use `ls` to list the contents of any direcotry, not just the current working directory, and there are other interesting things it can do. We'll cover that shortly.


### Changing the Current Working Directory
To change your working directory in the file system, use the `cd` command followed by the pathname of the desired directory. You can use absolute or relative pathnames.

#### Absolute Pathnames
- Start from the root directory (`/`) and follow the path to the target directory.
- Example:
```bash
chandler@linux:~$ cd /usr/bin
chandler@linux:~$ pwd
/usr/bin
chandler@linux:~$ ls 
...Listing of many, many files ...
```

#### Relative Pathnames
- Start from the current working directory
- Special notations:
  - `.` (dot): Refers to the current directory.
  - `..` (dot dot): Refers to parent directory
- Example to move from `/usr/bin` to `/usr`:
```bash
chandler@linux:~$ cd ..
chandler@linux:~$ pwd
/usr
```
- Example to move from `/usr` to `/usr/bin`:
```bash
chandler@linux:~$ cd bin
chandler@linux:~$ pwd
/usr/bin
```
- The `./` notation is *optional* and *implied*, so `cd bin` works the same as `cd ./bin`.

## Exploring the System
`ls`: List directory contents
`file`: Determne file type
`less`: View file contents


## Text Processing 
`cat`: Concatenate files and print on the standard output\
`sort`: Sort lines of text files\
`uniq`: Report or omit repeated lines\
`cut`: Remove sections from each line of files\
`paste`: Merge lines of files\
`join`: Join lines of two files on a common field\
`comm`: Compar two sorted files line by line\
`diff`: Compre files line by line\
`patch`: Apply a diff files to an original\
`tr`: Translate or delete characters\
`sed`: Stream editor for filtering and transforming text\
`aspell`: Interactive spellchecker

Many people write documents using plain text formats. While it is easy to see how a small text file could be useful for simple notes, it is also possible to write large documents in text format. One popular approach is to write a large document in text format and them embed a markup language to describe the formatting of the finished document. 

### cat 

The `cat` program has several useful options, many of which help visualize text content more effectively. For example, the `-A` option displays non-printing characters in the text. This is particularly handy when you want to check for control characters embedded in otherwise visible text, such as tab characters and carriage returns.

Let’s create a test file using `cat` as a primitive word processor. We’ll start by entering the `cat` command (with output redirected to a file) and type our text. After finishing the line, we’ll press `ENTER` to properly end it, followed by `CTRL-D` to signal the end of the file. In this example, we’ll enter a leading tab character and add some trailing spaces:

```bash
chandler@linux: ~$ cat > foo.text
    The quick brown fox jumped over the lazy dog.
chandler@linux: ~$
```

Next, we use `cat` with the `-A` option to display the text:

```
chandler@linux: ~$ cat -A foo.txt
^IThe quick brown fox jumped over the lazy dog.     $
chandler@linux: ~$
```

As seen in the results, the tab character in our text is represented by `^I`. This notation indicates `CTRL-I`, which corresponds to a tab character. The `$` at the end of the line marks the true end of the line, highlighting the trailing spaces.

The `cat` program also offers options to modify text. Two of the most prominent are `-n`, which numbers lines, and `-s`, which suppresses multiple blank lines. For example:

```bash
chandler@linux: ~$ cat > foo.txt
The quick brown fox


jumped over the lazy dog.
chandler@linux: ~$ cat -ns foo.txt
     1      The quick brown fox
     2
     3      jumped over the lazy dog.
```
In this example, we create a new version of our `foo.txt` file, containing two lines of text separated by two blank lines. After processing with `cat` using the `-ns` options, the extra blank line is removed, and the remaining lines are numbered.

#### Sort 
