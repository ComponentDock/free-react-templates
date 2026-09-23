function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8v3h2.7v7h2.8Z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M18.9 3h3.1l-6.8 7.8L23 21h-6.3l-4.9-6.4L6.2 21H3.1l7.3-8.3L2.5 3h6.4l4.4 5.9L18.9 3Zm-1.1 16.1h1.7L7.9 4.8H6.1l11.7 14.3Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M6.5 8.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4.5 10h4v11h-4V10Zm6.5 0h3.8v1.5h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6.1V21h-4v-5c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7V21h-4V10Z" />
    </svg>
  )
}

interface Attorney {
  name: string
  title: string
  photo: string
}

const attorneys: Attorney[] = [
  {
    name: 'James Mitchell',
    title: 'Senior Attorney',
    photo: 'https://picsum.photos/seed/precedent-att1/400/500',
  },
  {
    name: 'Sarah Thompson',
    title: 'Managing Partner',
    photo: 'https://picsum.photos/seed/precedent-att2/400/500',
  },
  {
    name: 'Michael Chen',
    title: 'Legal Consultant',
    photo: 'https://picsum.photos/seed/precedent-att3/400/500',
  },
  {
    name: 'Emily Rodriguez',
    title: 'Associate Attorney',
    photo: 'https://picsum.photos/seed/precedent-att4/400/500',
  },
]

export function Attorneys() {
  return (
    <section id="attorneys" aria-labelledby="attorneys-heading" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="attorneys-heading"
          className="font-heading mb-12 text-center text-3xl font-bold text-[#1a1a2e]"
        >
          Our Attorneys
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {attorneys.map((attorney) => (
            <article key={attorney.name} className="text-center">
              <div className="relative mb-4 overflow-hidden rounded">
                <img
                  src={attorney.photo}
                  alt={`${attorney.name}, ${attorney.title}`}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-1 text-lg font-bold text-[#1a1a2e]">{attorney.name}</h3>
              <p className="mb-3 text-sm text-[#c5a55a]">{attorney.title}</p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="#facebook"
                  aria-label={`${attorney.name} on Facebook`}
                  className="text-[#666666] transition-colors hover:text-[#c5a55a]"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#twitter"
                  aria-label={`${attorney.name} on Twitter`}
                  className="text-[#666666] transition-colors hover:text-[#c5a55a]"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="#linkedin"
                  aria-label={`${attorney.name} on LinkedIn`}
                  className="text-[#666666] transition-colors hover:text-[#c5a55a]"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
