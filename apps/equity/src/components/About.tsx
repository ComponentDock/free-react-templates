import { Play } from 'lucide-react'
import { about, counters } from '../data'

/** About section (reference `.site-section`): a video figure with a round
 *  white play button on the left, welcome copy + Read More on the right, and
 *  a row of four stat counters below. */
export function About() {
  return (
    <section id="about" aria-label="About" className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <img
            src={about.image}
            alt="Equity team at work"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <a
            href="https://www.youtube.com/watch?v=wbnaHgSttVo"
            target="_blank"
            rel="noreferrer"
            aria-label="Watch our video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-transform hover:scale-105">
              <Play className="h-8 w-8 fill-primary-600 text-primary-600" aria-hidden="true" />
            </span>
          </a>
        </div>

        <div>
          <h2 className="font-heading text-4xl font-bold text-primary-600">{about.heading}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 leading-relaxed text-[#939393]">
              {paragraph}
            </p>
          ))}
          <a
            href="#services"
            className="mt-8 inline-block text-sm font-semibold text-primary-600 underline-offset-4 hover:underline"
          >
            Read More
          </a>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-10 text-center md:grid-cols-4">
        {counters.map(({ value, label }) => (
          <div key={label}>
            <p className="font-heading text-4xl font-bold text-primary-600">{value}</p>
            <span
              className="mx-auto mt-2 block h-[3px] w-[50px] bg-primary-600"
              aria-hidden="true"
            />
            <p className="mt-3 text-sm font-semibold tracking-[0.05em] text-[#25262a]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
