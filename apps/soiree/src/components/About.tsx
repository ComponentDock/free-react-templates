import { Mic, Rocket, Radio, Clock } from 'lucide-react'

const FEATURES = [
  {
    icon: Mic,
    title: '9 Speakers',
    description: 'Industry leaders sharing insights on the latest trends and innovations.',
  },
  {
    icon: Rocket,
    title: '8 hrs Marathon',
    description: 'A full day of intensive sessions, workshops, and networking opportunities.',
  },
  {
    icon: Radio,
    title: 'Live Broadcast',
    description: "Can't make it in person? Join thousands watching the live stream.",
  },
  {
    icon: Clock,
    title: 'Early Bird',
    description: 'Lock in the best price before tickets go up. Limited availability.',
  },
]

export function About() {
  return (
    <section className="py-16 font-[family-name:var(--font-montserrat)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold uppercase text-[var(--color-heading)] relative inline-block pb-3 before:absolute before:top-0 before:left-0 before:w-8 before:border-t-3 before:border-[var(--color-brand)]">
            About the event
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <p className="text-[var(--color-body)] leading-relaxed">
            Join us for an extraordinary gathering of industry leaders, innovators, and creative
            minds. Our conference brings together the brightest minds to share knowledge, spark
            collaborations, and shape the future of technology and design.
          </p>
          <p className="text-[var(--color-body)] leading-relaxed">
            Over three action-packed days, you'll experience keynote presentations, hands-on
            workshops, and unparalleled networking opportunities. Whether you're a seasoned
            professional or just starting your journey, there's something for everyone at Soiree.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="w-10 h-10 text-[var(--color-brand)] mx-auto mb-4" />
              <h4 className="text-lg font-bold text-[var(--color-heading)] mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-[var(--color-body)] mb-2">{feature.description}</p>
              <a href="#" className="text-sm text-[var(--color-brand)] hover:underline">
                read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
