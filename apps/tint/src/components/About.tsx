import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left — image with badge */}
          <div className="relative flex-1">
            <img
              src="https://picsum.photos/seed/tint-about/600/500"
              alt="Interior design workspace"
              className="w-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold-400 px-6 py-4 text-center shadow-lg">
              <span className="block text-3xl font-bold text-navy-800 font-[family-name:var(--font-condensed)]">
                26
              </span>
              <span className="text-xs font-medium uppercase tracking-wide text-navy-700">
                Years of Awesomeness
              </span>
            </div>
          </div>

          {/* Right — text */}
          <div className="flex-1">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-gold-500">
              About Our Company
            </span>
            <h2 className="mb-6 text-3xl font-bold text-navy-800 font-[family-name:var(--font-condensed)] md:text-4xl">
              We&apos;ve been Creating
              <br />
              Awesomeness Since 1998
            </h2>
            <p className="mb-6 leading-relaxed text-gray-500">
              Crafting spaces that inspire and elevate. Our team of seasoned professionals brings
              decades of experience in interior design, delivering projects that exceed expectations
              and stand the test of time.
            </p>
            <p className="mb-8 leading-relaxed text-gray-500">
              From concept to completion, we handle every detail with precision and care —
              transforming ordinary rooms into extraordinary living experiences.
            </p>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-gold-400 px-8 py-3 text-sm font-semibold text-navy-800 transition-colors hover:bg-gold-500"
            >
              Learn more about this
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
