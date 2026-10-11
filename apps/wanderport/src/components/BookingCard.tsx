import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { FIELD_CLASS, PILL_ARROW, PILL_BASE, PILL_PRIMARY } from '../lib/buttonStyles'

const TABS = [
  { id: 'flights', label: 'flights', title: 'Book Your Flights' },
  { id: 'hotels', label: 'hotels', title: 'Book Your Hotels' },
  { id: 'flights-hotels', label: 'flights+hotels', title: 'Book Your Flights & Hotels' },
  { id: 'holidays', label: 'Holidays', title: 'Book Your Holidays' },
] as const

type TabId = (typeof TABS)[number]['id']

/* Two half-width fields (route) followed by four quarter-width ones (dates and
   party size) on the 12-column grid. */
const FIELDS = [
  { name: 'from', label: 'From', span: 'sm:col-span-6' },
  { name: 'to', label: 'To', span: 'sm:col-span-6' },
  { name: 'start', label: 'Start', span: 'sm:col-span-3' },
  { name: 'return', label: 'Return', span: 'sm:col-span-3' },
  { name: 'adults', label: 'Adults', span: 'sm:col-span-3' },
  { name: 'child', label: 'Child', span: 'sm:col-span-3' },
] as const

/* White booking card lifted 42px over the hero's bottom edge: the four
   translucent tabs read against the photograph, the active tab merges into
   the panel below, and each panel carries the same six-field enquiry form. */
export function BookingCard() {
  const [activeTab, setActiveTab] = useState<TabId>('flights')
  const active = TABS.filter((tab) => tab.id === activeTab)[0]!

  return (
    <section id="booking" className="relative -mt-[42px]">
      <div className="mx-auto max-w-[780px] px-4 sm:px-6">
        <ul
          role="tablist"
          aria-label="Booking type"
          className="flex flex-wrap justify-center bg-transparent"
        >
          {TABS.map((tab) => (
            <li key={tab.id} role="presentation">
              <button
                type="button"
                role="tab"
                id={`booking-tab-${tab.id}`}
                aria-selected={tab.id === activeTab}
                aria-controls={`booking-panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'rounded-none px-[20px] py-[10px] text-[12px] font-semibold uppercase transition-colors duration-300 sm:px-[35px]',
                  tab.id === activeTab
                    ? 'bg-white text-ink'
                    : 'bg-tab text-white hover:bg-tab hover:text-white',
                )}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div
          role="tabpanel"
          id={`booking-panel-${active.id}`}
          aria-labelledby={`booking-tab-${active.id}`}
          className="card-shadow bg-white px-[20px] py-[28px] sm:px-[30px]"
        >
          <h4 className="pt-[20px] pr-[25px] pb-[20px] text-[18px]">{active.title}</h4>
          <form
            aria-label={active.title}
            noValidate
            onSubmit={(event) => event.preventDefault()}
            className="grid grid-cols-1 gap-x-[15px] sm:grid-cols-12"
          >
            {FIELDS.map((field) => (
              <div key={field.name} className={field.span}>
                <label className="sr-only" htmlFor={`${active.id}-${field.name}`}>
                  {field.label}
                </label>
                <input
                  id={`${active.id}-${field.name}`}
                  name={field.name}
                  type="text"
                  placeholder={field.label}
                  className={cn(FIELD_CLASS, 'mb-[30px] h-[48px] px-[25px]')}
                />
              </div>
            ))}
            <div className="flex justify-end sm:col-span-12">
              <Button type="submit" className={cn(PILL_BASE, PILL_PRIMARY)}>
                Send Message
                <ArrowRight className={PILL_ARROW} aria-hidden="true" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
