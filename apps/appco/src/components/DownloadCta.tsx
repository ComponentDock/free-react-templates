import { ButtonLink } from '@free-react-templates/ui'
import { Apple, Play } from 'lucide-react'

export function DownloadCta() {
  return (
    <section
      id="download"
      className="bg-gradient-to-r from-primary-600 to-accent py-20 dark:from-primary-800 dark:to-accent"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Our App Available For Any Device Download now
        </h2>
        <p className="mt-4 text-lg text-primary-50">
          Get Appco on iOS, Android, or the web — your workspace goes wherever you do.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink
            href="#download"
            className="rounded-full bg-white px-8 py-4 text-primary-700 hover:bg-primary-50"
          >
            <Apple className="h-5 w-5" aria-hidden="true" />
            Download App
          </ButtonLink>
          <ButtonLink
            href="#video"
            className="rounded-full border border-white/60 bg-transparent px-8 py-4 text-white hover:bg-white/10"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
            Watch Demo
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
