import { Sparkles } from 'lucide-react'

export function AboutOne() {
  return (
    <section id="about" className="bg-paper py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orchid text-white shadow-lg">
            <Sparkles className="h-9 w-9" aria-hidden="true" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold leading-snug text-navy dark:text-white sm:text-4xl">
            You have the power to personalize your website coding.
          </h2>
          <p className="mt-5 leading-relaxed text-muted dark:text-gray-400">
            What if you could get all your website tasks off your plate and focus only on the fun
            stuff? Appli lets you scale your marketing and grow faster without becoming a designer
            or developer yourself.
          </p>
          <a
            href="#features"
            className="mt-6 inline-block text-base font-semibold text-primary-600 underline underline-offset-4 transition-colors hover:text-primary-700"
          >
            See how it work
          </a>
        </div>
        <img
          src="https://picsum.photos/seed/appli-about-1/800/700"
          alt="Appli personalization dashboard"
          className="w-full rounded-2xl shadow-xl"
        />
      </div>
    </section>
  )
}
