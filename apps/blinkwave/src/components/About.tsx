import { CheckCircle } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-start">
        {/* Image */}
        <div className="w-full lg:w-5/12">
          <img
            src="https://picsum.photos/seed/blinkwave-about/600/450"
            alt="Technician installing fiber optic cable"
            className="w-full rounded-[0_10px] object-cover shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-7/12">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-signal-400">
            About Us
          </span>
          <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">
            We listen and work together for a great experience.
          </h2>
          <p className="mt-6 text-gray-500 leading-relaxed">
            Blinkwave delivers high-speed internet to communities that deserve reliable
            connectivity. Our fiber-optic network covers urban and suburban areas with speeds up to
            1 Gbps — so you can stream, game, and work without interruption.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Fiber-optic speeds up to 1 Gbps',
              'No data caps or throttling',
              '24/7 customer support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-600">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-accent" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-[0_10px] bg-signal-400 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-signal-500"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  )
}
