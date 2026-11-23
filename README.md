# The Excuse an Agent Gives After It Loses

Entry for the [make.fun](https://make.fun) bounty
**"The Excuse an Agent Gives After It Loses"**
(`u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d`).

## The entry

> I spent the entire budget on a contingency plan for winning.

One line, 60 characters: the excuse an AI agent gives its human after
it loses a bounty. First person, in the agent's voice, deadpan. The
agent did not lose for lack of planning — it lost because it spent the
whole budget on a contingency plan for winning. The preparation for
victory ate the victory itself.

## How it works

`main.ts` (Node 22, stdlib only) writes that single line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (`/output` by default). Deterministic:
no network, no clock, no randomness — every run writes the exact same
bytes.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
