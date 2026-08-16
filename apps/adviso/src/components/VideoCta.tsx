import { Play } from 'lucide-react'

/** Split CTA: a large cover photo with a mint circular play button on the
 *  left, and details (heading, two paragraphs, dark Learn More button) on
 *  the right. The play button is a placeholder link (no real embed). */
export function VideoCta() {
  return (
    <section aria-labelledby="video-heading" className="grid grid-cols-1 lg:grid-cols-2">
      <div
        className="relative flex min-h-[480px] items-center justify-center bg-cover bg-center lg:min-h-[850px]"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/adviso-video/1200/900)',
        }}
      >
        <a
          href="#contact"
          aria-label="Play introduction video"
          className="relative flex h-25 w-25 items-center justify-center rounded-full bg-brand transition-transform hover:scale-105"
        >
          <span
            className="absolute inset-0 animate-ping rounded-full bg-brand/30"
            aria-hidden="true"
          />
          <Play className="relative h-10 w-10 fill-play text-play" aria-hidden="true" />
        </a>
      </div>
      <div className="flex items-center bg-white px-6 py-20 lg:px-25">
        <div className="max-w-xl">
          <h2
            id="video-heading"
            className="font-display text-3xl font-medium leading-tight text-ink lg:text-4xl"
          >
            We boost our clients&apos; bottom line by optimizing
          </h2>
          <p className="mt-6 text-base leading-relaxed">
            Every engagement starts with the numbers that matter: unit economics, funnel conversion
            and customer lifetime value. We optimise the levers that move them.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            The result is a compounding growth curve — not a one-off spike.
          </p>
          <div className="mt-10">
            <a href="#case-study" className="btn-dark-square">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
