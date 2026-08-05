import { ButtonLink } from '@free-react-templates/ui'
import { Apple, Download } from 'lucide-react'

export function Cta() {
  return (
    <section id="download" className="bg-gradient-to-r from-primary-600 to-primary-500 py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Get start from now and increase productivity
        </h2>
        <p className="mt-5 text-primary-100">
          Firmament morning sixth subdue darkness creeping gathered divide — join thousands of teams
          already working smarter with Applab.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink
            href="#home"
            className="rounded-full border-2 border-white bg-white px-8 py-4 text-primary-700 hover:bg-primary-50"
          >
            <Apple className="h-5 w-5" aria-hidden="true" />
            Download from Apple Store
          </ButtonLink>
          <ButtonLink
            href="#home"
            variant="outline"
            className="rounded-full border-white px-8 py-4 text-white hover:bg-white/10"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            Download from Play Store
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
