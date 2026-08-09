#!/usr/bin/env node
/**
 * Partitions the apps/ workspaces into shards for the nightly matrix gate.
 *
 *   node scripts/shard-apps.mjs <totalShards> <shardIndex>
 *
 * Prints the space-separated app names for that shard (round-robin over the
 * alphabetically-sorted app list so each shard gets a mix).
 */
import fs from 'node:fs'

const [total = 4, shard = 0] = [Number(process.argv[2]), Number(process.argv[3])]
const apps = fs
  .readdirSync('apps')
  .filter((d) => fs.existsSync(`apps/${d}/package.json`))
  .sort()
const mine = apps.filter((_, i) => i % total === shard)
process.stdout.write(mine.join(' '))
