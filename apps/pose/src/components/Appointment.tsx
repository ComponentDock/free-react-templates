import { Globe, GraduationCap, Mail, MapPin, Phone, UserPlus } from 'lucide-react'

const contactRows = [
  {
    label: 'Address',
    value: '198 West 21th Street, Suite 721, New York NY 10016',
    icon: MapPin,
  },
  { label: 'Phone', value: '+ 1235 2355 98', icon: Phone },
  { label: 'Email', value: 'info@yoursite.com', icon: Mail },
  { label: 'Website', value: 'yoursite.com', icon: Globe },
] as const

const blocks = [
  {
    title: 'Become A Model?',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: UserPlus,
  },
  {
    title: 'Model Courses',
    copy: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    icon: GraduationCap,
  },
] as const

export function Appointment() {
  return (
    <section id="appointment" className="bg-night py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-brand">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl font-bold text-white">Contact Us</h2>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-bold text-white">Agency Details</h3>
            <ul className="mt-6 space-y-5 text-sm text-gray-300">
              {contactRows.map((row) => (
                <li key={row.label} className="flex items-start gap-3">
                  <row.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {row.label}
                    </span>
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {blocks.map((block) => (
            <div key={block.title}>
              <h3 className="font-display text-lg font-bold text-white">{block.title}</h3>
              <p className="mt-6 text-sm leading-relaxed text-gray-300">{block.copy}</p>
              <block.icon className="mt-5 h-8 w-8 text-brand" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
