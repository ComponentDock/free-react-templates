import type { FormEvent } from 'react'
import { CalendarDays, ChevronDown } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const LOCATIONS = ['Select', 'Dhaka', 'Comilla', 'Barishal', 'Rangpur']
const CAR_TYPES = ['Select', 'BMW', 'Audi', 'Lexus']

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[640px] bg-carbon bg-cover bg-center pb-20 pt-[150px]"
      style={{ backgroundImage: "url('https://picsum.photos/seed/autodock-hero/1920/900')" }}
    >
      <div className="absolute inset-0 bg-carbon/80" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          aria-label="Book a car"
          className="space-y-5 bg-white/90 p-8 shadow-xl"
        >
          <div>
            <label
              htmlFor="pickup-location"
              className="mb-2 block text-sm font-bold uppercase text-ink"
            >
              Pick-up location:
            </label>
            <div className="relative">
              <select
                id="pickup-location"
                name="pickup-location"
                defaultValue="Select"
                className="w-full appearance-none border-2 border-brand bg-white px-4 py-3 text-ink focus:outline-none"
              >
                {LOCATIONS.map((location) => (
                  <option key={location}>{location}</option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-brand"
                aria-hidden="true"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="pickup-date"
              className="mb-2 block text-sm font-bold uppercase text-ink"
            >
              Pick-up date:
            </label>
            <div className="relative">
              <input
                id="pickup-date"
                name="pickup-date"
                type="date"
                className="w-full border-2 border-brand bg-white px-4 py-3 text-ink focus:outline-none"
              />
              <CalendarDays
                className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-brand"
                aria-hidden="true"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="return-date"
              className="mb-2 block text-sm font-bold uppercase text-ink"
            >
              Return date:
            </label>
            <div className="relative">
              <input
                id="return-date"
                name="return-date"
                type="date"
                className="w-full border-2 border-brand bg-white px-4 py-3 text-ink focus:outline-none"
              />
              <CalendarDays
                className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-brand"
                aria-hidden="true"
              />
            </div>
          </div>

          <div>
            <label htmlFor="car-type" className="mb-2 block text-sm font-bold uppercase text-ink">
              Choose car type:
            </label>
            <div className="relative">
              <select
                id="car-type"
                name="car-type"
                defaultValue="Select"
                className="w-full appearance-none border-2 border-brand bg-white px-4 py-3 text-ink focus:outline-none"
              >
                {CAR_TYPES.map((carType) => (
                  <option key={carType}>{carType}</option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-brand"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="pt-2 text-center">
            <Button
              type="submit"
              className="rounded-none bg-brand px-10 py-3 font-bold uppercase text-carbon hover:bg-brand-deep"
            >
              Book Now
            </Button>
          </div>
        </form>

        <div className="text-center lg:text-right">
          <h1 className="text-4xl font-extrabold uppercase text-brand sm:text-5xl">
            Book a car today!
          </h1>
          <p className="mx-auto mt-4 max-w-md uppercase leading-relaxed tracking-wide text-white lg:mx-0">
            For as low as $10 a day plus 15% discount for our returning customers
          </p>
        </div>
      </div>
    </section>
  )
}
