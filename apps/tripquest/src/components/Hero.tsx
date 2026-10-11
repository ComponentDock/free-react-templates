import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { BUTTON_BASE, BUTTON_NAVY_HOVER } from '../lib/buttonStyles'

interface Field {
  name: string
  label: string
  type: 'text' | 'date' | 'number'
  min?: number
  max?: number
}

const TABS = [
  { id: 'flight', label: 'Flights', submit: 'Search flights' },
  { id: 'hotel', label: 'Hotels', submit: 'Search Hotels' },
  { id: 'holiday', label: 'Holidays', submit: 'Search Holidays' },
] as const

const FIELDS: readonly Field[] = [
  { name: 'from', label: 'From', type: 'text' },
  { name: 'to', label: 'To', type: 'text' },
  { name: 'start', label: 'Start', type: 'date' },
  { name: 'return', label: 'Return', type: 'date' },
  { name: 'adults', label: 'Adults', type: 'number', min: 1, max: 20 },
  { name: 'child', label: 'Child', type: 'number', min: 1, max: 20 },
]

const INPUT_CLASS =
  'h-[42px] w-full rounded-none border border-line bg-white px-[15px] text-[13px] font-light text-ink transition-colors placeholder:text-body focus:border-brand focus:outline-none'

interface BookingFormProps {
  submitLabel: string
}

/* One booking form: the six stacked square fields (From, To, Start, Return,
   Adults, Child) ending in the square yellow submit — the same field set is
   reused by all three tabs. */
function BookingForm({ submitLabel }: BookingFormProps) {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <form className="px-[30px] py-[40px] text-center" onSubmit={handleSubmit}>
      <div className="space-y-[15px]">
        {FIELDS.map((field) => (
          <div key={field.name}>
            <label className="sr-only" htmlFor={`${submitLabel}-${field.name}`}>
              {field.label}
            </label>
            <input
              id={`${submitLabel}-${field.name}`}
              name={field.name}
              type={field.type}
              min={field.min}
              max={field.max}
              placeholder={`${field.label} `}
              className={INPUT_CLASS}
            />
          </div>
        ))}
      </div>
      <button type="submit" className={cn(BUTTON_BASE, BUTTON_NAVY_HOVER, 'mt-[20px] w-full')}>
        <Search className="h-[14px] w-[14px]" aria-hidden="true" />
        {submitLabel}
      </button>
      {sent ? (
        <p role="status" className="mt-[14px] text-[13px] text-brand">
          Thanks — a planner will email your options shortly.
        </p>
      ) : null}
    </form>
  )
}

/* White booking widget: a three-tab strip (active tab white, inactive tabs
   translucent) over the panel holding the active tab's form. */
function BookingWidget() {
  const [tab, setTab] = useState<(typeof TABS)[number]>(TABS[0])

  return (
    <div className="w-full">
      <ul role="tablist" aria-label="Booking type" className="flex">
        {TABS.map((item) => (
          <li key={item.id} className="flex-1">
            <button
              type="button"
              role="tab"
              id={`${item.id}-tab`}
              aria-selected={tab.id === item.id}
              aria-controls={`${item.id}-panel`}
              onClick={() => setTab(item)}
              className={cn(
                'w-full py-[12px] text-[13px] font-semibold uppercase transition-colors duration-300',
                tab.id === item.id
                  ? 'bg-white text-ink'
                  : 'tab-translucent text-white hover:bg-white/40',
              )}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <div id={`${tab.id}-panel`} role="tabpanel" aria-labelledby={`${tab.id}-tab`}>
        <BookingForm key={tab.id} submitLabel={tab.submit} />
      </div>
    </div>
  )
}

/* Split hero over a full-bleed coastal photograph under a navy wash: uppercase
   eyebrow and headline with the yellow CTA on the left, the tabbed booking
   widget on the right. */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy pt-[220px] pb-[120px]">
      <img
        src="https://picsum.photos/seed/tripquest-hero/1920/1080"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="overlay-navy absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1140px] items-center gap-[40px] px-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-[14px] font-normal uppercase tracking-[2px] text-white">
            Away from monotonous life
          </p>
          <h1 className="mt-[20px] font-display text-[38px] leading-[1.15] font-semibold uppercase text-white md:text-[48px] lg:text-[60px]">
            Magical Travel
          </h1>
          <p className="mt-[20px] max-w-[520px] text-[15px] leading-[1.8] text-white/90">
            Flights, stays and holiday packages in one place — then let our planners shape the days
            around what you actually want to see.
          </p>
          <ButtonLink href="#packages" className={cn(BUTTON_BASE, BUTTON_NAVY_HOVER, 'mt-[30px]')}>
            Get Started
          </ButtonLink>
        </div>
        <div className="lg:col-span-5">
          <BookingWidget />
        </div>
      </div>
    </section>
  )
}
