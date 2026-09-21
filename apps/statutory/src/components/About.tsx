import { Scale, Percent, Gavel, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: Scale,
    title: 'Expert Attorneys',
    description: 'Decades of combined legal expertise across all practice areas.',
  },
  {
    icon: Percent,
    title: 'Great Discount',
    description: 'Affordable rates with flexible payment plans for every client.',
  },
  {
    icon: Gavel,
    title: 'Legal Advisory',
    description: 'Strategic counsel to navigate complex legal landscapes effectively.',
  },
  {
    icon: ShieldCheck,
    title: 'Quick Charges',
    description: 'Fast-track case processing without compromising on thoroughness.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
        <div className="relative flex items-center justify-center overflow-hidden rounded">
          <img
            src="https://picsum.photos/seed/statutory-about/800/600"
            alt="Law office"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center">
          <div className="rounded bg-paper p-8 md:p-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">
              Welcome to Statutory
            </span>
            <h2 className="mt-2 text-3xl font-bold text-dark-1">
              Why Put Your Trust In Our Law Firm
            </h2>
            <p className="mt-4 text-gray-600">
              We combine decades of legal expertise with a client-first approach to deliver results
              that matter. Our team is committed to protecting your rights and interests.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {items.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <item.icon className="mt-1 h-6 w-6 flex-shrink-0 text-gold" />
                  <div>
                    <h3 className="font-semibold text-dark-1">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
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
