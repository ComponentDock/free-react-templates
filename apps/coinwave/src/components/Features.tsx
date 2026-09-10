import { Shield, Headphones, Settings, Award, Star, ThumbsUp } from 'lucide-react'

const FEATURES = [
  {
    icon: Shield,
    title: 'Expert Technicians',
    description:
      'Our team of blockchain experts ensures your assets are always secure and well-managed.',
  },
  {
    icon: Headphones,
    title: 'Professional Service',
    description:
      'Dedicated support for every transaction, from first-time buyers to enterprise clients.',
  },
  {
    icon: Settings,
    title: 'Great Support',
    description: '24/7 customer support via chat, email, and phone to assist with any questions.',
  },
  {
    icon: Award,
    title: 'Technical Skills',
    description: 'Cutting-edge technology powers our exchange, ensuring speed and reliability.',
  },
  {
    icon: Star,
    title: 'Highly Recomended',
    description: 'Trusted by over 100,000 users worldwide for secure cryptocurrency transactions.',
  },
  {
    icon: ThumbsUp,
    title: 'Positive Reviews',
    description: 'Consistently rated 5 stars by our users for ease of use and security features.',
  },
]

export function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="text-[30px] font-semibold text-dark-bg">
            Why choose us during purchase bitcoin
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <article key={title} className="group text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-brand/10 transition-colors group-hover:bg-orange-brand">
                <Icon className="h-6 w-6 text-orange-brand transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-3 text-[18px] font-semibold text-dark-bg transition-colors group-hover:text-orange-brand">
                {title}
              </h3>
              <p className="text-[15px] font-light leading-7 text-text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
