import { Check } from 'lucide-react'

const benefits = [
  'Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in.',
  'Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis lacinia.',
  'Vestibulum nec justo lectus. In hac habitasse platea dictumst.',
  'Proin vulputate rhoncus nibh eu vehicula. Donec vitae laoreet quam, ac feugiat nibh.',
] as const

export function CTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        {/* Image */}
        <div className="min-h-[300px] bg-cover bg-center lg:w-1/2 lg:min-h-[500px]">
          <img
            src="https://picsum.photos/seed/fitlane-cta/960/600"
            alt="Fitlane gym interior"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center bg-primary-500 px-8 py-12 lg:w-1/2 lg:px-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/80">
            Aerobics Program
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold text-white">Join Our Gym</h2>

          <ul className="mb-8 space-y-4">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="rounded bg-navy-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-navy-600"
            >
              Read More
            </a>
            <a
              href="#pricing"
              className="rounded border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-primary-500"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
