import { MessageCircle, Users, Headphones } from 'lucide-react'

const stats = [
  { icon: MessageCircle, count: '1,200+', label: 'Chat With Us' },
  { icon: Users, count: '850+', label: 'Happy Customers' },
  { icon: Headphones, count: '24/7', label: 'Fast Support' },
]

export function StatsBar() {
  return (
    <section className="bg-brand py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <stat.icon size={32} className="text-white" />
              <span className="font-display text-3xl font-bold text-white">{stat.count}</span>
              <span className="text-sm text-white/80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
