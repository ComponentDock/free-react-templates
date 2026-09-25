import { type SVGProps } from 'react'

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const chefs = [
  {
    name: 'Daniel Graham',
    role: 'Master Chef',
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    bio2: 'Separated they live in Bookmarksgrove right at the coast of the Semantics. It is a paradisematic country.',
    image: 'https://picsum.photos/seed/taster-chef1/400/400',
  },
  {
    name: 'Nick Browning',
    role: 'Master Chef',
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    bio2: 'Separated they live in Bookmarksgrove right at the coast of the Semantics. It is a paradisematic country.',
    image: 'https://picsum.photos/seed/taster-chef2/400/400',
  },
]

export function Chefs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center font-display text-4xl font-bold text-ink md:text-5xl">
          Meet The Chefs
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {chefs.map((chef) => (
            <div key={chef.name} className="text-center">
              <img
                src={chef.image}
                alt={chef.name}
                className="mx-auto mb-6 h-[200px] w-[200px] rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="mb-1 font-display text-3xl font-light text-ink">{chef.name}</h3>
              <p className="mb-4 text-sm uppercase tracking-[0.1em] text-mist">{chef.role}</p>
              <p className="mb-2 leading-relaxed text-mist">{chef.bio}</p>
              <p className="mb-6 leading-relaxed text-mist">{chef.bio2}</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-mist transition-colors hover:text-brand"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-mist transition-colors hover:text-brand"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-mist transition-colors hover:text-brand"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
