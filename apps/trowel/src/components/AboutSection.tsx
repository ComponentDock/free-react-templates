import { CheckCircle } from 'lucide-react'

const features = [
  'We are latest in construction technology',
  'We are the best in the industry',
  'We deliver on time and budget',
]

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2">
        {/* Image */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/trowel-about/600/500"
            alt="Construction team at work"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-500">
            About Us
          </p>
          <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
            We Are The Best In Construction Industry
          </h2>
          <p className="mb-8 leading-relaxed text-gray-600">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean. A small river named Duden flows by their place
            and supplies it with the necessary regelialia.
          </p>
          <ul className="mb-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={18} className="shrink-0 text-brand-500" />
                {f}
              </li>
            ))}
          </ul>
          <div>
            <a
              href="#contact"
              className="inline-block bg-brand-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
