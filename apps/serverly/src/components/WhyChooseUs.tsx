import { Cloud, RotateCcw, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  text: string
}

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: 'Server Protection',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat.',
  },
  {
    icon: Cloud,
    title: 'CloudFlare Integration',
    text: 'Ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat. Aliquam erat.',
  },
  {
    icon: RotateCcw,
    title: '30 Day Money-back',
    text: 'Lorem ipsum dolor sit amet, adipiscing elit. Mauris velit arcu, scelerisque dignissim massa quis, mattis facilisis erat. Aliquam erat.',
  },
] as const

export function WhyChooseUs() {
  return (
    <section id="why" aria-label="Why choose us" className="bg-white pb-[100px] pt-[42px]">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-4xl font-semibold text-navy-900">Why Choose us?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-mist-400">
          Ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur diam ut interdum
          ultricies, mattis facilisis erat.
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="flex flex-col items-center text-center">
              <span className="flex h-[158px] w-[158px] items-center justify-center rounded-full bg-mist-400/10 ring-1 ring-mist-400/20">
                <feature.icon className="h-16 w-16 text-brand-400" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-navy-900">{feature.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist-400">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
