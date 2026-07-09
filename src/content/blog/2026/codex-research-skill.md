---
title: "Codex Does the Searching: A Claude Code Research Skill"
description: "A Claude Code skill that offloads live web research to Codex (GPT-5.5) while Claude orchestrates decomposition, verification, and synthesis."
pubDatetime: 2026-07-09
draft: true
tags: ["AI", "Claude", "Codex", "development", "open source"]
---

My motivation for building this skill was Claude Code's built-in deep research plugin. It burned through my 5-hour usage limit and ignored my usage credit limit, leaving my credit balance at -$13.82.

I'd already been exploring Claude orchestrating Codex — sparked by [Theo's video on Fable 5](https://www.youtube.com/watch?v=8GRmLR__OGQ), where he walks through using a stronger model to dispatch cheaper subagents instead of burning premium tokens on everything. After deep research torched my balance, I turned that pattern into a skill.

So I built [claude-codex-research-skill](https://github.com/shawk08033/claude-codex-research-skill) — a Claude Code skill where **Claude orchestrates and Codex searches**. Claude decomposes the question, fans out parallel research agents, cross-checks the results, and writes the final report. The actual live web search runs through the Codex CLI (`codex exec -m gpt-5.5` with web search enabled). Claude never searches the web itself.

## How it works

There are two modes, both sharing the same engine and one adversarial verification round:

| Mode | Who orchestrates | Best for |
|---|---|---|
| **Multi-agent** | Claude (Opus) decomposes, dispatches Sonnet subagents, verifies, synthesizes | Nuanced or high-stakes questions where you want Claude's judgement in the loop |
| **One-shot** | Codex decomposes and synthesizes; bash fans out parallel jobs | One command, cited report, no babysitting |

The engine is a shell script — `codex-research.sh` — that runs a single Codex task with live web search, read-only, outside any git repo. Every claim comes back with a source URL. A separate skeptic script (`codex-verify.sh`) is prompted to **refute** low-confidence claims, not confirm them. If two research agents disagree, the orchestrator sends a skeptic after the disputed claim and treats `refuted` or `unclear` verdicts as uncertain in the final report.

In multi-agent mode, the role split is deliberate:

- **Orchestrator (Opus, high effort):** decomposes the question, dispatches, verifies, synthesizes. Does no web searching.
- **Research agents (Sonnet, low effort):** cheap wrappers that shell out to `codex-research.sh` and return cited JSON. They relay; they don't reason.

That keeps Codex usage focused on what it's good at (searching and citing) while Claude handles the parts that benefit from stronger reasoning.

## What I learned building it

A few things cost real failed runs before the pipeline was reliable:

- **`codex exec --search` doesn't work.** For non-interactive runs, web search is enabled with `-c tools.web_search=true`. Without it, Codex answers from stale training data and your "research" is fiction.
- **Pipe stdin to `/dev/null`.** If stdin is a pipe, `codex exec` appends spurious input to your prompt.
- **The skeptic prompt matters.** Prompting verification agents to confirm findings gives you confirmation bias. Prompting them to refute catches real contradictions — during testing, it correctly refuted a false Node.js version claim and confirmed a true React 19 release date.

The repo is MIT-licensed and meant to be forked. If you've had a similar run-in with built-in deep research, it might be worth a look.

Repo: [github.com/shawk08033/claude-codex-research-skill](https://github.com/shawk08033/claude-codex-research-skill)
