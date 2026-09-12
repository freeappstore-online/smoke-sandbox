import { initApp } from '@freeappstore/sdk'
import { Shell, BuildInfo } from '@freeappstore/sdk/ui'

const fas = initApp({ appId: 'smoke-sandbox' })

export default function App() {
  return (
    <Shell app={fas} appName="smoke-sandbox">
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="display-font text-3xl font-bold text-[var(--ink)]">smoke-sandbox</h1>
          <p className="mt-3 text-[var(--muted)]">Platform monitoring sandbox for the FreeAppStore production smoke test. Not a real app.</p>
          <p className="mt-6 text-sm text-[var(--muted)]">Built for <a className="underline" href="https://freeappstore.online">freeappstore.online</a></p>
        </div>
      </div>
      <BuildInfo />
    </Shell>
  )
}
