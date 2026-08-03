import { ButtonLink } from '@free-react-templates/ui'
import { SocialLinks } from './SocialLinks'

export function ErrorSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 sm:px-6">
      <div
        role="img"
        aria-label="Cloud illustration"
        className="mb-8 flex h-40 w-40 items-center justify-center"
      >
        <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
          <ellipse cx="100" cy="78" rx="72" ry="30" fill="currentColor" className="text-sky-200" />
          <circle cx="80" cy="55" r="30" fill="currentColor" className="text-sky-100" />
          <circle cx="125" cy="52" r="24" fill="currentColor" className="text-sky-100" />
        </svg>
      </div>
      <h1 className="font-display text-7xl font-bold tracking-tight text-sky-500 sm:text-8xl">
        404
      </h1>
      <h2 className="mt-4 font-display text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-white">
        Page not found
      </h2>
      <p className="mt-4 max-w-xl text-center text-base text-gray-700 dark:text-gray-300">
        The page you are looking for might have been removed had its name changed or is temporarily
        unavailable. Don&apos;t worry — even the sky clears up.
      </p>
      <ButtonLink href="/" size="lg" className="mt-8">
        Back to home
      </ButtonLink>
      <div className="mt-10">
        <SocialLinks />
      </div>
    </section>
  )
}
