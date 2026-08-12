import { Play } from 'lucide-react'
import { COUNTER_IMAGE, COUNTER_VIDEO_THUMB, COUNTER_VIDEO_URL, STAT_COUNTERS } from '../data'

/**
 * CounterVideo — background photo under a navy→orange gradient overlay:
 * video thumbnail with a white circular play button (opens the video in
 * a new tab) left, "Ivy University" heading with copy right, and four
 * white stat counters below (18 / 401 / 30 / 50).
 */
export function CounterVideo() {
  return (
    <section
      id="programs-section"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${COUNTER_IMAGE})` }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy/95 to-primary/85"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <figure className="relative">
            <img
              src={COUNTER_VIDEO_THUMB}
              alt="Campus life at Ivy University"
              className="w-full rounded-xl"
            />
            <a
              href={COUNTER_VIDEO_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Play the university video"
              className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-white transition-transform hover:scale-105"
            >
              <Play className="h-8 w-8 fill-primary text-primary" />
            </a>
          </figure>
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Ivy University</h2>
            <p className="mt-4 text-white/85">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {STAT_COUNTERS.map((counter) => (
            <div key={counter.label}>
              <span className="block text-4xl font-bold text-white md:text-5xl">
                {counter.value}
              </span>
              <span className="mt-2 block text-sm uppercase tracking-wide text-white/80">
                {counter.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
