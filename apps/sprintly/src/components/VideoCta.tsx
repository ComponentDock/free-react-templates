import { Play } from 'lucide-react'

export function VideoCta() {
  return (
    <section
      className="relative flex min-h-[400px] items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/sprintly-cta/1920/800')" }}
    >
      <div className="absolute inset-0 bg-dark-900/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6">
        <button
          type="button"
          aria-label="Play video"
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-500 text-brand-500 transition-colors hover:bg-brand-500 hover:text-white"
        >
          <Play className="h-8 w-8" />
        </button>
        <h2 className="mt-8 font-heading text-4xl font-bold uppercase text-white">
          Gym In Downtown
        </h2>
        <p className="mt-4 max-w-xl text-dark-200">
          Take a virtual tour of our world-class facility. See what makes Sprintly the top choice
          for fitness enthusiasts.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block rounded bg-brand-500 px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-600"
        >
          Get Started Today
        </a>
      </div>
    </section>
  )
}
