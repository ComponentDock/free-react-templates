import { Tag, Pen, Search, Send, Monitor, HelpCircle } from 'lucide-react'

const services = [
  {
    icon: Tag,
    title: 'Branding',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Pen,
    title: 'Web Design',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Send,
    title: 'Web Development',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Monitor,
    title: 'User Interface',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: HelpCircle,
    title: 'Help & Support',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[2px] text-gray-400">
            What I do?
          </span>
          <h2 className="text-2xl font-bold text-black">Here are some of my expertise</h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <div key={svc.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-400 text-white">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-black">{svc.title}</h3>
                  <p className="leading-relaxed text-gray-500">{svc.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
