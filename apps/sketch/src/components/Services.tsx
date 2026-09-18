import { Check } from 'lucide-react'

const checklist = ['Modern responsive design', 'Performance optimized', 'SEO friendly structure']

export function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-brand">
              Services
            </span>
            <h2 className="mb-6 text-2xl font-bold text-heading md:text-3xl">
              We build digital experiences that matter.
            </h2>
            <p className="mb-8 text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live.
            </p>

            <ul className="mb-8 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white">
                    <Check size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#get-started"
              className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              Get Started
            </a>
          </div>

          <div className="relative">
            <img
              src="https://picsum.photos/seed/sketch-services/700/500"
              alt="Our services"
              className="w-full rounded-lg object-cover"
              width={700}
              height={500}
            />
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border-2 border-dashed border-gray-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
