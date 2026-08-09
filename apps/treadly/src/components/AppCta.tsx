import { Apple, Play, Smartphone } from 'lucide-react'
import { Reveal } from './Reveal'

export function AppCta() {
  return (
    <section className="bg-primary-600 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to Step Up Your Game?
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-primary-100">
            Join the Treadly community and get 15% off your first order. Plus, early access to new
            releases and exclusive member-only deals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#newsletter"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-primary-700 transition-colors hover:bg-primary-50"
            >
              <Apple className="h-5 w-5" aria-hidden="true" />
              Get 15% Off
            </a>
            <a
              href="#newsletter"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Play className="h-5 w-5 fill-current" aria-hidden="true" />
              Google Play
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
          <div className="relative mx-auto flex max-w-xs items-center justify-center rounded-[2.5rem] border-8 border-gray-950 bg-gray-950 shadow-2xl">
            <div
              className="absolute top-2 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-gray-950"
              aria-hidden="true"
            />
            <img
              src="https://picsum.photos/seed/treadly-app/360/720"
              alt="Treadly mobile app preview"
              className="aspect-[9/19] w-full rounded-[2rem] object-cover"
              width={360}
              height={720}
            />
          </div>
          <Smartphone
            className="absolute -right-2 -top-4 h-16 w-16 text-primary-200"
            aria-hidden="true"
          />
        </Reveal>
      </div>
    </section>
  )
}
