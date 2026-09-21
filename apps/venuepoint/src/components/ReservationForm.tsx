import { type FormEvent } from 'react'

const partyOptions = ['2 persons', '3 persons', '4 persons', '5 persons', '6 persons'] as const

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

export function ReservationForm() {
  return (
    <section
      id="reservations"
      className="relative flex min-h-[50vh] items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat py-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(https://picsum.photos/seed/venuepoint-reservation/1920/1080)',
      }}
    >
      <div className="px-4 text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-white/80">5 Stars</p>
        <h2 className="font-display mt-2 text-4xl text-white md:text-5xl">Make a Reservation</h2>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <label htmlFor="res-date" className="sr-only">
            Date
          </label>
          <input
            id="res-date"
            type="date"
            required
            className="rounded-[7px] border-2 border-white/60 bg-white/10 px-5 py-3 font-body text-sm text-white placeholder:text-white/50 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
          />

          <label htmlFor="res-time" className="sr-only">
            Time
          </label>
          <input
            id="res-time"
            type="time"
            required
            className="rounded-[7px] border-2 border-white/60 bg-white/10 px-5 py-3 font-body text-sm text-white placeholder:text-white/50 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
          />

          <label htmlFor="res-party" className="sr-only">
            Party size
          </label>
          <select
            id="res-party"
            defaultValue="2 persons"
            className="rounded-[7px] border-2 border-white/60 bg-white/10 px-5 py-3 font-body text-sm text-white focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
          >
            {partyOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-ink text-white">
                {opt}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="rounded-[7px] border-2 border-primary-400 px-8 py-3 font-body text-sm font-bold uppercase tracking-wider text-primary-400 transition-colors hover:bg-primary-400 hover:text-white"
          >
            Make a Reservation
          </button>
        </form>
      </div>
    </section>
  )
}
