import { Play } from 'lucide-react'

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-ink-900 py-24 transition-colors lg:py-32"
    >
      <img
        src="https://picsum.photos/seed/tressly-experience/1920/600"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
          Experience Our Outstanding Services
        </h2>
        <a
          href="#home"
          aria-label="Play salon video"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-leaf-500 px-8 py-4 uppercase tracking-[0.2em] text-white transition-colors hover:bg-leaf-600"
        >
          <Play className="h-5 w-5" aria-hidden="true" />
          Play
        </a>
      </div>
    </section>
  )
}
