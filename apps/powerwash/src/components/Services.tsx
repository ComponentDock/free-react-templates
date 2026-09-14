import {
  Home,
  Building2,
  Car,
  Droplets,
  Trees,
  Factory,
  Grid3x3,
  Footprints,
  ChevronRight,
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'House Washing',
    desc: 'Restore your homes exterior to like-new condition with our gentle yet effective house washing service.',
  },
  {
    icon: Building2,
    title: 'Roof Cleaning',
    desc: 'Remove unsightly moss, algae, and stains from your roof while extending its lifespan.',
  },
  {
    icon: Car,
    title: 'Driveway Cleaning',
    desc: 'Eliminate oil stains, dirt, and grime from your driveway for a fresh, clean appearance.',
  },
  {
    icon: Droplets,
    title: 'Gutter Cleaning',
    desc: 'Keep your gutters flowing freely with our thorough cleaning and maintenance service.',
  },
  {
    icon: Trees,
    title: 'Patio Cleaning',
    desc: 'Transform your outdoor living space with professional patio cleaning and restoration.',
  },
  {
    icon: Factory,
    title: 'Building Cleaning',
    desc: 'Commercial exterior cleaning that enhances your business curb appeal and property value.',
  },
  {
    icon: Grid3x3,
    title: 'Concrete Cleaning',
    desc: 'Deep-clean concrete surfaces including sidewalks, patios, and pool decks.',
  },
  {
    icon: Footprints,
    title: 'Sidewalk Cleaning',
    desc: 'Keep pedestrian areas safe and attractive with regular sidewalk maintenance.',
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="py-16 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/powerwash-services-bg/1920/900)',
      }}
    >
      <div className="absolute inset-0 bg-dark-900/80" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Pressure Washing Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <s.icon size={26} />
              </div>
              <h3 className="text-white font-bold mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">{s.desc}</p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/30 text-white hover:bg-brand-500 hover:border-brand-500 transition-colors"
              >
                <ChevronRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
