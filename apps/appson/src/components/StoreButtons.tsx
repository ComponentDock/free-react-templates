import { Apple, Smartphone } from 'lucide-react'

const stores = [
  { name: 'Available on App Store', icon: Apple, href: '#contact' },
  { name: 'Available on Play Store', icon: Smartphone, href: '#contact' },
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
            className="flex items-center gap-3 border border-white/25 bg-night/70 px-6 py-3 text-white transition-colors hover:border-transparent hover:bg-gradient-to-r hover:from-azure hover:to-primary-600"
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
            <span className="text-sm font-medium leading-tight">{store.name}</span>
          </a>
        )
      })}
    </div>
  )
}
