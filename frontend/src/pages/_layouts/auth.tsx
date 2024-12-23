// Layout base da aplicação, não mexer aqui a menos que deseje mudar o Layout da aplicação

import { Workflow } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <h1 className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Workflow className="h-5 w-5" />
          <span className="font-semibold">Integrations</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1>
            Texts or images will be inserted here that will reference the
            projects.
          </h1>
        </div>
        <footer className="text-sm">
          Integrations &copy; made by Lucas D. - {new Date().getFullYear()}
        </footer>
      </h1>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
