import { Play } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-500">
              Brand new app to blow your mind
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              We've made a life that will change you
            </h2>
            <p className="mb-3 text-sm font-medium text-primary-500">
              We are here to listen from you deliver excellence
            </p>
            <p className="mb-6 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
            </p>
            <a
              href="#services"
              className="inline-block rounded bg-primary-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary-600"
            >
              Get Started Now
            </a>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-xl bg-primary-500/10" />
            <img
              src="https://picsum.photos/seed/ticktock-about/600/400"
              alt="Smartwatch being used"
              className="relative rounded-xl object-cover shadow-lg"
              loading="lazy"
              decoding="async"
            />
            <button
              type="button"
              aria-label="Play video"
              className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white shadow-xl transition hover:bg-primary-600"
            >
              <Play className="h-6 w-6 ml-1" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
