import { team } from '../data'

function FacebookIcon({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <title>{label}</title>
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3h2.5v7h2.5Z" />
    </svg>
  )
}

function TwitterIcon({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <title>{label}</title>
      <path d="M18.9 3H22l-6.8 7.8L23.2 21h-6.3l-4.9-6.4L6.4 21H3.3l7.3-8.3L2.8 3h6.4l4.4 5.9L18.9 3Zm-1.1 16.1h1.7L7.8 4.7H6L17.8 19.1Z" />
    </svg>
  )
}

function LinkedinIcon({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <title>{label}</title>
      <path d="M6.5 8.8H3.6V21h2.9V8.8ZM5 7.4a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM20.4 21h-2.9v-6.2c0-1.6-.6-2.6-2-2.6-1.1 0-1.7.7-2 1.4-.1.3-.1.6-.1 1V21h-2.9V8.8h2.9v1.3c.4-.7 1.3-1.6 3-1.6 2.2 0 3.9 1.4 3.9 4.5V21Z" />
    </svg>
  )
}

function InstagramIcon({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <title>{label}</title>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.8.4-.4.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.3-.3.8-.4 1.8-.1 1.3-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.4 1.8.2.4.4.8.7 1.1.3.3.6.5 1.1.7.3.2.8.3 1.8.4 1.3.1 1.6.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.8-.4.4-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.3.3-.8.4-1.8.1-1.3.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.4-1.8-.2-.4-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.3-.2-.8-.3-1.8-.4-1.3-.1-1.6-.1-4.8-.1Zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 8.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    </svg>
  )
}

const socialIcons = [FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon]

export function Team() {
  return (
    <section aria-label="Our Team" className="bg-light py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl">
          Our Team
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article key={member.name} className="bg-white shadow-[0_0_30px_-5px_rgba(0,0,0,0.2)]">
              <div className="group relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-[320px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 flex gap-1 bg-brand/90 p-2">
                  {socialIcons.map((Icon, index) => (
                    <a
                      key={index}
                      href="#team"
                      aria-label={`${member.name} on social network ${index + 1}`}
                      className="flex h-8 w-8 items-center justify-center text-white transition-opacity hover:opacity-80"
                    >
                      <Icon label={`${member.name} social ${index + 1}`} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink">{member.name}</h3>
                <p className="mt-1 font-heading text-sm font-bold uppercase tracking-wide text-brand">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
