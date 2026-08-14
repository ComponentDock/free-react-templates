import { ArrowRight, Check } from 'lucide-react'
import { aboutChecklist } from '../data'

/** "Want to know more" about block — paragraph, three-point checklist, and
 *  a "More About Us" button beside a learning illustration. */
export function AboutSection() {
  return (
    <section id="about" aria-label="About our company" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/orenda-about/640/520"
            alt="Students learning together"
            className="w-full rounded-sm object-cover shadow-xl"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            More About Our Company
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-title dark:text-white">
            Want to know more
          </h2>
          <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-300">
            We believe learning made simple means clear goals, real practice, and mentors who care —
            so every student can build the future they want.
          </p>
          <ul className="mt-6 space-y-3">
            {aboutChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-check text-white">
                  <Check aria-hidden="true" className="h-3 w-3" />
                </span>
                <span className="text-gray-700 dark:text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-sweep"
          >
            More About Us
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
