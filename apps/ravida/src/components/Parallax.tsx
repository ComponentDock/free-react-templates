import { Play } from 'lucide-react'

export function Parallax() {
  return (
    <section
      className="relative flex min-h-[550px] items-center justify-center bg-cover bg-fixed bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://picsum.photos/seed/ravida-parallax/1920/550)',
      }}
    >
      <button
        type="button"
        aria-label="Play video"
        className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/60 text-white/80 transition-colors hover:border-brand hover:text-brand"
      >
        <Play size={32} fill="currentColor" />
      </button>
    </section>
  )
}
