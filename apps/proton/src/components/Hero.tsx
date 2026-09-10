import { Play } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/proton-hero/1920/1080')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="text-white">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Design a better website for your business
          </h1>
          <p className="mt-5 max-w-md text-lg text-white/85">
            We craft clean, professional websites that help businesses grow. Your online presence
            starts here.
          </p>
          <Button className="mt-8 rounded-none border-0 bg-proton-500 px-8 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-proton-600">
            Free Download
          </Button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <button
            type="button"
            aria-label="Play video"
            className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-white/20 text-white transition-colors hover:bg-white/40"
          >
            <Play className="h-8 w-8 ml-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
