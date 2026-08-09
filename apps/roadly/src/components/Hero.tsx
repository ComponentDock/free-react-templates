import type { FormEvent } from 'react'
import { CalendarDays, Clock, MapPin, Play } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const fields = [
  {
    id: 'pickup-location',
    label: 'Pick-up location',
    type: 'text',
    placeholder: 'City, Airport, Station, etc',
  },
  {
    id: 'dropoff-location',
    label: 'Drop-off location',
    type: 'text',
    placeholder: 'City, Airport, Station, etc',
  },
] as const

const dateFields = [
  { id: 'pickup-date', label: 'Pick-up date', type: 'date' },
  { id: 'dropoff-date', label: 'Drop-off date', type: 'date' },
] as const

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/roadly-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-coal/70" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:py-32">
        <div className="text-white">
          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Now <span className="text-brand">It's easy for you</span> <span>rent a car</span>
          </h1>
          <button
            type="button"
            aria-label="Play intro video"
            className="mt-10 inline-flex items-center gap-4 text-left"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-105">
              <Play className="ml-0.5 h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Easy steps for renting a car
            </span>
          </button>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          <h2 className="font-display text-2xl font-extrabold text-ink">Make your trip</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            {fields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-mist"
                >
                  {field.label}
                </label>
                <div className="relative">
                  <MapPin
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand"
                    aria-hidden="true"
                  />
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-3 text-sm text-ink outline-none transition-colors focus:border-brand"
                  />
                </div>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-4">
              {dateFields.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-mist"
                  >
                    {field.label}
                  </label>
                  <div className="relative">
                    <CalendarDays
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand"
                      aria-hidden="true"
                    />
                    <input
                      id={field.id}
                      type={field.type}
                      className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-3 text-sm text-ink outline-none transition-colors focus:border-brand"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <label
                htmlFor="pickup-time"
                className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-mist"
              >
                Pick-up time
              </label>
              <div className="relative">
                <Clock
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand"
                  aria-hidden="true"
                />
                <input
                  id="pickup-time"
                  type="time"
                  className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-3 text-sm text-ink outline-none transition-colors focus:border-brand"
                />
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full">
              Search Vehicle
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
