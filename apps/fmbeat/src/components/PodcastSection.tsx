import { Play } from 'lucide-react'

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider relative inline-block pb-4">
        {children}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-yellow rounded" />
      </h2>
    </div>
  )
}

export function PodcastSection() {
  return (
    <section data-testid="podcast-section" className="bg-brand-dark-mid py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Latest Podcast</SectionTitle>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Album art */}
          <div className="w-full lg:w-1/3">
            <img
              src="https://picsum.photos/seed/fmbeat-album/400/400"
              alt="Album art"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          {/* Track info */}
          <div className="w-full lg:w-2/3">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Hernan Cataneo &mdash; Residence #376
            </h3>
            <p className="text-brand-text mb-6">
              Progressive house journey through the finest underground sounds. Three hours of pure
              musical bliss.
            </p>

            {/* Waveform visualization */}
            <div className="flex items-end gap-[2px] h-12 mb-6">
              {Array.from({ length: 60 }, (_, i) => {
                const height = 20 + Math.sin(i * 0.5) * 15 + Math.cos(i * 0.3) * 10
                return (
                  <div
                    key={i}
                    className="w-1 bg-brand-yellow/60 rounded-sm"
                    style={{ height: `${height}%` }}
                  />
                )
              })}
            </div>

            <button className="inline-flex items-center gap-2 bg-brand-yellow text-brand-text-dark font-bold text-base md:text-lg px-8 py-3 rounded-[5px] hover:bg-yellow-400 transition-colors">
              <Play size={18} fill="currentColor" />
              Listen Live
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { SectionTitle }
