import { cn } from '@free-react-templates/ui'
import { Atom, Droplets, Flame, GitBranch, Globe, Server, Monitor, Palette } from 'lucide-react'

export interface ClientsProps {
  className?: string
}

const CLIENTS = [
  { name: 'Atom', icon: Atom },
  { name: 'Dropbox', icon: Droplets },
  { name: 'Firefox', icon: Flame },
  { name: 'GitHub', icon: GitBranch },
  { name: 'Mozilla', icon: Globe },
  { name: 'Linux', icon: Server },
  { name: 'Ubuntu', icon: Monitor },
  { name: 'Sass', icon: Palette },
] as const

export function Clients({ className }: ClientsProps) {
  return (
    <section id="clients" className={cn('bg-dark py-24', className)}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-primary-400">
            <span className="mr-2 text-accent-400">04</span>
            Selected Clients
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl">
            Here are some of the brands we have had the privilege to work with.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {CLIENTS.map((client) => {
            const Icon = client.icon
            return (
              <div
                key={client.name}
                className="flex items-center justify-center rounded-lg bg-white/5 p-8 transition-colors hover:bg-white/10"
              >
                <Icon size={48} className="text-white/40" aria-hidden="true" />
                <span className="sr-only">{client.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
