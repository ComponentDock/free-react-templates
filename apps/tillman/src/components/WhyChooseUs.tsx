import { CheckCircle, Phone } from 'lucide-react'

const features = [
  'Technological information and others, in addition to information about companies.',
  'Technological information and others, in addition to information about companies.',
  'Technological information and others, in addition to information about companies.',
]

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Why you should
              <br />
              choose us
            </h2>
            <p className="mb-8 text-gray-600">
              Technological information and others, in addition to information about companies in
              the sector, list of any and all companies related to agribusiness.
            </p>

            <div className="mb-8 space-y-4">
              {features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-leaf-400" />
                  <p className="text-gray-600">{feat}</p>
                </div>
              ))}
            </div>

            <a
              href="tel:+1108922932678"
              className="inline-flex items-center gap-2 rounded-full border-2 border-leaf-400 px-6 py-3 font-semibold text-leaf-500 transition-colors hover:bg-leaf-400 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              (10) 892-293 2678
            </a>
          </div>

          {/* Image with badges */}
          <div className="relative w-full lg:w-1/2">
            <img
              src="https://picsum.photos/seed/tillman-why/600/450"
              alt="Agricultural equipment"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
            {/* Floating badge 1 */}
            <div className="absolute -bottom-4 -left-4 rounded-lg bg-leaf-400 px-4 py-3 text-center text-white shadow-lg">
              <p className="text-sm font-semibold">Best Plants</p>
            </div>
            {/* Floating badge 2 */}
            <div className="absolute -right-4 -top-4 rounded-lg bg-leaf-500 px-4 py-3 text-center text-white shadow-lg">
              <p className="text-sm font-semibold">Award Winning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
