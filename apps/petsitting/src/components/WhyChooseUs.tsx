import { Headphones, HeartHandshake, Siren, Stethoscope, type LucideIcon } from 'lucide-react'

const features: { title: string; copy: string; Icon: LucideIcon }[] = [
  {
    title: 'Care Advices',
    copy: 'Practical guidance from experienced sitters on feeding, training, and everyday pet care.',
    Icon: HeartHandshake,
  },
  {
    title: 'Customer Supports',
    copy: 'Friendly support before, during, and after every booking — we are always a message away.',
    Icon: Headphones,
  },
  {
    title: 'Emergency Services',
    copy: 'Rapid response for urgent situations, with vet contacts ready whenever you need them.',
    Icon: Siren,
  },
  {
    title: 'Veterinary Help',
    copy: 'Access to trusted veterinary partners who know your pet and their history.',
    Icon: Stethoscope,
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-night dark:text-white">
          Why Choose Us?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-light text-gray-500 dark:text-gray-400">
          Four good reasons thousands of pet parents trust us.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, copy, Icon }) => (
            <article
              key={title}
              className="rounded-lg border border-gray-100 p-8 text-center dark:border-gray-800"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold text-night dark:text-white">{title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
