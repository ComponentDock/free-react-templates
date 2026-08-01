import { ButtonLink } from '@free-react-templates/ui'

export function ErrorSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
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
