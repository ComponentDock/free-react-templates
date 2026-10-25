import { cn } from '@free-react-templates/ui'
import { PRIVACY, PRIVACY_CALLOUT } from '../content'
import { SectionHead } from './SectionHead'

/**
 * Six defaults, read-only: the switch glyphs are `role="img"` with the status
 * line as their name, because the page sells defaults rather than offering
 * settings.
 */
export function Privacy() {
  return (
    <section id="privacy" aria-label="Privacy defaults" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHead
          pill="Privacy"
          title="The settings other networks bury"
          lede="These are the defaults, not the options. Every one of them ships switched to the private side."
        />

        <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
          {PRIVACY.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5"
            >
              <span
                role="img"
                aria-label={item.status}
                className={cn(
                  'mt-0.5 flex h-6 w-11 flex-none items-center rounded-full p-1',
                  item.on ? 'justify-end bg-primary-600' : 'justify-start bg-gray-200',
                )}
              >
                <span className="block h-4 w-4 rounded-full bg-white shadow" />
              </span>
              <div className="min-w-0">
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.body}</p>
                <p className="mt-2 text-xs font-semibold tracking-wide text-primary-600 uppercase">
                  {item.status}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-5xl rounded-2xl border border-primary-200 bg-primary-50 p-5 text-sm leading-relaxed text-gray-700">
          {PRIVACY_CALLOUT}
        </p>
      </div>
    </section>
  )
}
