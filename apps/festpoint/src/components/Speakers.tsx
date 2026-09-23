import { TwitterIcon, FacebookIcon, InstagramIcon } from './social-icons'

const speakers = [
  {
    name: 'John Adams',
    role: 'Web Developer',
    image: 'https://picsum.photos/seed/festpoint-speaker-1/300/300',
  },
  {
    name: 'Paul George',
    role: 'UX Designer',
    image: 'https://picsum.photos/seed/festpoint-speaker-2/300/300',
  },
  {
    name: 'James Smith',
    role: 'Product Manager',
    image: 'https://picsum.photos/seed/festpoint-speaker-3/300/300',
  },
  {
    name: 'Angelie Crawford',
    role: 'Data Scientist',
    image: 'https://picsum.photos/seed/festpoint-speaker-4/300/300',
  },
]

const socialIcons = [
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: InstagramIcon, label: 'Instagram' },
]

export function Speakers() {
  return (
    <section id="speakers" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fest-400">
            Speaker
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Our <span className="text-fest-400">Speakers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{speaker.name}</h3>
              <p className="mb-3 text-sm text-fest-400">{speaker.role}</p>
              <ul className="flex justify-center gap-3">
                {socialIcons.map(({ Icon, label }) => (
                  <li key={label}>
                    <a
                      href="#"
                      aria-label={label}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition-colors hover:bg-fest-400 hover:text-white"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
