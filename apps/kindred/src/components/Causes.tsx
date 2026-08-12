import { causes } from '../data'
import { ProgressBar } from './ProgressBar'

export function Causes() {
  return (
    <section id="causes" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-gray-900 dark:text-white lg:text-4xl">
            Our Priorities
          </h2>
          <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {causes.map((cause, index) => (
            <article
              key={cause.title}
              className="overflow-hidden rounded-sm border border-gray-100 shadow-sm dark:border-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/kindred-cause-${index + 1}/600/400`}
                alt={cause.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">
                  {cause.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {cause.blurb}
                </p>
                <p className="mt-4 text-sm font-semibold text-brand">$3,800 to go</p>
                <ProgressBar value={cause.progress} className="mt-3" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
