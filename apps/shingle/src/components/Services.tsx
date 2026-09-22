import { useState } from 'react'
import { Check } from 'lucide-react'

const serviceList = [
  { id: 'skylights', label: 'Skylights', icon: '🏠' },
  { id: 'waterproofing', label: 'Waterproofing', icon: '💧' },
  { id: 'industrial', label: 'Industrial Roofing', icon: '🏭' },
  { id: 'residential', label: 'Residential Roofing', icon: '🏡' },
  { id: 'gutter', label: 'Gutter Cleaning', icon: '🔧' },
  { id: 'commercial', label: 'Commercial Roofing', icon: '🏢' },
] as const

const serviceDetails: Record<string, { desc: string; features: string[] }> = {
  skylights: {
    desc: 'Bring natural light into your home with our expertly installed skylights. We offer a range of styles and sizes to suit any space.',
    features: [
      'Energy-efficient glass options',
      'Professional installation',
      'Custom sizing available',
      'Waterproof sealing',
      '10-year warranty',
    ],
  },
  waterproofing: {
    desc: 'Protect your property from water damage with our comprehensive waterproofing solutions for roofs and foundations.',
    features: [
      'Membrane waterproofing',
      'Cementitious coatings',
      'Foundation sealing',
      'Leak detection',
      'Long-lasting protection',
    ],
  },
  industrial: {
    desc: 'Heavy-duty roofing solutions for warehouses, factories, and commercial buildings built to last.',
    features: [
      'Metal roofing systems',
      'Flat roof solutions',
      'Insulation options',
      'Fire-resistant materials',
      'Maintenance programs',
    ],
  },
  residential: {
    desc: 'Quality residential roofing services from shingle replacement to complete roof installations.',
    features: [
      'Asphalt shingle repair',
      'Metal roof installation',
      'Ventilation upgrades',
      'Storm damage repair',
      'Free inspections',
    ],
  },
  gutter: {
    desc: 'Keep your gutters clean and flowing with our professional gutter cleaning and maintenance services.',
    features: [
      'Complete debris removal',
      'Downspout flushing',
      'Gutter guard installation',
      'Fascia board repair',
      'Annual plans available',
    ],
  },
  commercial: {
    desc: 'Reliable commercial roofing services for businesses of all sizes with minimal disruption to operations.',
    features: [
      'TPO and EPDM systems',
      'Green roof options',
      'Emergency repairs',
      'Preventive maintenance',
      'Energy-efficient solutions',
    ],
  },
}

export function Services() {
  const [active, setActive] = useState('skylights')
  const detail = serviceDetails[active]!

  return (
    <section id="services" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-semibold text-ink sm:text-3xl">
          Our Best Services
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-1">
              {serviceList.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(s.id)}
                  className={`flex items-center gap-3 rounded-lg px-5 py-4 text-left text-sm font-medium transition-colors ${
                    active === s.id
                      ? 'bg-brand text-white'
                      : 'bg-gray-50 text-ink hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300'
                  }`}
                >
                  <span aria-hidden="true">{s.icon}</span>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-ink dark:text-white">
                {serviceList.find((s) => s.id === active)?.label}
              </h3>
              <p className="mt-4 leading-relaxed">{detail.desc}</p>
              <ul className="mt-6 space-y-3">
                {detail.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
