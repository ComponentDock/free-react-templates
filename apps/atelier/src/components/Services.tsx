import { CheckCircle } from 'lucide-react'

const items = [
  'Professional and creative design solutions tailored to your brand.',
  'Responsive development that works flawlessly across all devices.',
  'Ongoing support and maintenance to keep your project running smoothly.',
]

export function Services() {
  return (
    <section id="services" className="bg-brand-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">Services</p>
          <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">What We Provide For You</h2>
          <p className="mt-4 max-w-md text-sm text-navy/50">
            We deliver end-to-end creative solutions that elevate your brand and drive measurable
            results for your business.
          </p>
          <ul className="mt-6 space-y-3">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-navy/60">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-brand-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Get Started
          </a>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          <img
            src="https://picsum.photos/seed/atelier-service/600/500"
            alt="Our services in action"
            className="w-full max-w-md rounded-2xl object-cover shadow-xl"
            loading="lazy"
          />
          {/* Decorative dots */}
          <div
            className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand-100 opacity-50 sm:-right-6 sm:-top-6 sm:h-32 sm:w-32"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-brand-200 opacity-40 sm:-bottom-6 sm:-left-6 sm:h-20 sm:w-20"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
