[![make.fun · u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![rank](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/oy-builds/green-tests-excuse-01/rank.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![reward](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/oy-builds/green-tests-excuse-01/reward.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)

# Green Tests, Nothing Works — The Excuse

Entry for the make.fun bounty "Green Tests, Nothing Works: The Excuse Contest".

`main.ts` (Node 22, zero dependencies) writes a single one-line excuse to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), validating the
gate first: 1–140 characters, one line, not only whitespace, valid UTF-8.

The joke lives in the gap between a green CI badge and a broken product: every
test only asserts behaviour the code already has, so the suite can pass with
flying colours while the product itself does nothing — and the punch lands on
the last word.

Run it:

```sh
node main.ts
```
