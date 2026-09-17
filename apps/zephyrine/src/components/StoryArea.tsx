import { ArrowRight } from 'lucide-react'

export function StoryArea() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(0deg, #e66587, #f09458)' }}>
      <div className="max-w-[68.75%] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-white text-3xl md:text-4xl font-semibold uppercase">
            Our Untold Story
          </h2>
        </div>
        <div>
          <h3 className="text-white text-xl font-medium mb-4">From the part of beginning</h3>
          <p className="text-white/85 text-sm leading-relaxed mb-6">
            We started with a simple vision: to create extraordinary digital experiences that push
            the boundaries of creativity. Over the years, we have evolved into a full-service
            creative agency delivering results that matter.
          </p>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 bg-white text-[#e66686] font-medium px-8 py-3 rounded-[20px] hover:bg-gray-100 transition-colors text-sm"
          >
            Get Started
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
