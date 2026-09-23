import { Play } from 'lucide-react'

export function VideoIntro() {
  return (
    <section id="about" className="bg-surface-alt py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 lg:flex-row lg:px-8">
        <div className="flex-1">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
            Brand new app to blow your mind
          </p>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-body md:text-4xl">
            We have made a life
            <br />
            that will change you
          </h2>
          <p className="mb-4 text-muted">We are here to listen from you and deliver excellence</p>
          <p className="mb-8 max-w-md text-muted">
            Our latest innovations in smartwatch technology bring together style, performance, and
            connectivity in ways you have never seen before.
          </p>
          <a
            href="#products"
            className="inline-block rounded-full bg-body px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-gray-800"
          >
            Get Started Now
          </a>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <img
            src="https://picsum.photos/seed/bezel-video/600/400"
            alt="Product showcase"
            className="rounded-xl object-cover"
            loading="lazy"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
          >
            <Play className="ml-1 h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
