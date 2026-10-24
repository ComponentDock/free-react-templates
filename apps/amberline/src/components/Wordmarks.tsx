import { SectionHeading } from './SectionHeading'
import { wordmarks } from '../data'

export function Wordmarks() {
  return (
    <section className="bg-band pt-24 pb-0 lg:pt-32">
      <div className="mx-auto max-w-[1320px] px-4">
        <SectionHeading eyebrow="Our clients" title="Companies We've Worked With" />
        <ul className="mt-12 grid grid-cols-2 gap-y-8 pb-16 sm:grid-cols-3 lg:grid-cols-6">
          {wordmarks.map((wordmark) => (
            <li
              key={wordmark}
              className="text-center text-[22px] font-semibold tracking-[0.08em] text-ink/30 uppercase"
            >
              {wordmark}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
