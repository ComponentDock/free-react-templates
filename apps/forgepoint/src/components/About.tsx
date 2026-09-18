import { AlertTriangle } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <div>
            <h2 className="font-display text-3xl font-bold leading-snug text-ink dark:text-white sm:text-4xl">
              Safe Industrial Solutions That Saves our Valuable Time and Money!
            </h2>
            <p className="mt-6 leading-relaxed text-gray-500 dark:text-gray-400">
              Logisti Group is a representative logistics operator providing full range of service
              in the sphere of customs clearance and transportation worldwide for any type of cargo.
            </p>
            <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
            <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit.
            </p>
            <a
              href="#services"
              className="mt-8 inline-block bg-navy px-8 py-5 font-display text-xl font-medium text-white shadow-[-8px_8px_0_#ca611b] transition-all hover:shadow-[8px_8px_0_#ca611b]"
            >
              Our Services
            </a>
          </div>

          {/* Right: image + mission overlay */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/forgepoint-about/700/500"
              alt="Industrial facility interior"
              className="w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded bg-gold/90 p-6 backdrop-blur sm:left-auto sm:right-8 sm:bottom-8 sm:max-w-xs">
              <AlertTriangle className="mb-2 h-6 w-6 text-navy" aria-hidden="true" />
              <h4 className="font-display text-lg font-bold text-navy">Our Mission</h4>
              <p className="mt-2 text-sm text-navy/80">
                Quis ipsum suspendisse ultrices gravidae Risus commodo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
