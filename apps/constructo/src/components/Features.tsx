import { Home, Building2, Clock, ThumbsUp } from 'lucide-react'

const features = [
  {
    icon: Home,
    title: 'Professional Builder',
    desc: 'Expert construction services with over 30 years of experience in residential and commercial projects.',
  },
  {
    icon: Building2,
    title: 'We Deliver Quality',
    desc: 'Premium materials and skilled craftsmanship ensure every project meets the highest standards.',
  },
  {
    icon: Clock,
    title: 'Always On Time',
    desc: 'We respect your schedule and deliver projects on time, every time, without compromising quality.',
  },
  {
    icon: ThumbsUp,
    title: 'We Are Passionate',
    desc: 'Our passion for building drives us to create exceptional spaces that exceed expectations.',
  },
]

export function Features() {
  return (
    <section className="bg-light py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <f.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold uppercase text-heading">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-body">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
