---
layout: post
title:  "SSH Hardening"
date:   2024-08-16 16:20:43 -0400
category: "cybersecurity"
tags: "ssh"
---

# Table of Contents
- [Overview](#overview)

## Overview 
The `Secure Shell (SSH)` suite is an essential tool for Linux administrators. It allows you to take care of Linux servers from the comfort of your office, or even your own home. The *secure* in `Secure Shell` means that everything you either type or transfer gets encrypted. That eleminates the possibility of someone obtaining sensitive data by sniffing your traffic.

The SSH configuration is quite insecure by default. Here, we will look at:
- Using stronger encryption algorithms
- Passwordless authentication
- How to jail users of the `Secure File Transfer Protocol (SFTP)`
- How to scan SSH servers to find vulnerable configurations
- How to share a remote directory via `Secure Shell Filesystem (SSHFS)`

In total, this article will cover the following topics:
- Creating and managing keys for passwordless logins
- Disabling root user login
- Disabling username/password logins
- Enabling two-factor authentication
- Configuring Secure Shell with strong encryption algorithms
- Setting system-wide encryption policies on RHEL 8/9 and AlmaLinux 8/9
- Configuring more detailed logging
- Configuring access control with whitelists and TCP Wrappers
- Configuring automatic logouts and security banners
- Configuring other miscellaneous security settings
- Setting up different configurations for different users and groups
- Setting up different configurations for different hosts
- Setting up a chroot environment for SFTP users
- Sharing a directory with SSHFS
- Remotely connecting from Windows desktops

## Creating and Managing Keys for Passwordless Logins
The `Secure Shell` is a great tool for networking to remote servers. You can use the `ssh` component to remotely login to a terminal of a remote machine, and you can use either `scp` or `sftp` to securely transfer files. The defaut wsy to use `ssh` is to use the username of a person's normal Linux user account. So, logging into a remote machine from your terminal looks like this: 

```bash
chandler@linux:~$ ssh chandler@192.168.0.5
chandler@192.168.0.5's password:
```

While it’s true that the username and password go across the network in an encrypted format, making it hard for malicious actors to intercept them, it’s still not the most secure way of doing business. The problem is that attackers have access to automated tools that can perform brute-force password attacks against an SSH server. Botnets, such as the Hail Mary Cloud, perform continuous scans across the Internet to find Internet-facing servers with SSH enabled.

If a botnet finds that the servers allow SSH access via a username and password, it will launch a brute-force password attack. Sadly, such attacks have been successful quite a few times, especially when the server operators allow the root user to log in via SSH.

### Creating a User's SSH Key Set
Each user has the ability to create his or her own set of private and public keys. It doesn’t matter whether the user’s client machine is running Linux, macOS, Cygwin on Windows, or Bash Shell for Windows. In all cases, the procedure is exactly the same.

Until recently, 2,048-bit RSA keys were considered strong enough for the forseable future. But now, the most recent guidance from **NIST** says to use either an RSA key of at least 3,072 bits or an **Elliptic Curve Digital Signature Algorithm** key of at least 384 bits. This is to be ready for quantum computing, which will be so poweful that it will render any weaker encryptions obsolete.

To create a 3,072 bit `RSA` key-pair, type the command:

```bash
chandler@linux:~$ cd .ssh 
chandler@linux:~/.ssh$ ssh-keygen
```

You don't have to use any option switches because the command already creates a 3,072-bit `RSA` pair by default. When prompted for the location, you can either hit `ENTER` or I usually name the key for what it is used for (i.e., github).

If you run the below command, you will see the private and public key we generated:
```bash
chandler@linux:~/.ssh$ ls -l 
-rw------- 1 chandler chandler 2655 Aug  16 19:49 id_rsa
-rw-r--r-- 1 chandler chandler  577 Aug  16 19:49 id_rsa.pub
chandler@linux:~/.ssh$ 
```

You will keep the private key on this machine as a secret and transfer the public key to the remote server.

### Transferring the Public Key to the Remote Server

