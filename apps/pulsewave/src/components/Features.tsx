import { Shield, Users, Lock, Headphones } from 'lucide-react'

const FEATURES = [
  {
    icon: Shield,
    title: 'Easy Management',
    description: 'Far far away, behind the word mountains, far from the countries.',
  },
  {
    icon: Lock,
    title: 'Protect Your Profile',
    description: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
  {
    icon: Users,
    title: 'Private Community',
    description: 'The Big Oxmox advised her not to do so, because there were thousands.',
  },
  {
    icon: Headphones,
    title: '24/7 Help Support',
    description: 'A small river named Duden flows by their place and supplies it.',
  },
]

export function Features() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand to-accent-lavender py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-[88px]">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-white/70">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold text-white">Easy Management for Your Businesses</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl bg-white p-8 shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <Icon size={28} className="text-brand" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-dark">{title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
