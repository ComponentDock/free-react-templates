import { Phone } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://picsum.photos/seed/tillman-about/600/450"
              alt="Agricultural field with crops"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              20+ years
              <br />
              agricultural
              <br />
              cooperative
            </h2>
            <p className="mb-4 text-gray-600">
              The automated process starts as soon as your clothes go into the machine. The outcome
              is gleaming clothes!
            </p>
            <p className="mb-8 text-gray-600">
              The automated process starts as soon as your clothes go into the machine. The outcome
              is gleaming clothes!
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-leaf-400 px-6 py-3 font-semibold text-white transition-colors hover:bg-leaf-500"
            >
              <Phone className="h-4 w-4" />
              More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
