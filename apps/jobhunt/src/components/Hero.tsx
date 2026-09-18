import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-bg-gray pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <span className="text-text-muted text-lg font-medium block mb-5">
              Easiest way to find a perfect job
            </span>
            <h1 className="text-brand-dark text-5xl lg:text-7xl font-bold leading-tight mb-10">
              Find Your Next Dream Job
            </h1>
            <div className="flex flex-wrap gap-5">
              <a
                href="#"
                className="border-2 border-brand text-brand px-10 py-5 rounded text-sm font-bold uppercase tracking-widest hover:bg-brand hover:text-white transition-colors shadow-lg shadow-brand/10"
              >
                Looking For a Job?
              </a>
              <a
                href="#"
                className="bg-brand-green text-white px-9 py-5 rounded text-xl font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Find Talent
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Right illustration placeholder */}
          <div className="relative hidden lg:block">
            <img
              src="https://picsum.photos/seed/jobhunt-hero/772/586"
              alt="Job search illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Watermark text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-brand/5 text-[120px] font-bold uppercase pointer-events-none select-none">
          jobs
        </div>
      </div>
    </section>
  )
}
