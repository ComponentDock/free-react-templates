import { Check } from 'lucide-react'
import { appSection } from '../data'

/** Light "Get the App now!" section: phone photo on the left, heading,
 *  three pink check-bullets, and App Store / Google Play badges on the
 *  right. */
export function AppSection() {
  return (
    <section aria-label="Get the app" className="bg-light py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src={appSection.image}
            alt=""
            className="mx-auto h-[480px] w-auto rounded-lg object-cover"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <h2 className="text-4xl font-bold text-ink md:text-[48px]">{appSection.eyebrow}</h2>
          <p className="mt-3 text-lg text-muted">{appSection.subline}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {appSection.description}
          </p>

          <ul className="mt-8 space-y-4">
            {appSection.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-center gap-4 bg-brand py-2.5 pl-7 pr-4 text-[15px] text-white"
              >
                <Check className="h-5 w-5 shrink-0" strokeWidth={3} />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#home"
              className="flex items-center gap-3 border-2 border-ink px-6 py-3 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <AppleLogo className="h-6 w-6" />
              App Store
            </a>
            <a
              href="#home"
              className="flex items-center gap-3 border-2 border-ink px-6 py-3 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <PlayLogo className="h-6 w-6" />
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

function PlayLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M4 2.69v18.62c0 .58.62.94 1.11.64l15.5-9.31c.48-.29.48-1 0-1.28L5.11 2.05c-.49-.3-1.11.06-1.11.64z" />
    </svg>
  )
}
