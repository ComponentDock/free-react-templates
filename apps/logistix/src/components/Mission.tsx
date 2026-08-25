import { ArrowRight } from 'lucide-react'

export function Mission() {
  return (
    <section className="overflow-hidden bg-gray-900">
      <div className="mx-auto grid max-w-7xl items-center gap-0 lg:grid-cols-2">
        {/* Left: Text */}
        <div className="px-6 py-16 sm:px-12 lg:py-20">
          <p className="mb-4 text-sm font-medium uppercase text-brand">Our Mission</p>
          <blockquote className="mb-8 text-lg leading-relaxed text-gray-300 italic">
            &ldquo;We are able to handle any size load, to-and-from anywhere and within any service
            time frame has made you our best and bring to the table win-win.&rdquo;
          </blockquote>
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-brand px-6 py-3 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Learn More
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Right: Image */}
        <div
          className="h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/logistix-mission/800/500)',
          }}
        />
      </div>
    </section>
  )
}
