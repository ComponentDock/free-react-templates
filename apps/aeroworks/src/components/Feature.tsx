import { Cpu, Gauge, Thermometer, Settings, Zap, Disc } from 'lucide-react'

const features = [
  { icon: Cpu, label: 'Engine' },
  { icon: Gauge, label: 'Turbo' },
  { icon: Thermometer, label: 'Cooling' },
  { icon: Settings, label: 'Suspension' },
  { icon: Zap, label: 'Electrical' },
  { icon: Disc, label: 'Brakes' },
]

export function Feature() {
  return (
    <section className="bg-section-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — text */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-text-dark">
              We Are a Trusted Name In Auto
            </h2>
            <p className="mb-8 leading-relaxed text-text-medium">
              With years of experience in the automotive industry, we provide top-quality vehicles
              and services. Our team of experts ensures every customer finds exactly what they need,
              whether it&apos;s a rental, purchase, or maintenance service.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-[2px] bg-primary-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
              >
                About Us
              </a>
              <a
                href="#"
                className="rounded-[2px] border-2 border-primary-500 px-8 py-3 text-sm font-semibold text-primary-500 transition-colors hover:bg-primary-500 hover:text-white"
              >
                Our Partners
              </a>
            </div>
          </div>

          {/* Right — feature grid */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {features.map((feat) => (
              <div key={feat.label} className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary-500">
                  <feat.icon size={28} className="text-primary-500" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold text-text-dark">{feat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
