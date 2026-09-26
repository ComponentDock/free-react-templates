import { ArrowRight } from 'lucide-react'

export function Parallax() {
  return (
    <section className="relative py-24">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/shotwise-para/1600/600)' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex justify-end">
          <div className="max-w-lg">
            <h2 className="text-3xl font-light text-white">
              Reasons To <br />
              <span className="font-semibold">Choose</span> Shotwise
            </h2>
            <p className="mt-5 leading-relaxed text-white/90">
              Here, we focus on a range of items and features that we use in life without giving
              them a second thought. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white px-7 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-ink"
            >
              Get Started
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
