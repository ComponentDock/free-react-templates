import { Play } from 'lucide-react'

export function VideoArea() {
  return (
    <section
      className="relative py-32 flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/goquest-video/1920/800)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-dark/70" />

      <div className="relative z-10 text-center px-4">
        {/* Play button */}
        <button
          type="button"
          className="w-[95px] h-[95px] bg-accent-yellow hover:bg-accent-red rounded-full flex items-center justify-center mx-auto mb-8 transition-colors group"
          aria-label="Play video"
        >
          <Play size={32} className="text-white ml-1 group-hover:scale-110 transition-transform" />
        </button>

        <h2 className="font-heading text-white text-3xl md:text-4xl font-bold max-w-2xl mx-auto mb-4">
          Love where you&apos;re going in the perfect time
        </h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          GoQuest is a World Leading Online Tour Booking Platform
        </p>
      </div>
    </section>
  )
}
