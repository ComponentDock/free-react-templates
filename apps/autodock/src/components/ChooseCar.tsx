import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { Badge, cn } from '@free-react-templates/ui'
import { SectionTitle } from './SectionTitle'

type TabId = 'popular' | 'newest' | 'office'

interface CarCard {
  name: string
  price: string
  tag: string
  img: string
}

const TABS: { id: TabId; label: string }[] = [
  { id: 'popular', label: 'Popular Cars' },
  { id: 'newest', label: 'Newest Cars' },
  { id: 'office', label: 'Our Office' },
]

const POPULAR_CARS: CarCard[] = [
  { name: 'Dodge Ram 1500', price: '$55/day', tag: 'Hatchback', img: 'autodock-car-1' },
  { name: 'Dodge Charger', price: '$55/day', tag: 'Sedan', img: 'autodock-car-2' },
  { name: 'Jeep Compass', price: '$55/day', tag: 'SUV', img: 'autodock-car-3' },
  { name: 'Ford Explorer', price: '$55/day', tag: 'SUV', img: 'autodock-car-4' },
  { name: 'Kia Sportage', price: '$55/day', tag: 'Crossover', img: 'autodock-car-5' },
  { name: 'Hyundai Tucson', price: '$55/day', tag: 'Crossover', img: 'autodock-car-6' },
]

const NEWEST_CARS: CarCard[] = [
  { name: 'Toyota RAV4 EV', price: '$35/day', tag: 'Toyota', img: 'autodock-car-7' },
  { name: 'Toyota Camry Hybrid', price: '$35/day', tag: 'Toyota', img: 'autodock-car-8' },
  { name: 'Toyota Corolla Cross', price: '$35/day', tag: 'Toyota', img: 'autodock-car-9' },
]

const OFFICES = [
  { city: 'Dhaka', address: '802/2, Mirpur, Dhaka' },
  { city: 'Comilla', address: 'Race Course, Comilla' },
  { city: 'Barishal', address: 'Sadar Road, Barishal' },
  { city: 'Rangpur', address: 'Jahaj Company More, Rangpur' },
]

function CarGrid({ cars }: { cars: CarCard[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <article key={car.name} className="border border-line bg-white">
          <img
            src={`https://picsum.photos/seed/${car.img}/640/400`}
            alt={car.name}
            className="h-48 w-full object-cover"
            loading="lazy"
          />
          <div className="p-5">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-bold text-ink">{car.name}</h3>
              <span className="whitespace-nowrap font-bold text-brand">{car.price}</span>
            </div>
            <Badge className="mt-2 bg-brand text-carbon">{car.tag}</Badge>
          </div>
        </article>
      ))}
    </div>
  )
}

function OfficeGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {OFFICES.map((office) => (
        <div key={office.city} className="border border-line bg-white p-6 text-center">
          <MapPin className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
          <h3 className="mt-3 text-lg font-bold uppercase text-ink">{office.city}</h3>
          <p className="mt-2 text-sm text-muted">{office.address}</p>
        </div>
      ))}
    </div>
  )
}

export function ChooseCar() {
  const [activeTab, setActiveTab] = useState<TabId>('popular')

  return (
    <section id="cars" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Choose your Car" />
        <div role="tablist" aria-label="Car categories" className="mb-10 flex justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'px-6 py-2 text-sm font-bold uppercase transition-colors',
                activeTab === tab.id
                  ? 'bg-brand text-carbon'
                  : 'border border-line text-muted hover:border-brand hover:text-ink',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
          {activeTab === 'office' ? (
            <OfficeGrid />
          ) : (
            <CarGrid cars={activeTab === 'popular' ? POPULAR_CARS : NEWEST_CARS} />
          )}
        </div>
      </div>
    </section>
  )
}
