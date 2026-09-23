import { Scale, Gavel, Landmark } from 'lucide-react'

const AREAS = [
  {
    icon: Scale,
    title: 'Business Law',
    description:
      'Comprehensive legal solutions for businesses of all sizes. We handle contracts, compliance, mergers, and corporate governance.',
    image: 'https://picsum.photos/seed/jurist-biz/400/300',
  },
  {
    icon: Gavel,
    title: 'Criminal Law',
    description:
      'Aggressive defense for criminal charges. Our experienced trial attorneys protect your rights at every stage.',
    image: 'https://picsum.photos/seed/jurist-crim/400/300',
  },
  {
    icon: Landmark,
    title: 'Tax Law',
    description:
      'Expert tax planning and dispute resolution. We help individuals and businesses navigate complex tax regulations.',
    image: 'https://picsum.photos/seed/jurist-tax/400/300',
  },
]

export function FeaturedPractice() {
  return (
    <section id="practice" className="bg-brand py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 md:grid-cols-4">
        {/* Title panel */}
        <div className="bg-brand p-12 text-white">
          <h2 className="mb-4 text-3xl font-bold uppercase">Featured Practice Area</h2>
          <p className="mb-6 text-sm text-white/80">
            Our firm specializes in multiple areas of law. We deliver results through experience,
            dedication, and strategic thinking.
          </p>
          <a
            href="#cases"
            className="inline-block border-b-2 border-white text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-black hover:border-black"
          >
            View All
          </a>
        </div>

        {/* Practice area cards */}
        {AREAS.map((area) => (
          <div
            key={area.title}
            className="group relative min-h-[300px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${area.image}')` }}
          >
            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/60" />
            <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
              <area.icon className="mb-3 h-8 w-8 text-white" />
              <h3 className="mb-2 text-xl font-bold uppercase">{area.title}</h3>
              <p className="text-sm text-white/80">{area.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
