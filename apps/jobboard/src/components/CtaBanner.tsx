import { Search } from 'lucide-react'

export function CtaBanner() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/jobboard-cta/1920/500')" }}
    >
      <div className="absolute inset-0 bg-lime-400/90" />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Looking For A Job?</h2>
        <p className="text-white/70 text-lg mb-8">
          Browse thousands of opportunities from top companies around the world
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-lime-400 transition-colors"
        >
          <Search size={18} />
          Browse Jobs
        </a>
      </div>
    </section>
  )
}
