import { Handshake, DollarSign, Heart } from 'lucide-react'

const features = [
  {
    icon: Handshake,
    title: 'Sponsorship',
    description:
      'Partner with us to create lasting impact. Sponsor programs that transform communities and change lives for the better.',
  },
  {
    icon: DollarSign,
    title: 'Donate Amount',
    description:
      'Every contribution matters. Choose a donation amount that fits your budget and help us reach our fundraising goals.',
  },
  {
    icon: Heart,
    title: 'Become a Volunteer',
    description:
      'Join our team of dedicated volunteers and make a hands-on difference in the lives of those who need it most.',
  },
] as const

export function KeyFeatures() {
  return (
    <section className="bg-bg-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-medium text-text-primary md:text-3xl">Our Key Features</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-text-muted">
            The French Revolution constituted for the conscience of the dominant aristocratic class
            a fall from innocence, and upturning of the natural chain of events that resounded.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white p-8 text-center shadow-sm border border-border">
              <Icon className="mx-auto mb-4 h-12 w-12 text-brand" aria-hidden="true" />
              <h3 className="mb-3 text-lg font-medium text-text-primary">{title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
