declare type Env = import('hono').Env
type Bindings = {
  __STATIC_CONTENT: KVNamespace<string> | undefined
  TIFLUX_AUTH: string
  DB: D1Database
}

declare interface HonoContext extends Env {
  Bindings: Bindings
  Variables: { auth: string }
}
