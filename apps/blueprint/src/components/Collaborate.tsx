import { Play } from 'lucide-react'

export function Collaborate() {
  return (
    <section
      id="works-band"
      aria-label="Collaborate"
      className="bg-primary-50 py-20 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
          Collaborate with your design team in a new way
        </h2>
        <p className="mt-6 leading-relaxed text-smoke dark:text-gray-400">
          Even the all-powerful Pointing has no control about the blind texts it is an almost
          unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
          decided to leave for the far World of Grammar.
        </p>
        <a
          href="https://vimeo.com/channels/staffpicks/93951774"
          target="_blank"
          rel="noreferrer"
          aria-label="Play demo video"
          className="mt-10 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary-400 shadow-lg ring-1 ring-primary-100 transition-colors hover:bg-primary-400 hover:text-white dark:bg-gray-800 dark:text-primary-300 dark:ring-gray-700"
        >
          <Play className="h-8 w-8 fill-current" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
