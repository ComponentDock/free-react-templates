import { ButtonLink } from '@free-react-templates/ui'
import { DollarSign, ShieldCheck, Headphones } from 'lucide-react'

const features = [
  {
    icon: DollarSign,
    title: 'Comfortable Price',
    desc: 'Competitive pricing without compromising on quality or effectiveness.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe And Clean',
    desc: 'Eco-friendly treatments that are safe for your family and pets.',
  },
  {
    icon: Headphones,
    title: 'Friendly Customer Service',
    desc: 'Our support team is available 24/7 to answer your questions.',
  },
] as const

export function ChooseUs() {
  return (
    <section id="choose-us" className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-3 sm:px-6">
        <div>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Why People Choose Pest Control
          </h2>
          <p className="mt-4 leading-relaxed text-mist">
            With over 50 years of experience, we have built a reputation for reliability,
            efficiency, and customer satisfaction. Our certified team delivers results that keep
            homes and businesses protected.
          </p>
          <ButtonLink
            href="#services"
            className="mt-8 inline-flex rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-dark"
          >
            Read More
          </ButtonLink>
        </div>

        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/bugguard-choose/400/500"
            alt="Pest control team at work"
            className="h-80 w-full max-w-sm rounded-lg object-cover"
          />
        </div>

        <div className="space-y-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold text-ink">{feature.title}</h3>
                <p className="mt-1 text-sm text-mist">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
