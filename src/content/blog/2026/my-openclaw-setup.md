---
title: "My OpenClaw Setup"
description: "My OpenClaw setup and why it's never touching my code—and my ideal middle ground between coding tools and autonomous agents."
pubDatetime: 2026-02-19
tags: ["AI", "Homelab", "OpenClaw"]
---

I jumped on OpenClaw as soon as it blew up, running privately in a VM on my unRAID server. My setup is very rudimentary compared to its full capabilities and only has connections to 5 services: Telegram, Slack, Github, Outlook Calendar (Read Only), and Jira.

Currently the sole purpose of the instance is to summarize my daily work and Github activity. Daily at 5 PM, I get a summary of my Jira tickets and Github PRs via Telegram, mainly so I can quickly remember which projects I worked on later in the week. Throughout the week I ask OpenClaw via Slack to add notes; it provides them to me 15 minutes before my end-of-week standup, and then follows up afterward to see if any of the notes need to be turned into Jira tickets.

Admittedly I was very conservative with its usage because I only had it using my $20/m Claude Code usage, which is my main AI tool for daily work. This week I added GPT Plus to my toolkit for Codex's more generous usage and its friendliness with subscription-based usage for 3rd party agents (unlike Anthropic). 

Would I ever use OpenClaw directly for coding? No, but I feel like there's potential for something in between a coding tool and a scheduling/dispatching AI agent. So much so I've forked OpenCode and have been messing around with their web interface. 

My goal is to make a private coding agent intended to be hosted on premises that allows you to pull tickets from Jira or Github and interact with repositories easily through a UI instead of taking up tokens with tool calls. While Codex seems to interact seamlessly with either Atlassian MCP or the CLI, Claude seems to have to call documentation to update tickets frequently. Ideally I want to start a session and be able to quickly select or assign tickets to add to my session context. 

The same idea applies to Git repository management: in my AGENTS.md I have a rule that when it's working on a Jira ticket, it should check out a branch using the ticket id as the branch name. I'd much rather the UI detect if I've selected a Jira ticket (or tickets) for a session and have it programmatically check whether I have a branch for that ticket or if one needs to be created—and ask me before I ever interact with the LLM. To me this functionality gives me much higher confidence that neither a mistake in my prompt nor model differences will cause work to land on the wrong branches.

Introducing [Hawk Code](https://github.com/shawk08033/HawkCode), a fork of OpenCode that I plan to change heavily to fit my development workflow and style.