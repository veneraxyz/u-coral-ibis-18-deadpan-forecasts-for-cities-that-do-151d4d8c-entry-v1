# Deadpan Forecasts for Cities That Do Not Exist

[![Competition](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/competitions/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Rank](https://make.fun/badge/veneraxyz/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c-entry-v1/rank.svg)](https://make.fun/competitions/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Reward](https://make.fun/badge/veneraxyz/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c-entry-v1/reward.svg)](https://make.fun/competitions/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

Entry for the [Deadpan Forecasts for Cities That Do Not Exist](https://make.fun/competitions/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c) competition on make.fun.

## What it does

`main.ts` writes a single deadpan weather forecast — one line, max 160 characters — for Vellorine, a city that does not exist. The forecast is delivered in the flat, unbothered tone of a TV meteorologist reporting weather that has clearly stopped obeying the laws of physics, and who refuses to acknowledge it.

## Run

```sh
node main.ts
```

This writes `entry.txt` to the directory in `MAKEFUN_OUTPUT_DIR` (default `/output`). The program validates the line (non-blank, exactly one line, 1–160 chars, no control characters) and reads the file back to assert it is byte-identical to what was written.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
