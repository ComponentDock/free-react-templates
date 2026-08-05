import { Apple, Smartphone } from 'lucide-react'

const stores = [
  { name: 'Available on App Store', icon: Apple, href: '#pricing' },
  { name: 'Available on Play Store', icon: Smartphone, href: '#pricing' },
] as const

export function StoreButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {stores.map((store) => {
        const Icon = store.icon
        return (
          <a
            key={store.name}
            href={store.href}
            className="flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-white backdrop-blur transition-colors hover:bg-white hover:text-night"
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
            <span className="text-sm font-medium leading-tight">{store.name}</span>
          </a>
        )
      })}
    </div>
  )
}
