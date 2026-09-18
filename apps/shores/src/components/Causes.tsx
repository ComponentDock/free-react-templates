import { Heart, Lightbulb, Users } from 'lucide-react'

const causes = [
  {
    icon: Heart,
    title: 'Give Donation',
    description:
      'Every donation helps us provide essential resources to communities in need, from clean water to educational materials.',
  },
  {
    icon: Lightbulb,
    title: 'Give Inspiration',
    description:
      'We inspire communities to build sustainable futures through mentorship, training, and development programs.',
  },
  {
    icon: Users,
    title: 'Become Volunteer',
    description:
      'Join our team of dedicated volunteers and make a hands-on difference in the lives of those who need it most.',
  },
]

export function Causes() {
  return (
    <section id="causes" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-ink">Our major causes</h2>
          <p className="mx-auto max-w-xl text-mist">
            We are committed to making the world a better place through meaningful causes and
            community support.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <cause.icon size={28} />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-ink">{cause.title}</h3>
              <p className="text-mist">{cause.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
