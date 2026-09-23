import { Film, Sparkles, Monitor, Clock, Lightbulb, Volume2 } from 'lucide-react'

const features = [
  { icon: Film, label: 'Video Editing' },
  { icon: Sparkles, label: 'Premium Clear' },
  { icon: Monitor, label: 'For All Displays' },
  { icon: Clock, label: 'Right On Time' },
  { icon: Lightbulb, label: 'Innovative Ideas' },
  { icon: Volume2, label: 'Perfect Sound' },
]

export function Offer() {
  return (
    <section id="offer" className="relative bg-[#221C5A] py-20 text-white">
      <div className="mx-auto max-w-[1170px] px-6">
        <div className="mb-12 flex items-end gap-4">
          <span className="font-display text-6xl font-bold text-[#32DB8A] opacity-40">05</span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight">Offer</h2>
        </div>

        <div className="mb-10 max-w-xl">
          <p className="text-base leading-relaxed text-white/70">
            Polor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore
            magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est adipisicing elit, sed
            do eiusmod.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#32DB8A]">
                <f.icon size={24} />
              </div>
              <span className="text-sm font-medium text-white/80">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
