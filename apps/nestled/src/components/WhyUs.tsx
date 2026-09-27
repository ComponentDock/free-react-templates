import { BedDouble, Building, Warehouse, MapPin, ShowerHead } from 'lucide-react'

const reasons = [
  { icon: BedDouble, text: 'Right at the coast of the Semantics, a large language ocean' },
  { icon: Building, text: "And if she hasn't been rewritten then Vokalia and Consonantia" },
  { icon: Warehouse, text: 'Separated they live in Bookmarksgrove right at the coast' },
  { icon: MapPin, text: "And if she hasn't been rewritten then large language ocean" },
  { icon: ShowerHead, text: "And if she hasn't been rewritten then Vokalia and Consonantia again" },
]

export function WhyUs() {
  return (
    <section className="py-16 bg-light" id="about">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <ul className="space-y-6">
            {reasons.map((r) => (
              <li key={r.text}>
                <a href="#" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-brand/10 transition-colors flex-shrink-0">
                    <r.icon size={20} className="text-brand" aria-hidden="true" />
                  </div>
                  <span className="text-sm text-muted group-hover:text-heading transition-colors">
                    {r.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/nestled-portrait/400/500"
              alt="Real estate agent portrait"
              className="rounded-lg object-cover w-full max-w-sm"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-brand font-bold text-sm uppercase tracking-wider mb-3">Why Us</p>
            <h2 className="text-3xl font-bold text-heading mb-6 leading-tight">
              We Will Help You Find Your Home
            </h2>
            <p className="text-muted mb-4">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="text-muted">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
