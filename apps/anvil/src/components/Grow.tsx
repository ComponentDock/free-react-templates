import { CheckCircle2, Quote } from 'lucide-react'

const checklist = [
  'Magnam iure fugit recusandae',
  'Officiis laboriosam repudiandae',
  'Quis nostrum numquam',
] as const

export function Grow() {
  return (
    <section
      id="news"
      className="border-t border-black/5 bg-white py-16 dark:border-white/10 dark:bg-gray-950 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="font-mono text-sm font-medium uppercase tracking-[3px] text-brand">
            Growth
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-ink dark:text-white sm:text-4xl">
            Let&apos;s grow together
          </h2>
          <p className="mt-4 leading-relaxed text-ink/60 dark:text-white/60">
            Magnam iure fugit recusandae nobis a amet, officiis laboriosam repudiandae? Quis nostrum
            numquam ducimus quo ab laboriosam qui expedita, cupiditate ex, sed dignissimos facere
            provident dolores, eius distinctio quas aliquid.
          </p>
          <ul className="mt-8 space-y-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-ink/80 dark:text-white/80">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-sm font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="rounded-lg bg-paper p-8 dark:bg-gray-900">
          <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
          <blockquote className="mt-4 text-lg font-light leading-relaxed text-ink dark:text-white">
            Magnam iure fugit recusandae nobis a amet, officiis laboriosam repudiandae? Quis nostrum
            numquam ducimus quo ab laboriosam qui expedita, cupiditate ex, sed dignissimos facere
            provident dolores, eius distinctio quas aliquid.
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <img
              src="https://picsum.photos/seed/anvil-john/64/64"
              alt="Portrait of John Doe"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-display text-sm font-bold text-ink dark:text-white">John doe</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                CEO, XYZ Inc
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
