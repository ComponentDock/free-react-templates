import { Play } from 'lucide-react'
import { aboutParagraphs } from '../data'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20">
      {/* Decorative pale-blue pattern behind the split. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 text-tint"
      >
        <circle cx="100" cy="100" r="90" fill="currentColor" opacity="0.5" />
        <circle cx="60" cy="60" r="40" fill="currentColor" opacity="0.4" />
      </svg>

      <div className="relative mx-auto grid max-w-[1250px] items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/amplify-about/640/520"
            alt="Our team collaborating around a planning table"
            className="w-full rounded-xl object-cover"
          />
          <a
            href="https://www.youtube.com/watch?v=sc5i8VqG1DU"
            aria-label="Play video"
            target="_blank"
            rel="noreferrer"
            className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-[0_10px_40px_rgba(21,131,233,0.3)] transition-transform hover:scale-105"
          >
            <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
          </a>
        </div>

        <div>
          <h2 className="mb-6 text-3xl leading-snug font-normal text-ink md:text-4xl">
            We&apos;re a Agency Team &amp; Digital Marketing
          </h2>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mb-4 leading-relaxed text-body">
              {paragraph}
            </p>
          ))}
          <a
            href="#services"
            className="mt-4 inline-flex h-[50px] min-w-[160px] items-center justify-center rounded-[50px] bg-brand px-8 text-base font-semibold text-white transition-all hover:bg-white hover:text-brand hover:shadow-[0_6px_50px_8px_rgba(21,131,233,0.15)]"
          >
            Start Exploring
          </a>
        </div>
      </div>
    </section>
  )
}
