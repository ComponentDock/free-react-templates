import { ArrowRight } from 'lucide-react'

export function Story() {
  return (
    <section
      className="py-20 text-white"
      style={{ background: 'linear-gradient(0deg, #e66587 0%, #f09458 100%)' }}
    >
      <div className="mx-auto max-w-[69%] px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left: title column (25%) */}
        <div className="md:col-span-1">
          <p className="uppercase text-xs tracking-[0.2em] mb-2 font-light opacity-90">
            Re-imagining the way
          </p>
          <h2 className="text-2xl font-semibold">Our Untold Story</h2>
        </div>

        {/* Right: content column (75%) */}
        <div className="md:col-span-3">
          <h3 className="text-xl font-medium mb-4">A Journey of Creativity</h3>
          <p className="text-sm leading-relaxed text-white/90 mb-6">
            We started as a small team of passionate designers and developers with a vision to
            reimagine how creative agencies operate. Over the years, we have grown into a
            full-service digital agency, helping brands transform their digital presence with bold,
            innovative solutions that stand out in a crowded marketplace.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[--color-brand] text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Get Started <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
