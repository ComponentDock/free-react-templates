import { useState, type FormEvent } from 'react'
import { ButtonLink } from '@free-react-templates/ui'

const carTypes = ['SUV', 'Sedan', 'Hatchback', 'Coupe', 'Convertible'] as const

export function Hero() {
  const [carType, setCarType] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [dropoffDate, setDropoffDate] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section
      id="home"
      className="relative bg-cover bg-center min-h-[90vh]"
      style={{ backgroundImage: "url('https://picsum.photos/seed/drivego-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 sm:px-6">
        <div className="text-center text-white">
          <h1 className="font-display text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Rent a car is within
            <br />
            your finger tips
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-2xl"
        >
          <div className="grid gap-0 sm:grid-cols-4">
            <div className="border-b sm:border-b-0 sm:border-r border-gray-200 p-4">
              <label
                htmlFor="hero-car-type"
                className="mb-1 block text-xs font-bold uppercase tracking-wide text-mist"
              >
                Select Car Type
              </label>
              <select
                id="hero-car-type"
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="w-full bg-transparent text-sm font-bold text-ink outline-none"
              >
                <option value="">Choose type</option>
                {carTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="border-b sm:border-b-0 sm:border-r border-gray-200 p-4">
              <label
                htmlFor="hero-pickup"
                className="mb-1 block text-xs font-bold uppercase tracking-wide text-mist"
              >
                Pick up date
              </label>
              <input
                id="hero-pickup"
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-transparent text-sm font-bold text-ink outline-none"
              />
            </div>
            <div className="border-b sm:border-b-0 sm:border-r border-gray-200 p-4">
              <label
                htmlFor="hero-dropoff"
                className="mb-1 block text-xs font-bold uppercase tracking-wide text-mist"
              >
                Drop off date
              </label>
              <input
                id="hero-dropoff"
                type="date"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                className="w-full bg-transparent text-sm font-bold text-ink outline-none"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <ButtonLink href="#listing" className="w-full">
                Search Now
              </ButtonLink>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
