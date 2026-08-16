import { BadgeCheck, Leaf, ShieldCheck, Wallet } from 'lucide-react'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Professional',
    text: 'Trained, background-checked cleaners you can trust in your home.',
  },
  {
    icon: Leaf,
    title: 'Eco-friendly',
    text: 'Green, non-toxic products that are safe for kids, pets, and planet.',
  },
  {
    icon: Wallet,
    title: 'Affordable Rates',
    text: 'Transparent pricing and flexible plans to fit any budget.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured & Trusted',
    text: 'Every visit is covered, so you can relax while we work.',
  },
] as const

export function ChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="font-accent text-base font-semibold uppercase tracking-[4px] text-brand">
            Why choose us?
          </p>
          <h2 className="mt-4 text-4xl font-medium text-heading">Why People Choose us?</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col items-center text-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-light text-brand">
                <reason.icon className="h-10 w-10" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-medium text-heading">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
