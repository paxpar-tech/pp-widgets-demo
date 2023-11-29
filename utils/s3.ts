// inspired by https://github.com/Atinux/atinotes/blob/main/server/utils/kv.ts
// see https://unstorage.unjs.io/drivers/http

import { createStorage, prefixStorage } from 'unstorage'
import type { Storage } from 'unstorage'
import { join } from 'pathe'
import fsDriver from 'unstorage/drivers/fs'
import cloudflareKVBindingDriver from 'unstorage/drivers/cloudflare-kv-binding'

let _kv: Storage

export function useS3 (prefix?: string) {
  const config = useRuntimeConfig().kv

  if (!_kv) {
    if (process.env.KV) {
      // 
      _kv = createStorage({
        driver: cloudflareKVBindingDriver({
          binding: process.env.KV
        })
      })
    } else if (process.dev) {
      const dir = join(process.cwd(), '.data/kv')
      _kv = createStorage({
        driver: fsDriver({ base: dir })
      })
    } else {
      throw createError({
        statusCode: 500,
        message: 'No KV configured for production'
      })
    }
  }
  
  if (prefix) {
    return prefixStorage(_kv, prefix)
  }

  return _kv
}