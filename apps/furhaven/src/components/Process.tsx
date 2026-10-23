import { ClipboardList, ThumbsUp, User, Wand2, type LucideIcon } from 'lucide-react'

const steps: { title: string; blurb: string; Icon: LucideIcon }[] = [
  {
    title: 'Pet Selection',
    blurb: 'Browse the pets waiting for a home and pick the one that fits your life.',
    Icon: ThumbsUp,
  },
  {
    title: 'Meeting Authority',
    blurb: 'Talk with our adoption team to make sure the match is right for everyone.',
    Icon: User,
  },
  {
    title: 'Adoption Form Filling',
    blurb: 'Complete the adoption paperwork and confirm your commitment.',
    Icon: ClipboardList,
  },
  {
    title: 'Bring to new family',
    blurb: 'Take your new companion home and start your life together.',
    Icon: Wand2,
  },
]

export function Process() {
  return (
    <section className="bg-paper py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-white lg:text-4xl">
          Process to adopt a pet
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm font-light leading-relaxed text-mist dark:text-gray-400">
          Who are in extremely love with eco friendly system.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, blurb, Icon }) => (
            <article
              key={title}
              className="flex flex-col items-center rounded bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-mist dark:text-gray-400">
                {blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
