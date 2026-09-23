import { Search, DollarSign, Megaphone, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Market Research',
    description: 'Deep market analysis to uncover opportunities and trends.',
  },
  {
    icon: DollarSign,
    title: 'Financial Services',
    description: 'Strategic financial planning and investment guidance.',
  },
  {
    icon: Megaphone,
    title: 'Online Marketing',
    description: 'Comprehensive digital marketing campaigns that deliver ROI.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Help & Support',
    description: 'Round-the-clock support to keep your business running.',
  },
]

export function Features() {
  return (
    <section className="relative bg-gray-800 py-20">
      <img
        src="https://picsum.photos/seed/byteops-features/1200/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ops-400/20 text-ops-400">
                <f.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">{f.title}</h3>
                <p className="text-sm text-gray-300">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
