import { Pen, Layers } from 'lucide-react'

const features = [
  {
    icon: Pen,
    title: 'High Quality',
    description: 'Crafted with precision using modern design principles and best practices.',
  },
  {
    icon: Layers,
    title: 'Creative Solutions',
    description: 'Innovative approaches to bring your vision to life with impactful design.',
  },
]

export function Hero() {
  return (
    <section id="home" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-heading md:text-5xl">
              Create, Code, and Launch.
            </h1>
            <p className="mb-8 max-w-lg text-lg text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-12">
              <a
                href="#get-started"
                className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
              >
                Get Started
              </a>
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title}>
                  <div className="mb-4 text-brand">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-heading">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://picsum.photos/seed/sketch-hero/800/600"
              alt="Creative workspace"
              className="w-full rounded-lg object-cover"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-6 shadow-lg md:-bottom-8 md:-left-8 md:p-8">
              <blockquote className="mb-4 text-sm italic text-gray-700">
                &ldquo;Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.&rdquo;
              </blockquote>
              <div>
                <strong className="block text-sm text-heading">Daniella Wood</strong>
                <span className="text-xs text-gray-500">Founder @ Sketch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
