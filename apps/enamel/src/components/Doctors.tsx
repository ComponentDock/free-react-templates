import { BrandIcon, type BrandName } from './BrandIcon'
import { SectionHeading } from './SectionHeading'

const doctors: ReadonlyArray<{
  name: string
  role: string
  blurb: string
  image: string
}> = [
  {
    name: 'Dr. Lloyd Wilson',
    role: 'Dentist',
    blurb: 'Implant specialist with 15 years of surgical experience.',
    image: 'https://picsum.photos/seed/enamel-doc-1/600/700',
  },
  {
    name: 'Dr. Rachel Parker',
    role: 'Dentist',
    blurb: 'Cosmetic dentistry expert known for her gentle hands.',
    image: 'https://picsum.photos/seed/enamel-doc-2/600/700',
  },
  {
    name: 'Dr. Ian Smith',
    role: 'Dentist',
    blurb: 'Orthodontics lead — braces and clear aligners done right.',
    image: 'https://picsum.photos/seed/enamel-doc-3/600/700',
  },
  {
    name: 'Dr. Alicia Henderson',
    role: 'Dentist',
    blurb: 'Pediatric care pioneer, loved by kids and parents alike.',
    image: 'https://picsum.photos/seed/enamel-doc-4/600/700',
  },
]

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'LinkedIn', name: 'linkedin' },
]

/** "Our Qualified Doctors" — four staff cards with photos and social icons
    that reveal on hover (the source .staff cards). */
export function Doctors() {
  return (
    <section id="doctors" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="Doctors"
          title="Our Qualified Doctors"
          intro="A team of experienced, board-certified dentists who treat every patient like family."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <div key={doctor.name} className="group overflow-hidden bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <ul
                  aria-label={`${doctor.name} social links`}
                  className="absolute inset-x-0 top-4 flex translate-y-2 justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href="#doctors"
                        aria-label={social.label}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lime transition-colors hover:bg-lime hover:text-white"
                      >
                        <BrandIcon name={social.name} className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-4 pb-6 pt-4 text-center">
                <h3 className="text-lg font-normal text-ink">{doctor.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-mist">{doctor.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-mist">{doctor.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
