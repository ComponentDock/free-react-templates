import { ArrowRight } from 'lucide-react'

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative bg-navy py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/crane-cta/1600/400)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Are you looking for a Construction
          <br />
          and Industrial Experts?
        </h2>
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center gap-2 rounded bg-primary-400 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-500"
        >
          Contact Us
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
