import { Play } from 'lucide-react'

/**
 * Centered intro section with a play icon and an author quote, matching the
 * original Mellisa template's quote-with-play-button pattern.
 */
export function IntroQuote() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <a
          href="#"
          aria-label="Play introduction video"
          className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand text-brand transition-colors hover:bg-brand hover:text-white"
        >
          <Play size={24} fill="currentColor" />
        </a>
        <blockquote className="font-serif text-2xl leading-relaxed text-gray-700 dark:text-gray-300 md:text-3xl">
          &ldquo;I&apos;m a Writer Based in England. Far far away, behind the word mountains, far
          from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;
        </blockquote>
      </div>
    </section>
  )
}
