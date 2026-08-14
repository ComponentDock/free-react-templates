import { ArrowRight } from 'lucide-react'
import { aboutParagraphs } from '../data'

export function About() {
  return (
    <section
      id="about"
      aria-label="About the Phoenix"
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/slugger-about/1600/900')" }}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(105deg,rgba(0,189,86,0.25)_50%,rgba(32,125,255,0.25)_50%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-bold uppercase text-white md:text-5xl">
            About the <span className="text-brand">Phoenix</span>
          </h2>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-4 leading-relaxed text-white/80">
              {paragraph}
            </p>
          ))}
          <a
            href="#games"
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:text-white"
          >
            Watch Game <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <img
          src="https://picsum.photos/seed/slugger-team/600/500"
          alt="The Sluggers team in action"
          className="w-full rounded-md object-cover shadow-2xl"
        />
      </div>
    </section>
  )
}
