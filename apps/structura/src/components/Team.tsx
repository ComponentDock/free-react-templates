import { FacebookIcon, TwitterIcon, GooglePlusIcon } from './social-icons'

const members = [
  { name: 'Suzeo deago', role: 'Interior designer', img: 'structura-team-1' },
  { name: 'Alex deago', role: 'Web designer', img: 'structura-team-2' },
  { name: 'Pol Biz', role: 'Web Developer', img: 'structura-team-3' },
  { name: 'Alex Jeson', role: 'CEO and Founder', img: 'structura-team-4' },
]

export function Team() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-charcoal">Our Great Team</h2>
          <p className="mt-3 text-gray-500">
            A wall for our project glory and a place to find more
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${m.img}/300/300`}
                alt={m.name}
                className="mx-auto h-48 w-48 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="mt-4 font-semibold text-charcoal">{m.name}</h3>
              <p className="text-sm text-gray-500">{m.role}</p>
              <div className="mt-3 flex justify-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-400 transition-colors hover:text-lime-accent"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-400 transition-colors hover:text-lime-accent"
                >
                  <TwitterIcon className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Google Plus"
                  className="text-gray-400 transition-colors hover:text-lime-accent"
                >
                  <GooglePlusIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
