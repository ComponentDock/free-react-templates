import { Check } from 'lucide-react'

const features = [
  'Quis varius quam quisque id diam vel quam elementum.',
  'Mauris augue neque gravida in fermentum.',
  'Orci phasellus egestas tellus rutrum.',
  'Nec feugiat nisl pretium fusce id velit ut tortor pretium.',
]

export function WhyChooseUs() {
  return (
    <section className="border-y border-grey-border bg-grey-bg py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: content */}
          <div>
            <div className="mb-8">
              <h2 className="inline-block text-4xl font-bold text-heading">Why Choose Us</h2>
              <div className="mt-5 h-1 w-10 bg-primary" />
            </div>
            <p className="mb-8 leading-relaxed text-body">
              Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a
              erat. Aliquam id diam maecenas ultricies mi eget mauris. Ultrices sagittis orci a
              scelerisque purus.
            </p>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 shrink-0 text-primary" />
                  <p className="text-body">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="overflow-hidden rounded">
            <img
              src="https://picsum.photos/seed/vivid-why/600/400"
              alt="Why choose us"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
