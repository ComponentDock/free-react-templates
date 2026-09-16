import { Church, HeartHandshake, Heart } from 'lucide-react'

const services = [
  {
    icon: Church,
    title: 'Worship',
    subheading: 'What to expect',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: HeartHandshake,
    title: 'Connect',
    subheading: 'Contact Members',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Heart,
    title: "God's Love",
    subheading: 'Beliefs and History',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-0">
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-0">
            {services.map((svc) => (
              <div key={svc.title} className="p-8">
                <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                  <svc.icon className="w-7 h-7 text-brand" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{svc.title}</h3>
                <span className="text-sm text-brand block mb-2">{svc.subheading}</span>
                <p className="text-sm text-body-text leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
          <div className="lg:w-1/3 bg-surface p-8 flex items-center">
            <div>
              <h3 className="text-lg font-semibold leading-relaxed mb-4">
                A Christian should live for the glory of God and the well-being of others.
              </h3>
              <p className="text-sm text-body-text leading-relaxed">
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
