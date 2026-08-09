import { RotateCcw, Ruler, ShieldCheck, Truck } from 'lucide-react'
import { Reveal } from './Reveal'

const services = [
  {
    icon: Truck,
    title: 'Free Shipping',
    blurb: 'On all orders over $75, no matter where you are.',
  },
  {
    icon: RotateCcw,
    title: '60-Day Returns',
    blurb: 'Changed your mind? Send them back within 60 days.',
  },
  {
    icon: Ruler,
    title: 'Size Guarantee',
    blurb: 'Free size exchanges until the fit is just right.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Checkout',
    blurb: '256-bit encrypted payments, every single time.',
  },
] as const

export function ServiceBar() {
  return (
    <section
      aria-label="Services"
      className="border-y border-gray-200 bg-white py-14 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {services.map(({ icon: Icon, title, blurb }, index) => (
          <Reveal key={title} delay={index * 60} className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {blurb}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
