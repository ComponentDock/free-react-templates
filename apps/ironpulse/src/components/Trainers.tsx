import { Plus } from 'lucide-react'
import {
  trainers,
  trainersEyebrow,
  trainersRole,
  trainersSeeAllLabel,
  trainersTitle,
} from '../data'

export function Trainers() {
  return (
    <section
      id="trainers-section"
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/ironpulse-hero2/1920/900)' }}
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1200px] px-5">
        <div className="mb-20 flex items-end justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[6px] text-brand">
              {trainersEyebrow}
            </p>
            <h2 className="mt-3 text-5xl font-bold uppercase tracking-[6px] text-white">
              {trainersTitle}
            </h2>
          </div>
          <a
            href="#events-section"
            className="hidden bg-dark px-[50px] py-5 text-sm font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-brand md:inline-block"
          >
            {trainersSeeAllLabel}
          </a>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {trainers.map((trainer) => (
            <article key={trainer.name} className="text-center">
              <div className="group relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={`${trainer.name} — ${trainersRole}`}
                  className="h-[380px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute left-0 top-0 flex h-full w-[76px] -translate-x-full items-center justify-center bg-brand transition-transform duration-300 group-hover:translate-x-0">
                  <a
                    href="#events-section"
                    aria-label={`Book a session with ${trainer.name}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white"
                  >
                    <Plus className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <h3 className="mt-12 text-lg font-bold uppercase tracking-[1.5px] text-white">
                {trainer.name}
              </h3>
              <p className="mt-2 text-[15px] text-white/60">{trainersRole}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
