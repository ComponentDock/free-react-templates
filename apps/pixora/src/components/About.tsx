import { ArrowRight, Sun } from 'lucide-react'
import { aboutImage } from '../data'

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 px-6 lg:flex-row">
        <div className="lg:w-1/2">
          <img
            src={aboutImage}
            alt="Golden-hour portrait photographed by Pixora"
            className="w-full max-w-md border-[15px_10px_85px_85px] border-transparent outline-10 outline-[#777] outline-offset-[-54px]"
          />
        </div>
        <div className="lg:w-1/2">
          <Sun className="h-8 w-8 text-brand" aria-hidden="true" />
          <h2 className="mt-4 text-4xl font-extralight leading-snug text-brand">
            <span className="font-semibold text-ink">Visually</span> clean &amp; Perfect
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted">
            We focus on the things people use every day without a second thought — and make them
            look incredible. From clean layouts to considered typography, every detail earns its
            place.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            Learn Details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
