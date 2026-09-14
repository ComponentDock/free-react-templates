import { useState } from 'react'

const tabs = [
  {
    id: 'house',
    label: 'House Washing',
    img: 'https://picsum.photos/seed/pw-ba-house/800/500',
    desc: 'Transform your home exterior with our professional house washing service. We remove dirt, mold, and grime safely.',
  },
  {
    id: 'roof',
    label: 'Roof Cleaning',
    img: 'https://picsum.photos/seed/pw-ba-roof/800/500',
    desc: 'Restore your roof to its original beauty. Our gentle cleaning methods protect your roofing materials.',
  },
  {
    id: 'driveway',
    label: 'Driveway Cleaning',
    img: 'https://picsum.photos/seed/pw-ba-driveway/800/500',
    desc: 'Remove stubborn stains and buildup from your driveway for a clean, welcoming entrance.',
  },
  {
    id: 'gutter',
    label: 'Gutter Cleaning',
    img: 'https://picsum.photos/seed/pw-ba-gutter/800/500',
    desc: 'Keep your gutters clear and functioning properly with our thorough cleaning service.',
  },
  {
    id: 'patio',
    label: 'Patio Cleaning',
    img: 'https://picsum.photos/seed/pw-ba-patio/800/500',
    desc: 'Revitalize your outdoor entertaining space with deep patio cleaning and restoration.',
  },
  {
    id: 'building',
    label: 'Building Cleaning',
    img: 'https://picsum.photos/seed/pw-ba-building/800/500',
    desc: 'Professional commercial building cleaning that enhances property value and curb appeal.',
  },
]

export function BeforeAfter() {
  const [active, setActive] = useState(0)
  const activeTab = tabs[active]!

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Before &amp; After Services</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image panel */}
          <div className="w-full md:w-7/12">
            <div
              className="h-80 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${activeTab.img})` }}
            />
            <h3 className="text-xl font-bold mt-4">{activeTab.label}</h3>
            <p className="text-dark-500 mt-2 leading-relaxed">{activeTab.desc}</p>
          </div>
          {/* Tab list */}
          <div className="w-full md:w-5/12 flex flex-col">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`text-left px-6 py-4 border-b border-dark-100 transition-colors font-medium ${
                  i === active
                    ? 'bg-brand-500 text-white'
                    : 'bg-white text-dark-700 hover:bg-dark-50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
