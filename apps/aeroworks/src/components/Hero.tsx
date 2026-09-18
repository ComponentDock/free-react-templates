import { useState } from 'react'
import { Search } from 'lucide-react'

const tabs = ['Car Rental', 'Buy Car'] as const
type Tab = (typeof tabs)[number]

const selectOptions = {
  Year: ['2024', '2023', '2022', '2021', '2020'],
  Brand: ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Ford'],
  Model: ['Sedan', 'SUV', 'Coupe', 'Truck', 'Van'],
  Mileage: ['Under 10k', '10k–30k', '30k–50k', 'Over 50k'],
  PriceRange: ['Under $20k', '$20k–$40k', '$40k–$60k', 'Over $60k'],
}

export function Hero() {
  const [activeTab, setActiveTab] = useState<Tab>('Car Rental')

  return (
    <section className="relative bg-gray-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/aeroworks-hero/1920/1080)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 text-white md:py-32">
        <div className="mb-16 max-w-xl">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Find Your Dream Car</h1>
          <p className="mb-6 text-lg text-gray-300">Buy Your Dream Car</p>
          <div className="mb-6 flex items-center gap-4">
            <span className="text-xl font-semibold">Toyota Camry</span>
            <span className="rounded-[2px] bg-primary-500 px-4 py-1 text-sm font-bold">
              $299/mo
            </span>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="rounded-[2px] bg-primary-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Test Drive
            </a>
            <a
              href="#"
              className="rounded-[2px] border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-text-dark"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Search form */}
        <div className="max-w-4xl rounded-[2px] bg-white p-8">
          <div className="mb-6 flex gap-0 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-semibold transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-primary-500 text-primary-500'
                    : 'text-text-medium hover:text-text-dark'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
            className="grid grid-cols-2 gap-4 md:grid-cols-5"
          >
            {Object.entries(selectOptions).map(([label, options]) => (
              <div key={label}>
                <label
                  htmlFor={`search-${label}`}
                  className="mb-1 block text-xs font-semibold text-text-muted"
                >
                  {label}
                </label>
                <select
                  id={`search-${label}`}
                  className="w-full rounded-[2px] border border-border bg-white px-3 py-2.5 text-sm text-text-dark"
                >
                  {options.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
            <div className="flex items-end">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-[2px] bg-primary-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
              >
                <Search size={16} />
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
