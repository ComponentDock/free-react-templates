import { CheckCircle } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const checklist = [
  'Far far away, behind the word mountains',
  'Separated they live in Bookmarksgrove',
  'Bookmarksgrove right at the coast of the Semantics',
  'Behind the word mountains',
  'Live the blind texts',
] as const

export function WebResources() {
  return (
    <section aria-label="Web resources" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-1">
            <img
              src="https://picsum.photos/seed/plumb-resources/640/720"
              alt="Web resources illustration"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-display text-2xl font-bold text-ink">Web Resources</h2>
            <p className="mt-4 text-base leading-relaxed text-smoke">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <span className="font-display text-4xl font-bold text-primary-400">99%</span>
                <p className="mt-1 text-sm text-smoke">Success rate</p>
              </div>
              <div>
                <span className="font-display text-4xl font-bold text-primary-400">20391</span>
                <p className="mt-1 text-sm text-smoke">Happy Customers</p>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-smoke">
                  <CheckCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary-400"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ButtonLink
                href="#contact"
                className="inline-block rounded-full bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
              >
                Contact us
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
