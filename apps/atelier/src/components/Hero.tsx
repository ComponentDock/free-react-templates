import { Square, Compass } from 'lucide-react'

const features = [
  {
    icon: Square,
    title: 'High Quality',
    description: 'Crafted with top-notch materials and attention to every detail.',
  },
  {
    icon: Compass,
    title: 'Creative Solutions',
    description: 'Innovative approaches that set your brand apart from the crowd.',
  },
]

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <h1 className="text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Create, Code, and Published.
          </h1>
          <p className="mt-5 max-w-md text-base text-navy/60">
            We help businesses build their digital presence through innovative design and
            cutting-edge technology solutions.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-brand-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Get Started
          </a>

          {/* Feature cards */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                  <feat.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy">{feat.title}</h3>
                  <p className="mt-1 text-xs text-navy/50">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/atelier-hero/600/700"
            alt="Creative agency workspace"
            className="w-full max-w-md rounded-2xl object-cover shadow-xl"
            loading="eager"
          />
          {/* Dark navy quote block overlay */}
          <div className="absolute bottom-4 left-4 max-w-[240px] rounded-xl bg-navy p-5 text-white shadow-lg sm:bottom-6 sm:left-6">
            <p className="text-sm font-medium leading-relaxed">
              &ldquo;Design is not just what it looks like. Design is how it works.&rdquo;
            </p>
            <p className="mt-2 text-xs text-white/60">— Steve Jobs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
