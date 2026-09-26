import { Download } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      {/* Large watermark text */}
      <div className="pointer-events-none absolute top-0 left-0 text-[10rem] font-bold leading-none text-gray-100 select-none md:text-[14rem]">
        About
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text side */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-navy md:text-4xl">About me</h2>
            <p className="mb-8 leading-relaxed text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
              Risus commodo viverra maecenas.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          {/* Image side */}
          <div className="relative">
            {/* Decorative color grid */}
            <div className="absolute -top-4 -left-4 grid grid-cols-4 gap-1 opacity-20">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-4"
                  style={{
                    backgroundColor: ['#615CFD', '#FF6B6B', '#4ECDC4', '#FFE66D'][i % 4],
                  }}
                />
              ))}
            </div>
            <img
              src="https://picsum.photos/seed/vizion-about/500/600"
              alt="About Vizion"
              className="relative rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
