import { CheckCircle } from 'lucide-react'

const ITEMS = [
  {
    title: 'Discover new artists from around the world',
    description: 'Reduce unnecessary spend with real time insights into every penny spent.',
  },
  {
    title: 'Download songs for offline listening anywhere',
    description: 'Reduce unnecessary spend with real time insights into every penny spent.',
  },
  {
    title: 'Get recommendations based on your taste',
    description: 'Reduce unnecessary spend with real time insights into every penny spent.',
  },
]

export function About2() {
  return (
    <section className="bg-brand-section py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-8 text-3xl font-bold leading-tight text-brand-dark md:text-4xl">
              We are tender heart charity foundation.
            </h2>
            <div className="space-y-6">
              {ITEMS.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle size={24} className="mt-1 shrink-0 text-brand-blue" />
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-brand-dark">{item.title}</h3>
                    <p className="text-brand-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://picsum.photos/seed/sonority-about2/600/450"
              alt="Sonority platform features"
              className="w-full rounded-2xl shadow-lg"
              width={600}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
