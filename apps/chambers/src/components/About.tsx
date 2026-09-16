import { Play, Scale, Percent, BookOpen, Zap } from 'lucide-react'

const services = [
  {
    icon: Scale,
    title: 'Expert Attorneys',
    desc: 'A small river named Duden flows by their place and supplies',
  },
  {
    icon: Percent,
    title: 'Great Discount',
    desc: 'A small river named Duden flows by their place and supplies',
  },
  {
    icon: BookOpen,
    title: 'Legal Advisory',
    desc: 'A small river named Duden flows by their place and supplies',
  },
  {
    icon: Zap,
    title: 'Quick Charges',
    desc: 'A small river named Duden flows by their place and supplies',
  },
]

export function About() {
  return (
    <section id="about" className="py-0" data-testid="about">
      <div className="flex flex-col md:flex-row">
        <div
          className="w-full md:w-1/2 min-h-[400px] bg-cover bg-center flex items-center justify-center relative"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/chambers-about/960/600)' }}
        >
          <a
            href="#"
            className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors z-10"
            aria-label="Play video"
          >
            <Play size={24} className="text-white ml-1" fill="white" />
          </a>
        </div>
        <div className="w-full md:w-1/2 bg-bg-light p-8 md:p-12 lg:p-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Welcome to Chambers
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-text-dark">
            Why to Put Your Trust In Chambers
          </h2>
          <p className="text-text-muted mb-8">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="flex gap-3">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">{s.title}</h3>
                    <p className="text-text-muted text-sm">{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
