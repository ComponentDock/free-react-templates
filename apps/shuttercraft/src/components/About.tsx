import { Camera } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-paper py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <img
            src="https://picsum.photos/seed/shuttercraft-about/600/700"
            alt="Photographer portrait"
            className="w-full rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-semibold text-ink md:text-4xl">
            We Believe That Great Photography Tells a Story
          </h2>
          <p className="mb-8 leading-relaxed text-ink-light">
            Every photograph holds a narrative waiting to be discovered. From the quiet moments of
            everyday life to the grandeur of untouched landscapes, our lens captures the world as it
            truly is — raw, beautiful, and endlessly inspiring. We combine technical precision with
            artistic vision to deliver images that resonate long after they're seen.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-green px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Camera className="h-4 w-4" />
            Hire Me Now
          </a>
        </div>
      </div>
    </section>
  )
}
