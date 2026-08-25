import { Check, Play } from 'lucide-react'

const expertise = [
  'Design',
  'Development',
  'eCommerce',
  'Mobile Apps',
  'Copywriting',
  'SEO',
] as const

export function About() {
  return (
    <section id="about-section" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Photo */}
          <div>
            <img
              src="https://picsum.photos/seed/websmith-about/800/600"
              alt="Our web development workspace"
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted">
              About Us
            </p>
            <h2 className="mb-6 text-[2.2rem] font-bold text-black">We Are Expert In Web</h2>
            <p className="mb-8 leading-relaxed text-muted-dark">
              We are a passionate team of designers and developers dedicated to creating exceptional
              digital experiences. With years of expertise in web design and development, we help
              businesses establish their online presence and achieve their goals.
            </p>

            <ul className="mb-8 space-y-3">
              {expertise.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand">
                    <Check className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#home-section"
              aria-label="Watch the video about our team"
              className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                <Play className="h-4 w-4" aria-hidden="true" />
              </span>
              Watch the video
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
