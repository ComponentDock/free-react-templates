import { Camera } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[600px] items-center bg-surface">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/photonic-hero/1600/900)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center text-white">
        <div className="mb-6 h-28 w-28 overflow-hidden rounded-full border-4 border-white/30">
          <img
            src="https://picsum.photos/seed/photonic-portrait/200/200"
            alt="Portrait of the photographer"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">I&apos;m Ben Botsford</h1>
        <p className="mb-1 text-lg text-white/80">a Professional Photographer</p>
        <p className="mb-6 text-sm text-white/60">Live in Oakland</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
          <span className="flex items-center gap-1">
            <Camera size={14} /> Nature Photography
          </span>
          <span className="flex items-center gap-1">
            <Camera size={14} /> Sunsets
          </span>
          <span className="flex items-center gap-1">
            <Camera size={14} /> Portrait Photography
          </span>
        </div>
        <Button className="mt-8 bg-brand-400 text-white hover:bg-brand-500">View My Work</Button>
      </div>
    </section>
  )
}
