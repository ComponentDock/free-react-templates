import { useEffect, useState } from 'react'
import { Badge, Button, Card } from '@free-react-templates/ui'

const templates = [
  { name: 'SaaS Landing', category: 'Landing', framework: 'Vite + React', tier: 'free' },
  { name: 'Portfolio Pro', category: 'Portfolio', framework: 'Vite + React', tier: 'premium' },
  { name: 'Business Plus', category: 'Business', framework: 'Vite + React', tier: 'free' },
] as const

export function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <span className="text-lg font-bold tracking-tight">Free React Templates</span>
          <Button variant="outline" size="sm" onClick={() => setDark((d) => !d)}>
            {dark ? 'Light mode' : 'Dark mode'}
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12">
        <section className="text-center">
          <Badge variant="success">Monorepo · Vite · React · Tailwind · TypeScript</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Free, production-ready
            <span className="text-primary-600 dark:text-primary-400"> React templates</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Copy a template, run it, and ship. Shared UI lives in packages/ui — components are never
            duplicated across templates.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button>Browse templates</Button>
            <Button variant="outline">GitHub</Button>
          </div>
        </section>

        <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <Card key={t.name} className="flex flex-col">
              <Card.Header className="flex items-center justify-between">
                <span className="font-semibold">{t.name}</span>
                <Badge variant={t.tier === 'premium' ? 'warning' : 'default'}>
                  {t.tier === 'premium' ? 'Premium' : 'Free'}
                </Badge>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t.category}</p>
              </Card.Content>
              <Card.Footer className="mt-auto">
                <Button variant="outline" size="sm" className="w-full">
                  View template
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}
