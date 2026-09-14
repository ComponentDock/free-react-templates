import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-ocean-400">
              About Us
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Who Are You Guys</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              We are a passionate team of designers, developers, and strategists who believe great
              digital experiences start with understanding your vision. From concept to launch, we
              build products that delight users and drive results.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Our collaborative approach means you are involved every step of the way. We listen,
              iterate, and deliver — on time and on budget.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ocean-400 transition-colors hover:text-ocean-600"
            >
              Read more about us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Overlapping images */}
          <div className="relative flex justify-center">
            <img
              src="https://picsum.photos/seed/panorama-about1/400/500"
              alt="Team working together"
              className="w-2/3 rounded-lg object-cover shadow-lg"
            />
            <img
              src="https://picsum.photos/seed/panorama-about2/300/350"
              alt="Office space"
              className="absolute -bottom-8 -right-4 w-1/2 rounded-lg object-cover shadow-xl md:right-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
