import { Facebook, Twitter, Globe } from 'lucide-react'

const MEMBERS = [
  { name: 'Bruce Roberts', role: 'Team Officer', img: 'forgepoint-team-1' },
  { name: 'Bruce Roberts', role: 'Team Officer', img: 'forgepoint-team-2' },
  { name: 'Bruce Roberts', role: 'Team Officer', img: 'forgepoint-team-3' },
]

export function Team() {
  return (
    <section id="team" className="bg-white py-20 dark:bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Team info */}
          <div className="lg:col-span-1">
            <h2 className="font-display text-3xl font-bold text-ink dark:text-white">
              Our Team Best Members
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block bg-navy px-8 py-5 font-display text-xl font-medium text-white shadow-[-8px_8px_0_#ca611b] transition-all hover:shadow-[8px_8px_0_#ca611b]"
            >
              Contact Us
            </a>
          </div>

          {/* Member cards */}
          {MEMBERS.map((m) => (
            <article key={m.img} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${m.img}/400/500`}
                alt={`Team member ${m.name}`}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 px-4 py-3 dark:bg-navy/90">
                <span className="font-display text-sm font-semibold text-brand">
                  <a href="#">{m.name}</a>
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400">{m.role}</p>
              </div>
              {/* Hover social icons */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-navy/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a href="#" aria-label="social facebook">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a href="#" aria-label="social twitter">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a href="#" aria-label="social globe">
                  <Globe className="h-5 w-5 text-white" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
