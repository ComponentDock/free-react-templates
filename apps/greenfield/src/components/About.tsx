import { ChevronRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left side — images + badge */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/farmabout/600/400"
              alt="Greenfield farm fields"
              className="rounded-lg object-cover"
            />
            <div className="absolute -bottom-6 -right-6 rounded-lg bg-brand px-6 py-4 text-center shadow-lg">
              <p className="text-3xl font-bold text-white">42</p>
              <p className="text-sm text-white/80">Year Of Experienced</p>
            </div>
            <img
              src="https://picsum.photos/seed/farminset/300/200"
              alt="Inset farming detail"
              className="absolute -left-6 top-6 h-32 w-48 rounded-lg border-4 border-white object-cover shadow-lg lg:-left-12"
            />
          </div>

          {/* Right side — content */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 font-display text-2xl text-brand">About Us</p>
            <h2 className="mb-4 text-3xl font-bold text-ink">
              We&#8217;re Leader In Agricultural Market
            </h2>
            <p className="mb-6 leading-relaxed text-mist">
              Greenfield is a leading agriculture company dedicated to sustainable farming
              practices. We have been serving communities with fresh, organic produce for over four
              decades, ensuring quality and health for every customer.
            </p>

            <ul className="mb-8 space-y-3">
              <li className="flex items-center gap-3 text-ink">
                <ChevronRight size={18} className="text-brand" />
                Growing Fruits and Vegetables
              </li>
              <li className="flex items-center gap-3 text-ink">
                <ChevronRight size={18} className="text-brand" />
                Tips for Ripening Fruits
              </li>
            </ul>

            <div>
              <a
                href="#services"
                className="inline-block rounded bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
