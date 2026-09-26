const members = [
  { id: 1, name: 'Milani Mou', role: 'Photographer', seed: 'captura-team-1' },
  { id: 2, name: 'Jasmine Pinky', role: 'Photographer', seed: 'captura-team-2' },
  { id: 3, name: 'Piya Zosoldos', role: 'Photographer', seed: 'captura-team-3' },
]

function SocialIcon({ label, path }: { label: string; path: string }) {
  return (
    <a href="#" aria-label={label} className="text-body transition-colors hover:text-brand-400">
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d={path} />
      </svg>
    </a>
  )
}

const facebookPath = 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'
const twitterPath =
  'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z'
const instagramPath = 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01'

export function Team() {
  return (
    <section className="border-b border-gray-200 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {members.map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={`https://picsum.photos/seed/${member.seed}/400/400`}
                alt={member.name}
                className="mx-auto mb-4 h-64 w-64 rounded object-cover"
                loading="lazy"
              />
              <h3 className="mb-1 text-lg font-medium text-heading">{member.name}</h3>
              <p className="mb-3 text-sm text-body">{member.role}</p>
              <div className="flex justify-center gap-3">
                <SocialIcon label={`${member.name} Facebook`} path={facebookPath} />
                <SocialIcon label={`${member.name} Twitter`} path={twitterPath} />
                <SocialIcon label={`${member.name} Instagram`} path={instagramPath} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
