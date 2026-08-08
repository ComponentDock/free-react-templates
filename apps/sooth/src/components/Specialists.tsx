import { Reveal } from './Reveal'

const specialists = [
  {
    name: 'Isabella Laurent',
    role: 'Senior Aesthetician',
    specialties: 'Advanced facials, skin resurfacing, lymphatic massage',
    years: 12,
    image: 'https://picsum.photos/seed/sooth-team-1/600/720',
  },
  {
    name: 'Marcus Chen',
    role: 'Lead Massage Therapist',
    specialties: 'Deep tissue, hot stone, sports recovery',
    years: 10,
    image: 'https://picsum.photos/seed/sooth-team-2/600/720',
  },
  {
    name: 'Sofia Ramirez',
    role: 'Hair Stylist & Colorist',
    specialties: 'Balayage, precision cuts, keratin treatments',
    years: 8,
    image: 'https://picsum.photos/seed/sooth-team-3/600/720',
  },
  {
    name: 'Amara Johnson',
    role: 'Wellness Director',
    specialties: 'Yoga, meditation, holistic wellness coaching',
    years: 15,
    image: 'https://picsum.photos/seed/sooth-team-4/600/720',
  },
] as const

export function Specialists() {
  return (
    <section id="specialists" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
            Our Team
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our Expert Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Meet the dedicated therapists, stylists, and wellness experts behind every Sooth
            experience.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {specialists.map((specialist, index) => (
            <Reveal key={specialist.name} delay={index * 80} className="group text-center">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={specialist.image}
                  alt={`Portrait of ${specialist.name}`}
                  className="aspect-[5/6] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading mt-5 text-lg font-bold text-gray-900 dark:text-white">
                {specialist.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                {specialist.role}
              </p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {specialist.specialties}
              </p>
              <p className="mt-3 text-xs font-medium tracking-wide text-gray-400 uppercase dark:text-gray-500">
                {specialist.years} Years Experience
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
