import { cn } from '@free-react-templates/ui'
import { INTRO_COLUMNS } from '../data'

export function IntroBanner() {
  return (
    <section className="bg-[#3f52e3] py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 text-center md:grid-cols-3">
        {/* Column 1: text */}
        <div>
          <h3 className="mb-2 text-lg font-bold text-white">{INTRO_COLUMNS[0].heading}</h3>
          <p className="text-sm text-white/80">{INTRO_COLUMNS[0].text}</p>
        </div>

        {/* Column 2: contact */}
        <div>
          <h3 className="mb-2 text-lg font-bold text-white">{INTRO_COLUMNS[1].heading}</h3>
          <p className="text-sm text-white/80">{INTRO_COLUMNS[1].text}</p>
          <a
            href={INTRO_COLUMNS[1].link}
            className="text-sm text-white underline hover:text-white/80"
          >
            {INTRO_COLUMNS[1].linkText}
          </a>
        </div>

        {/* Column 3: CTA */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">{INTRO_COLUMNS[2].heading}</h3>
          <a
            href={INTRO_COLUMNS[2].buttonHref}
            className={cn(
              'inline-block rounded bg-white px-6 py-2 text-sm font-semibold text-[#3f52e3] transition-colors hover:bg-white/90',
            )}
          >
            {INTRO_COLUMNS[2].button}
          </a>
        </div>
      </div>
    </section>
  )
}
