import { Home, Car, GraduationCap } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Home Loan',
    price: '$3000-$10000',
    details: [
      'Borrow - $350 over 3 months',
      'Interest rate - 292% pa fixed',
      'Total amount payable - $525.12',
      'Representative - 1,286% APR',
    ],
  },
  {
    icon: Car,
    title: 'Car Loan',
    price: '$3000-$10000',
    details: [
      'Borrow - $350 over 3 months',
      'Interest rate - 292% pa fixed',
      'Total amount payable - $525.12',
      'Representative - 1,286% APR',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Education Loan',
    price: '$3000-$10000',
    details: [
      'Borrow - $350 over 3 months',
      'Interest rate - 292% pa fixed',
      'Total amount payable - $525.12',
      'Representative - 1,286% APR',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-3 h-[3px] w-15 rounded bg-brand" />
          <h2 className="text-3xl font-normal text-navy lg:text-[44px]">What we offer for you</h2>
          <p className="mt-2 text-body-text">
            We provide online instant cash loans with quick approval that suit your term
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="rounded-lg p-8 text-white"
              style={{
                background: 'linear-gradient(to bottom, #0a8cff, #054680)',
              }}
            >
              <svc.icon size={40} className="mb-4" />
              <h3 className="mb-2 text-xl font-semibold">{svc.title}</h3>
              <p className="mb-4 text-2xl font-bold">{svc.price}</p>
              <ul className="mb-6 space-y-2 text-sm">
                {svc.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href="#hero"
                className="inline-block rounded bg-brand px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-dark"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
