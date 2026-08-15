import { logoWordmarks } from '../data'

export function LogoStrip() {
  return (
    <section aria-label="Brand partners" className="py-[70px] pb-[120px]">
      <ul className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-10 px-4">
        {logoWordmarks.map((word) => (
          <li key={word}>
            <span className="font-display text-2xl font-semibold uppercase tracking-widest text-brand opacity-10 transition-opacity duration-300 hover:opacity-100">
              {word}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
