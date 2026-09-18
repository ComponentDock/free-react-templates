import { cn } from '@free-react-templates/ui'

export function BookingForm() {
  const selectClasses =
    'appearance-none rounded bg-white px-4 py-2 pr-8 text-sm text-ink outline-none'

  return (
    <section id="booking" className="relative z-10 -mt-1 bg-navy">
      <form
        className="mx-auto flex max-w-6xl flex-wrap items-end gap-4 px-6 py-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="checkin" className="sr-only">
            Check-in
          </label>
          <input
            id="checkin"
            type="date"
            placeholder="Check-in"
            className={cn(
              'rounded bg-white px-4 py-2 text-sm text-ink outline-none',
              'placeholder:text-smoke',
            )}
          />
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="checkout" className="sr-only">
            Check-out
          </label>
          <input
            id="checkout"
            type="date"
            placeholder="Check-out"
            className={cn(
              'rounded bg-white px-4 py-2 text-sm text-ink outline-none',
              'placeholder:text-smoke',
            )}
          />
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="adults" className="sr-only">
            Adults
          </label>
          <select id="adults" defaultValue="1" className={selectClasses}>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'Adult' : 'Adults'}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="children" className="sr-only">
            Children
          </label>
          <select id="children" defaultValue="0" className={selectClasses}>
            {[0, 1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'Child' : 'Children'}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className={cn(
            'rounded bg-primary-400 px-8 py-2',
            'text-sm font-semibold uppercase tracking-wider text-white',
            'transition-colors hover:bg-primary-400/90',
          )}
        >
          Book Now
        </button>
      </form>
    </section>
  )
}
