import { ButtonLink } from '@free-react-templates/ui'

export function ErrorSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <svg
        role="img"
        aria-label="Rocket in orbit"
        viewBox="0 0 160 120"
        className="mb-8 h-32 w-40 text-primary-600 dark:text-primary-400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="130" cy="20" r="14" className="fill-primary-200 dark:fill-primary-900" />
        <circle cx="130" cy="20" r="6" className="fill-primary-500" />
        <path
          d="M70 110c6-18 8-34 4-46l10-8 4-6 4 6 10 8c-4 12-2 28 4 46H70Z"
          className="fill-primary-100 stroke-primary-400 dark:fill-primary-900/60 dark:stroke-primary-500"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M88 40c10-14 26-22 40-24-2 14-10 30-24 40l-6-4-10-12Z"
          className="fill-primary-200 dark:fill-primary-900"
        />
        <path
          d="M80 92c-4-6-6-14-4-20l12 8c-4 4-6 10-8 12Z"
          className="fill-primary-300 dark:fill-primary-700"
        />
        <path
          d="M88 44l-14-10M74 52l-16-4M90 62l-18 2"
          className="stroke-primary-300 dark:stroke-primary-700"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <h1 className="text-8xl font-black tracking-tight text-primary-600 sm:text-9xl dark:text-primary-400">
        404
      </h1>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Page not found
      </h2>
      <p className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
        The page you are looking for might have been moved or no longer exists.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back to home
      </ButtonLink>
    </section>
  )
}
