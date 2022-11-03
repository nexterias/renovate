#!/usr/bin/env zx

import 'zx/globals'

const files = await glob('./*.json', {
  ignore: 'package*.json',
})

await $`npx renovate-config-validator ${files}`
