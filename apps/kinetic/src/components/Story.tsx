import { ArrowRight } from 'lucide-react'

export function Story() {
  return (
    <section id="about" className="bg-gradient-to-r from-primary-400 to-teal-400 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl">
          <h6 className="mb-4 text-xs font-medium uppercase tracking-wider text-white/80">
            From the part of beginning
          </h6>
          <p className="mb-6 text-sm font-light leading-relaxed text-white/90">
            Usage of the Internet is becoming more common due to rapid advancement of technology and
            the power of globalization. Societies are becoming more inter-connected. Thoughts from
            different parts of the world can be shared and exchanged through the digital world.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <span>Get Started</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
