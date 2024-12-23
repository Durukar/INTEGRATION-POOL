import { Hono } from 'hono'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import manifest from '__STATIC_CONTENT_MANIFEST'
import {
  getAssetFromKV,
  serveSinglePageApp,
} from '@cloudflare/kv-asset-handler'
const assetManifest = JSON.parse(manifest)

const workerClientRouter = new Hono<HonoContext>()

workerClientRouter.get('/*', async (c) => {
  try {
    // Add logic to decide whether to serve an asset or run your original Worker code
    return await getAssetFromKV(
      {
        request: serveSinglePageApp(c.req.raw, {
          defaultDocument: 'index.html',
        }),
        waitUntil: c.executionCtx.waitUntil.bind(c.executionCtx),
      },
      {
        ASSET_NAMESPACE: c.env.__STATIC_CONTENT,
        ASSET_MANIFEST: assetManifest,
      },
    )
  } catch (e) {
    const pathname = new URL(c.req.url).pathname
    return new Response(`"${pathname}" not found`, {
      status: 404,
      statusText: 'not found',
    })
  }
})

export { workerClientRouter }
