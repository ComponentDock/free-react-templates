import { ButtonLink } from '@free-react-templates/ui'
import { SocialLinks } from './SocialLinks'

export function ErrorSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 sm:px-6">
      <div
        role="img"
        aria-label="Spark illustration"
        className="animate-flicker mb-8 flex h-44 w-44 items-center justify-center text-violet-400"
      >
        <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
          <circle cx="100" cy="100" r="18" fill="currentColor" />
          <path
            d="M100 30 L112 82 L162 100 L112 118 L100 170 L88 118 L38 100 L88 82 Z"
            fill="currentColor"
          />
          <circle cx="42" cy="44" r="10" fill="currentColor" className="text-violet-300" />
          <circle cx="162" cy="52" r="8" fill="currentColor" className="text-violet-300" />
          <circle cx="154" cy="146" r="12" fill="currentColor" className="text-violet-300" />
          <circle cx="46" cy="150" r="7" fill="currentColor" className="text-violet-300" />
        </svg>
      </div>
      <h1 className="font-display text-7xl font-bold tracking-tight text-violet-500 sm:text-8xl">
        404
      </h1>
      <h2 className="mt-4 font-display text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-white">
        Page not found
      </h2>
      <p className="mt-4 max-w-xl text-center text-base text-gray-700 dark:text-gray-300">
        The page you are looking for might have been moved, deleted, or never existed. Don&apos;t
        worry — even a flicker can light the way home.
      </p>
      <ButtonLink href="/" size="md" className="mt-8">
        Back to home
      </ButtonLink>
      <div className="mt-10">
        <SocialLinks />
      </div>
    </section>
  )
}
