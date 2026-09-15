import { Globe, Mail, Share2 } from 'lucide-react'

const attorneys = [
  {
    name: 'Richard Anderson',
    specialization: 'Family Law',
    image: 'https://picsum.photos/seed/counsel-attorney1/400/500',
  },
  {
    name: 'Jefford Maxillin',
    specialization: 'Criminal Law',
    image: 'https://picsum.photos/seed/counsel-attorney2/400/500',
  },
  {
    name: 'Carlos Obing',
    specialization: 'Business Law',
    image: 'https://picsum.photos/seed/counsel-attorney3/400/500',
  },
  {
    name: 'Nathan Smith',
    specialization: 'Property Law',
    image: 'https://picsum.photos/seed/counsel-attorney4/400/500',
  },
] as const

export function Attorneys() {
  return (
    <section id="attorneys" aria-label="Attorneys" className="bg-[#1d2124] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-white">Our Legal Attorneys</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {attorneys.map((attorney) => (
            <div key={attorney.name} className="group overflow-hidden rounded-md bg-[#343a40]">
              <div className="overflow-hidden">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-white">{attorney.name}</h3>
                <p className="mt-1 text-sm text-primary-500">{attorney.specialization}</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="#"
                    aria-label={`${attorney.name} website`}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    <Globe className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${attorney.name} email`}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${attorney.name} share`}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    <Share2 className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
