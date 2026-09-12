import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRightLeft, Wallet, CreditCard } from 'lucide-react'

const services = [
  {
    icon: ArrowRightLeft,
    title: 'Exchange Fiat for Crypto',
    text: 'Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Duis non volutpat arcu.',
  },
  {
    icon: Wallet,
    title: 'Secure Wallet Storage',
    text: 'Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Duis non volutpat arcu.',
  },
  {
    icon: CreditCard,
    title: 'Instant Transactions',
    text: 'Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Duis non volutpat arcu.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Crypto to Fiat Conversion',
    text: 'Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Duis non volutpat arcu.',
  },
  {
    icon: Wallet,
    title: 'Portfolio Management',
    text: 'Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Duis non volutpat arcu.',
  },
  {
    icon: CreditCard,
    title: 'Low Transaction Fees',
    text: 'Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Duis non volutpat arcu.',
  },
] as const

const VISIBLE = 3

export function Services() {
  const [offset, setOffset] = useState(0)

  const maxOffset = services.length - VISIBLE
  const prev = () => setOffset((o) => (o === 0 ? maxOffset : o - 1))
  const next = () => setOffset((o) => (o >= maxOffset ? 0 : o + 1))

  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${offset * (100 / VISIBLE)}%)` }}
            >
              {services.map((service, i) => (
                <div key={i} className="group flex w-1/3 shrink-0 flex-col items-center px-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-heading/10 transition-colors group-hover:border-brand group-hover:text-brand">
                    <service.icon className="h-8 w-8 text-heading transition-colors group-hover:text-brand" />
                  </div>
                  <h3 className="mb-3 mt-6 text-center text-sm font-semibold uppercase tracking-wide text-heading transition-colors group-hover:text-brand">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-center text-sm leading-relaxed text-body-text">
                    {service.text}
                  </p>
                  <a
                    href="#"
                    className="text-xs font-semibold uppercase text-heading transition-colors hover:text-brand"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 bg-dark p-2 text-white transition-colors hover:bg-brand"
            aria-label="Previous services"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 bg-dark p-2 text-white transition-colors hover:bg-brand"
            aria-label="Next services"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
