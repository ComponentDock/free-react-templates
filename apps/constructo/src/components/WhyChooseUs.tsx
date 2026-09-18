import { Wrench, Rocket, Users } from 'lucide-react'

const items = [
  {
    icon: Wrench,
    title: '30+ Years of Experience',
    desc: 'Decades of proven expertise in delivering exceptional construction projects across residential and commercial sectors.',
  },
  {
    icon: Rocket,
    title: 'Qualified Experts',
    desc: 'Our team of certified professionals brings specialized knowledge and skill to every project we undertake.',
  },
  {
    icon: Users,
    title: 'Best Customer Service',
    desc: 'We prioritize clear communication and responsiveness to ensure your vision is realized exactly as planned.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src="https://picsum.photos/seed/constructo-why/600/500"
              alt="Why choose our construction company"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <div className="mb-8">
              <h2 className="font-heading text-xl font-bold uppercase text-heading">
                Why Choose Us
              </h2>
              <div className="mt-2 h-0.5 w-20 bg-heading" />
              <p className="mt-4 text-sm text-body">
                There are many variations of passages of Lorem Ipsum available
              </p>
            </div>

            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-accent/10 text-accent">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-sans text-sm font-bold uppercase text-heading">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
