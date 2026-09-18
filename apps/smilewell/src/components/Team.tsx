import { Globe, AtSign, Share2 } from 'lucide-react'

const team = [
  {
    name: 'Bob Carry',
    role: 'Doctor',
    desc: 'Experienced dental surgeon with over 10 years of practice in oral surgery and implants.',
    img: 'https://picsum.photos/seed/smilewell-team1/400/400',
  },
  {
    name: 'Jean Smith',
    role: 'Doctor',
    desc: 'Specialized in cosmetic dentistry and smile makeovers with a passion for patient care.',
    img: 'https://picsum.photos/seed/smilewell-team2/400/400',
  },
  {
    name: 'Ricky Fisher',
    role: 'Dentist',
    desc: 'Dedicated pediatric dentist who loves working with children to build healthy dental habits.',
    img: 'https://picsum.photos/seed/smilewell-team3/400/400',
  },
] as const

const socialIcons = [
  { Icon: Globe, label: 'Facebook' },
  { Icon: AtSign, label: 'Twitter' },
  { Icon: Share2, label: 'Instagram' },
] as const

export function Team() {
  return (
    <section id="doctors" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-smoke">
            Expert Doctors
          </p>
          <h2 className="text-3xl font-bold text-ink">Meet Our Team</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-lg border border-gray-100 p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={member.img}
                alt={member.name}
                className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="text-lg font-bold text-ink">{member.name}</h3>
              <p className="mb-2 text-sm font-medium text-brand">{member.role}</p>
              <p className="mb-4 text-sm leading-relaxed text-smoke">{member.desc}</p>
              <div className="flex justify-center gap-4">
                {socialIcons.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="text-smoke transition-colors hover:text-brand"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
