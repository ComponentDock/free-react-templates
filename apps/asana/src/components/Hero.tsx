import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/asana-hero/1920/1080')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          A Yoga Studio
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Discover inner peace through guided yoga practices. Transform your body and mind with our
          expert instructors.
        </p>
        <a
          href="#classes"
          className="inline-flex items-center gap-3 text-white hover:text-brand-300 transition-colors group"
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-white group-hover:border-brand-300 transition-colors">
            <Play size={20} fill="currentColor" />
          </span>
          <span className="text-lg font-medium">Watch the video</span>
        </a>
      </div>
    </section>
  )
}
