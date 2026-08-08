import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
          Ready to Take the Next Step?
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Join thousands of professionals and companies already growing with Jobfield.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="#jobs" className="px-6 py-3 text-base">
            Find Jobs Now
          </ButtonLink>
          <ButtonLink href="#" variant="outline" className="px-6 py-3 text-base">
            Post a Job
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
