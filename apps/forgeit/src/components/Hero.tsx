import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home-section"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/forgeit-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          We Love To Build <span className="text-brand">Web Apps</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">Creative solutions for modern businesses</p>
        <div className="mt-8">
          <a href="#" className="btn-brand inline-flex items-center gap-2">
            <Play size={16} />
            Watch Video
          </a>
        </div>
      </div>
    </section>
  )
}
