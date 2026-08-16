import { FacebookIcon, InstagramIcon, TwitterIcon } from './social-icons'

const pastors = [
  {
    name: 'Lloyd Wilson',
    role: 'Senior Pastor',
    image: 'https://picsum.photos/seed/vesper-21/400/400',
  },
  {
    name: 'Rachel Parker',
    role: 'Youth Pastor',
    image: 'https://picsum.photos/seed/vesper-22/400/400',
  },
  {
    name: 'Ian Smith',
    role: 'Worship Leader',
    image: 'https://picsum.photos/seed/vesper-23/400/400',
  },
  {
    name: 'Alicia Henderson',
    role: "Children's Ministry",
    image: 'https://picsum.photos/seed/vesper-24/400/400',
  },
] as const

const socials = [
  { name: 'Twitter', Icon: TwitterIcon },
  { name: 'Facebook', Icon: FacebookIcon },
  { name: 'Instagram', Icon: InstagramIcon },
] as const

export function PastorGrid() {
  return (
    <section id="pastor" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Church Pastor
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pastors.map((pastor) => (
            <article key={pastor.name} className="text-center">
              <img
                src={pastor.image}
                alt={pastor.name}
                loading="lazy"
                className="mx-auto h-48 w-48 rounded-full object-cover"
              />
              <h3 className="mt-5 font-serif text-xl font-bold text-gray-900">{pastor.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold-dark">
                {pastor.role}
              </p>
              <div className="mt-4 flex justify-center gap-3">
                {socials.map(({ name, Icon }) => (
                  <a
                    key={name}
                    href="#pastor"
                    aria-label={name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gold hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
