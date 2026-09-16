import { Play } from 'lucide-react'
import { sermons } from '../data'

export function Sermons() {
  return (
    <section id="sermons" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-ink">Watch our sermons</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {sermons.map((s) => (
            <div key={s.title}>
              <div
                className="group relative mb-4 flex aspect-video items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url('${s.image}')` }}
              >
                <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/50" />
                <button
                  type="button"
                  aria-label={`Play ${s.title}`}
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <Play className="ml-0.5 h-6 w-6" />
                </button>
              </div>
              <h3 className="text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-1 text-sm text-body">{s.speaker}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded-[2px] border-2 border-brand px-8 py-3.5 text-xs font-bold uppercase tracking-[1px] text-brand transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            Watch all sermons
          </a>
        </div>
      </div>
    </section>
  )
}
