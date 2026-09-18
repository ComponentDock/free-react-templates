import { Apple, Smartphone } from 'lucide-react'

const stores = [
  { name: 'Download on the App Store', icon: Apple, href: '#pricing' },
  { name: 'Get it on Google Play', icon: Smartphone, href: '#pricing' },
] as const

export function StoreButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      {stores.map((store) => {
        const Icon = store.icon
        return (
          <a
            key={store.name}
            href={store.href}
            className="flex items-center gap-3 rounded-full border border-white/25 bg-night/70 px-6 py-3 text-white transition-colors hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400"
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
            <span className="text-sm font-medium leading-tight">{store.name}</span>
          </a>
        )
      })}
    </div>
  )
}
