import { InstagramIcon, TwitterIcon } from './social-icons'

const trainers = [
  {
    name: 'Marcus Johnson',
    specialty: 'Strength & Conditioning',
    years: '12 years experience',
    bio: 'Former competitive powerlifter turned coach. Specializes in progressive overload and periodization.',
    photo: 'https://picsum.photos/seed/forgefit-trainer-1/600/700',
  },
  {
    name: 'Sarah Chen',
    specialty: 'Yoga & Flexibility',
    years: '8 years experience',
    bio: 'Certified yoga instructor with a focus on mindful movement, mobility, and stress reduction.',
    photo: 'https://picsum.photos/seed/forgefit-trainer-2/600/700',
  },
  {
    name: 'Diego Reyes',
    specialty: 'Boxing & MMA',
    years: '10 years experience',
    bio: 'Professional MMA background with expertise in striking, conditioning, and fight preparation.',
    photo: 'https://picsum.photos/seed/forgefit-trainer-3/600/700',
  },
  {
    name: 'Emily Park',
    specialty: 'CrossFit & HIIT',
    years: '7 years experience',
    bio: 'CrossFit Level 3 trainer passionate about functional fitness and helping athletes of all levels.',
    photo: 'https://picsum.photos/seed/forgefit-trainer-4/600/700',
  },
]

export function Trainers() {
  return (
    <section id="trainers" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          Our Team
        </p>
        <h2 className="font-display mt-3 text-center text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
          Expert Trainers
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          Our certified trainers bring years of experience and passion to help you reach your
          fitness goals.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <article
              key={trainer.name}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="relative">
                <img
                  src={trainer.photo}
                  alt={`${trainer.name} — ${trainer.specialty}`}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute right-3 top-3 flex flex-col gap-2">
                  <a
                    href="#trainers"
                    aria-label={`${trainer.name} on Twitter`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-950/70 text-white backdrop-blur transition-colors hover:bg-primary-600"
                  >
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="#trainers"
                    aria-label={`${trainer.name} on Instagram`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-950/70 text-white backdrop-blur transition-colors hover:bg-primary-600"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
                  {trainer.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-primary-600 dark:text-primary-400">
                  {trainer.specialty}
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                  {trainer.years}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {trainer.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
