import { cn } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        {/* Left: Image */}
        <div>
          <img
            src="https://picsum.photos/seed/cabspot-about/600/400"
            alt="About CabSpot"
            className="w-full rounded-sm object-cover shadow-md"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
            Globally Connected by Large Network
          </h2>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-taxi">
            Welcome to CabSpot
          </p>
          <p className="mb-6 leading-relaxed text-gray-600">
            We are a globally connected taxi service with a large network spanning cities and
            regions. Our commitment is to provide reliable, safe, and comfortable transportation for
            every journey. Whether you are heading to the airport, commuting to work, or exploring a
            new city, we have you covered.
          </p>
          <a
            href="#services"
            className={cn(
              'inline-block bg-taxi px-8 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 transition-colors hover:bg-taxi-dark',
            )}
          >
            Get Details
          </a>
        </div>
      </div>
    </section>
  )
}
