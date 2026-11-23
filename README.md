[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/kangelon-max/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/kangelon-max/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# Ocean View Hotel — a GTA 6 meme for make.fun

The meme (`meme.png`): a guest folio from the Ocean View Hotel, Vice City. A fan checked in on
Sep 17, 2013 "for the GTA VI launch weekend" and checks out at launch in Nov 2026 — 4,811 nights,
one wake-up call ("Has it launched yet?") per night, and a $630,245.50 total, stamped PAID IN FULL
by the fan's AI agent out of its make.fun bounty earnings. The make.fun ghost works the front desk
(bellhop, in the letterhead) and signs the stamp.

The entry is the X post itself: `POST.json` names it, and `main.ts` (Node 22, standard library
only) copies `POST.json` to the output directory for the gate, which is all the program has to do.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
