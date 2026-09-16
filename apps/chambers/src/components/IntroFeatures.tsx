import { Scale, Gavel, Building2, Shield } from 'lucide-react'

const features = [
  {
    icon: Scale,
    title: 'Expert Attorneys',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Gavel,
    title: 'Case Dismissed',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Building2,
    title: 'Court Performance',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Shield,
    title: 'Legal Protection',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export function IntroFeatures() {
  return (
    <section className="bg-bg-dark" data-testid="intro-features">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => {
          const Icon = f.icon
          const bg =
            i === 0
              ? 'bg-bg-dark'
              : i === 1
                ? 'bg-[#1a1e22]'
                : i === 2
                  ? 'bg-bg-darker'
                  : 'bg-[#0f1215]'
          return (
            <div key={f.title} className={`${bg} p-8 text-center text-white`}>
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
