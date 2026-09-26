import { Calendar, Phone, Mail, MapPin } from 'lucide-react'

const contactInfo = [
  { icon: Calendar, text: '31st December, 1992' },
  { icon: Phone, text: '44 (012) 695 4783' },
  { icon: Mail, text: 'businessplan@donald' },
  { icon: MapPin, text: 'Santa Monica Boulevard' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    svg: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    label: 'Twitter',
    href: '#',
    svg: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    svg: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  },
]

export function Hero() {
  return (
    <section id="home" className="pt-16 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile photo */}
          <div className="flex-shrink-0">
            <img
              src="https://picsum.photos/seed/eminence-profile/300/300"
              alt="Profile photo"
              className="w-48 h-48 rounded-full object-cover border-4 border-brand"
            />
          </div>

          {/* Personal info */}
          <div className="text-center md:text-left">
            <p className="text-lg text-brand mb-2">Hello Everybody, I am</p>
            <h1 className="text-4xl font-bold font-[var(--font-heebo)] mb-2">Donald McKinney</h1>
            <h2 className="text-xl text-brand/80 mb-4 font-[var(--font-heebo)]">
              Junior UI/UX Developer
            </h2>
            <p className="text-white/70 max-w-lg mb-6">
              A passionate developer crafting beautiful and functional user interfaces. Specializing
              in modern web experiences with a focus on clean design and seamless interactions.
            </p>

            {/* Contact info */}
            <ul className="space-y-2 mb-6">
              {contactInfo.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 justify-center md:justify-start">
                  <Icon size={16} className="text-brand" />
                  <span className="text-white/80 text-sm">{text}</span>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d={svg} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
