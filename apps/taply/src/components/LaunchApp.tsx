import { Rocket } from 'lucide-react'
import { launchApp } from '../data'

/** White section: rocket icon, "Launch your App" heading, paragraph and a
 *  Read more button next to a dual-phone image. */
export function LaunchApp() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <img
          src={launchApp.image}
          alt="Taply app on two phones"
          loading="lazy"
          className="w-full rounded-lg object-cover shadow-md"
        />
        <div>
          <span className="flex h-16 w-16 items-center justify-center rounded bg-gradient-to-tr from-brand to-brand-2 text-white">
            <Rocket className="h-8 w-8" aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-3xl font-medium text-brand-purple lg:text-4xl">
            {launchApp.heading}
          </h2>
          <p className="mt-5 leading-relaxed text-muted">{launchApp.text}</p>
          <a
            href="#gallery"
            className="mt-6 inline-block rounded bg-gradient-to-r from-brand to-brand-2 px-6 py-3 text-xs font-medium uppercase tracking-widest text-white shadow-lg transition-opacity hover:opacity-90"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  )
}
