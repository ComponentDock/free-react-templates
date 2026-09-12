import { Camera, Search, Compass, Rocket } from 'lucide-react'

const features = [
  { icon: Camera, title: 'Photography' },
  { icon: Search, title: 'Find It Here' },
  { icon: Compass, title: 'Photography' },
  { icon: Rocket, title: 'Fly Your Dreams' },
] as const

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading">Why Are We Awesome?</h2>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="mb-6 text-base leading-relaxed text-body-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="mb-8 text-base leading-relaxed text-body-text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map(({ icon: Icon, title }) => (
                <div key={title} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-heading">{title}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/luminary-about/600/400"
              alt="About Luminary"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
