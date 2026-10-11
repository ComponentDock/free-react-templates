import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { VIDEO } from '../data/content'

export function VideoCta() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative overflow-hidden pb-24 pt-48">
      <img
        src="https://picsum.photos/seed/alpinora-video/1920/900"
        alt="Sunset over a coastal road"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="bg-brand-gradient absolute inset-0 opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <button
          type="button"
          aria-label="Play showreel video"
          onClick={() => setOpen(true)}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white/10"
        >
          <Play aria-hidden="true" className="h-6 w-6" />
        </button>

        <div className="mt-28 text-right">
          <h3 className="text-lg font-semibold uppercase tracking-[2px] text-white">
            {VIDEO.title}
          </h3>
          <h4 className="mt-2 font-light text-white">{VIDEO.subtitle}</h4>
        </div>
      </div>

      {open ? (
        <div
          role="dialog"
          aria-label="Showreel video"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
        >
          <div className="relative w-full max-w-3xl bg-black">
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setOpen(false)}
              className="absolute -top-11 right-0 text-white transition-colors hover:text-white/70"
            >
              <X aria-hidden="true" className="h-7 w-7" />
            </button>
            <div className="flex aspect-video items-center justify-center text-white">
              <p className="font-light">Alpinora showreel — sit back and enjoy the ride.</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
