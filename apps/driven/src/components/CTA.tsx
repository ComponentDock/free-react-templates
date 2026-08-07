import { ButtonLink } from '@free-react-templates/ui'

export function CTA() {
  return (
    <section aria-label="Call to action" className="bg-lavender py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
          Very Useful & Friendly
        </h2>
        <p className="mt-6 leading-relaxed text-smoke dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#pricing"
            className="rounded-md bg-gradient-to-r from-primary-500 to-accent-400 px-9 py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get Started
          </ButtonLink>
          <ButtonLink
            href="#contact"
            className="rounded-md border border-gray-300 bg-white px-9 py-3.5 font-semibold text-ink transition-colors hover:border-primary-400 hover:text-primary-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
          >
            Sign up for free
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
