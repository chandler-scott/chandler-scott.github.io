---
layout: post
title:  "Linux Commands"
date:   2024-08-14 15:34:43 -0400
category: "linux basics"
---

### Text Processing 

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

#### cat
The `cat` program has a number of interesting options. Many of them aeused to help better visualize text content. One example is the `-A` option, which is used to display non-printing characters in the text. Sometimes, we want to know whether control characters are embedded in our otherwise visible text. The most common of these are tab characters and carriage returns.

Let's create a test file using `cat` as a primitive word processor. To do this, we'll enter the `cat` command (along with specifying a file for redirected output) and type our text, followed by `ENTER` to properly end the line and then `CTRL-D` to indicate to `cat` that we have reached end of file. IN this example. we enter a leading tab character and follow the line with some trailing spaces:

```bash
chandler@linux:~$ cat > foo.text
    The quick brown fox jumped over the lazy dog.
chandler@linux:~$
```

Next, we use `cat` with the `-A` option to display the text:

```
chandler@linux:~$ cat -A foo.txt
^IThe quick brown fox jumped over the lazy dog.     $
chandler@linux:~$
```

As you can see in the results, the tab character in our text is represented by `^I`. This is a common notation that means `CTRL-I`, which is the same as a tab character. We also see the `$` at the true end of the line, indicating the trailing spaces.

`cat` also has options that are used to modify text. The two most prominent are `-n`, which numbers lines, and `-s` which supresses the output of multiple blank lines. For example,

```bash
chandler@linux:~$ cat > foo.txt
The quick brown fox


jumped over the lazy dog.
chandler@linux:~$ cat -ns foo.txt
     1      The quick brown fox
     2
     3      jumped over the lazy dog.
```

Here, we create a new version of our foo.txt file, which contains two lines of text separated by two blank lines. After processing by `cat` and the `-ns` options, the extra blank line is removed and the remaining liens are numbered.

#### Sort
