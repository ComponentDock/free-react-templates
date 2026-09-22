import { HERO, BOOKING_FIELDS, ROOM_TYPES, GUEST_OPTIONS } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[700px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO.image})` }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center">
        <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-6xl">
          {HERO.heading}
        </h1>
        <p className="mt-4 text-xl font-light text-white/80">{HERO.subheading}</p>

        {/* Booking form */}
        <div className="mx-auto mt-10 max-w-4xl rounded-lg bg-white/10 p-6 backdrop-blur-sm">
          <form
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
            onSubmit={(e) => e.preventDefault()}
          >
            {BOOKING_FIELDS.map((field) => (
              <div key={field.label} className="flex flex-col">
                <label
                  htmlFor={field.label}
                  className="mb-1 text-left text-xs font-medium text-white/70"
                >
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  <select
                    id={field.label}
                    className="rounded bg-white/20 px-3 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand"
                  >
                    {field.label === 'Room Type'
                      ? ROOM_TYPES.map((opt) => (
                          <option key={opt} value={opt} className="text-dark">
                            {opt}
                          </option>
                        ))
                      : GUEST_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="text-dark">
                            {opt}
                          </option>
                        ))}
                  </select>
                ) : (
                  <input
                    id={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="rounded bg-white/20 px-3 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                )}
              </div>
            ))}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full rounded bg-brand px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
              >
                Check Availability
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
