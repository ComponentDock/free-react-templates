import { Play } from 'lucide-react'

const stats = [
  { number: '25+', label: 'Years of Excellence' },
  { number: '10K+', label: 'Satisfied Clients' },
  { number: '150+', label: 'Expert Tailors' },
]

export function History() {
  return (
    <section id="history" className="bg-midnight py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Video / image side */}
          <div className="relative overflow-hidden rounded-sm">
            <img
              src="https://picsum.photos/seed/sartorial-history/600/400"
              alt="Our workshop"
              className="h-full w-full object-cover"
            />
            <button
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
            >
              <Play size={24} fill="white" />
            </button>
          </div>

          {/* Text side */}
          <div>
            <span className="font-script text-3xl text-brand">Our History</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
              The Art of Tailoring
            </h2>
            <p className="mt-6 leading-relaxed text-mist">
              For over two decades, we have crafted bespoke garments that combine traditional
              artistry with modern sensibility. Our workshop is where precision meets passion —
              every suit tells a story of dedication and mastery passed down through generations.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-brand">{stat.number}</div>
                  <div className="mt-1 text-sm text-mist">{stat.label}</div>
                </div>
              ))}
            </div>
            <a
              href="#services"
              className="mt-10 inline-block border border-brand bg-transparent px-8 py-4 font-display text-sm font-semibold uppercase tracking-[3px] text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
