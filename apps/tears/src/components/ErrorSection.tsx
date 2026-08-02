import { ButtonLink } from '@free-react-templates/ui'

export function ErrorSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <svg
        viewBox="0 0 120 120"
        role="img"
        aria-label="Crying emoji face"
        className="h-36 w-36 drop-shadow-md sm:h-44 sm:w-44"
      >
        {/* face */}
        <circle cx="60" cy="60" r="52" fill="#fbbf24" />
        {/* closed sad eyes */}
        <path
          d="M32 46 Q 42 56 52 46"
          stroke="#78350f"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M68 46 Q 78 56 88 46"
          stroke="#78350f"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        {/* tear drops */}
        <path d="M38 54 Q 32 68 36 78 Q 39 85 46 84 Q 51 80 49 72 Q 47 62 38 54 Z" fill="#38bdf8" />
        <path d="M82 54 Q 76 68 80 78 Q 83 85 90 84 Q 95 80 93 72 Q 91 62 82 54 Z" fill="#38bdf8" />
        {/* frown mouth */}
        <path
          d="M44 92 Q 60 80 76 92"
          stroke="#78350f"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <h1 className="mt-8 text-8xl font-black tracking-tight text-primary-600 sm:text-9xl dark:text-primary-400">
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
