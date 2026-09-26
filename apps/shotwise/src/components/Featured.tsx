import { ArrowRight } from 'lucide-react'

export function Featured() {
  return (
    <section id="about" className="bg-paper py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-light text-ink">
              Reasons To <br />
              <span className="font-semibold">Choose</span> Shotwise
            </h2>
            <p className="mt-6 leading-relaxed text-mist">
              Here, we focus on a range of items and features that we use in life without giving
              them a second thought. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary-500 px-7 py-2.5 text-sm font-medium text-primary-500 transition hover:bg-primary-500 hover:text-white"
            >
              Get Started
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/shotwise-feat/600/400"
              alt="Featured photography"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
