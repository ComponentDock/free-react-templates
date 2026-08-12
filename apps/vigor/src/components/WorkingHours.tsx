import { WORKING_HOURS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * WorkingHours — weekly schedule list: day/hour rows separated by 3px
 * `#eaeaea` rules that turn brand green on hover.
 */
export function WorkingHours() {
  return (
    <section id="hours" className="mx-auto max-w-3xl px-4 pt-25 lg:px-8">
      <SectionHeading kicker="Vigor" title="Working Hours" />
      <ul>
        {WORKING_HOURS.map((row) => (
          <li
            key={row.day}
            className="flex items-center justify-between border-b-[3px] border-line py-4 text-sm font-semibold text-ink transition-colors hover:text-brand"
          >
            <span>{row.day}</span>
            <span>{row.hours}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
