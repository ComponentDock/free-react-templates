import { Play } from 'lucide-react'

export default function VideoCta() {
  return (
    <section className="relative py-32" data-testid="video-cta">
      <img
        src="https://picsum.photos/seed/landcraft-parallax2/1920/500"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex justify-center">
        <a
          href="#"
          className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-brand transition-colors"
          aria-label="Play video"
        >
          <Play size={32} />
        </a>
      </div>
    </section>
  )
}
