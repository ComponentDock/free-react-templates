import { Bell, Flag, Heart, Moon } from 'lucide-react'

interface MissionItem {
  icon: React.ElementType
  title: string
  text: string
}

const items: MissionItem[] = [
  {
    icon: Bell,
    title: 'Our mission',
    text: 'To spread the love of God through worship, service, and community outreach across all generations.',
  },
  {
    icon: Flag,
    title: 'Our community',
    text: 'Building meaningful relationships and supporting one another through faith, prayer, and fellowship.',
  },
  {
    icon: Heart,
    title: 'Our belief',
    text: 'In the transformative power of Jesus Christ and the promise of eternal life for all who believe.',
  },
  {
    icon: Moon,
    title: 'Our faith',
    text: 'Guided by the Holy Spirit, we seek wisdom and grace in every aspect of our daily walk with God.',
  },
]

export function Mission() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/gracecraft-mission/1200/400')" }}
    >
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="text-center text-white">
                <Icon className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-lg font-bold uppercase">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
