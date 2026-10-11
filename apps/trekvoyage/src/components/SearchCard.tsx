import { Button, cn } from '@free-react-templates/ui'
import { BUTTON_BASE, BUTTON_TEAL } from '../lib/buttonStyles'

const DESTINATIONS = [
  'Peru',
  'Japan',
  'Thailand',
  'Brazil',
  'United States',
  'Israel',
  'China',
  'Russia',
] as const

const FIELD_CLASS =
  'h-[45px] w-full border-2 border-line bg-white px-[15px] text-[16px] text-black transition-colors duration-300 focus:border-brand focus:outline-none'

/* White availability card straddling the hero's bottom edge: destination,
   dates and party size, ending in the turquoise pill submit. */
export function SearchCard() {
  return (
    <div className="relative z-20 mx-auto -mt-[50px] w-full max-w-[1000px] px-4">
      <form
        noValidate
        aria-label="Search availability"
        onSubmit={(event) => event.preventDefault()}
        className="card-shadow grid gap-[15px] bg-white p-[30px] md:grid-cols-4"
      >
        <div>
          <label className="sr-only" htmlFor="search-destination">
            Destination
          </label>
          <select id="search-destination" name="destination" className={FIELD_CLASS}>
            {DESTINATIONS.map((destination) => (
              <option key={destination} value={destination}>
                {destination}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="sr-only" htmlFor="search-dates">
            Dates
          </label>
          <input
            id="search-dates"
            name="dates"
            type="text"
            placeholder="Dates"
            className={FIELD_CLASS}
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="search-people">
            People
          </label>
          <input
            id="search-people"
            name="people"
            type="text"
            placeholder="Enter # of People"
            className={FIELD_CLASS}
          />
        </div>

        <Button type="submit" className={cn(BUTTON_BASE, BUTTON_TEAL, 'w-full')}>
          Search
        </Button>
      </form>
    </div>
  )
}
