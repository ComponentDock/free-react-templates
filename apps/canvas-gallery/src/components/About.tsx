import { Film, Calendar, Camera, Home } from 'lucide-react'

const services = [
  {
    icon: Film,
    title: 'Fashion Shows',
    desc: 'At vero eos et accusam et justo duo dolores et ea rebum.',
  },
  {
    icon: Calendar,
    title: 'Special Events',
    desc: 'At vero eos et accusam et justo duo dolores et ea rebum.',
  },
  {
    icon: Camera,
    title: 'Commercial Photo',
    desc: 'At vero eos et accusam et justo duo dolores et ea rebum.',
  },
  {
    icon: Home,
    title: 'Model School',
    desc: 'At vero eos et accusam et justo duo dolores et ea rebum.',
  },
]

export function About() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Thumbnail 1 */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/about-1/400/500"
              alt="Model portrait"
              className="w-full max-w-xs rounded object-cover"
              loading="lazy"
            />
          </div>

          {/* Thumbnail 2 */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/about-2/400/500"
              alt="Model portrait"
              className="w-full max-w-xs rounded object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-4 text-2xl font-bold leading-snug text-text-dark">
              We Have 20+ Years Practical Experience in Agency
            </h2>
            <p className="mb-4 text-base leading-relaxed text-text-muted">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna.
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet gubergren no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                <s.icon size={28} />
              </div>
              <h5 className="mb-2 text-base font-semibold text-text-dark">{s.title}</h5>
              <p className="text-sm leading-relaxed text-text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
