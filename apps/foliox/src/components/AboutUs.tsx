import { Wallet, CreditCard, Users } from 'lucide-react'

const FEATURES = [
  {
    icon: Wallet,
    title: 'Reasonable Pricing',
    description:
      'We provide cost-effective solutions tailored to your budget without compromising on quality or performance.',
  },
  {
    icon: CreditCard,
    title: 'eCommerce Support',
    description:
      'Full-featured online store setup with secure payment integration and inventory management systems.',
  },
  {
    icon: Users,
    title: 'User-Friendly Admin',
    description:
      'Intuitive dashboard and content management tools that make updating your site effortless.',
  },
]

export function AboutUs() {
  return (
    <section id="about" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-heading">About Us</h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-primary" />
        </div>

        <div className="mb-16 grid items-center gap-8 md:grid-cols-2">
          <img
            src="https://picsum.photos/seed/foliox-about/600/400"
            alt="About our agency"
            className="rounded-sm"
            loading="lazy"
          />
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-heading">Who We Are</h3>
            <p className="leading-relaxed text-body">
              We are a creative agency specializing in branding, design, and digital solutions. Our
              team combines strategic thinking with innovative execution to deliver results that
              elevate your business. From concept to completion, we work closely with our clients to
              bring their vision to life.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="rounded-sm bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <feature.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                <h4 className="text-lg font-semibold text-heading">{feature.title}</h4>
              </div>
              <p className="text-sm leading-relaxed text-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
