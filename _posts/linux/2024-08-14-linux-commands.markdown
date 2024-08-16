---
layout: post
title:  "Linux Commands"
date:   2024-08-14 15:34:43 -0400
category: "linux"
tags: "basics"
---

# Table of Contents
- [Text Processing](#text-processing)
    - [cat](#cat)
    - [sort](#sort)

### [Text Processing](#text-processing) 
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

#### [cat](#cat)

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

#### [Sort](#sort) 
