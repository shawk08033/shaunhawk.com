---
title: "Claude $20 vs $100 5X plan"
description: "TBD"
pubDatetime: 2025-03-04
draft: false
tags: ["AI", "development", "coding"]
---

After only using Cursor as my sole AI coding tool for what feels like the past two years, I finally signed up for Claude Code's $20 plan. Within a week I was making major changes at my main focus for my full-time job—[Huckleberry Service](https://huckleberryservices.com/)—but I kept hitting my limits quickly. So I added Codex's $20 plan, mindful that I'm now paying $40+ a month for AI coding tools used for my employment. Codex's limits seemed much more generous than Claude's for its $20 plan.

Last week it came up that my company needed to redo our two marketing websites—both WordPress, both with unmaintained premium bloat plugins for design. WordPress is outdated technology that is horrible to maintain and keep secure. That led me to convince my coworkers that I needed Claude 5X, because I wanted to use a modern TypeScript framework and eliminate the need for the full VPS servers we had to use for the specific plugin we had at the time.

To my amazement, the 5X plan went way further than I anticipated. Not only was I able to scrape both of our current WordPress sites, have it download image assets, and create two mockups each with Next.js on Vercel—I've also been able to make significant progress with Huckleberry.

With 24 hours remaining for my weekly limit, I've only hit 30% of my weekly usage. That's insane.

Without going into too much detail, here's what I got done for that 30%:

- Created four mockup instances for modernizing two WordPress sites, with deployment to Vercel
- Ran four brainstorming sessions that started with a Jira epic and included creating stories and subtasks on the epics
- Implemented two of those epics, including extensive changes to a page using amCharts 5 to display time series data
- Produced documentation to install an MQTT driver on a building controls system (BMS) that has very limited public documentation
- Added many smoke tests for technical debt that was lacking tests

This might not seem like much, but it's definitely the most productive week in my career. AI is not taking over anytime soon, though. I'm not disappointed but puzzled by the issues I had versus the success I had with what I thought would be very difficult.

**The struggle—** I spent several hours trying to get amCharts 5 to display multiple panel charts with a shared tooltip. It took several hours despite having Context7 MCP working, where Claude appeared to have access to amCharts documentation. The ultimate fix was to provide a tutorial from amCharts and many screenshots to get both charts aligned with a single x-axis.

**The happy surprise—** At my company we have many technicians who work on BMS systems; it's an industry set in its ways where security and open source take a back seat. Somehow Claude was able to walk me through installing and connecting an MQTT driver to AWS IoT, and give me instructions to map BACnet points (equipment data points) to MQTT publish points—something I found little to no documentation for from the hardware manufacturer.
