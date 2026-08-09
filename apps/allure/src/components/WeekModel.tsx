import { useEffect, useState } from 'react'
import { Button, cn } from '@free-react-templates/ui'

const photos = [
  { seed: 'allure-week-1', label: 'Week model photo 1' },
  { seed: 'allure-week-2', label: 'Week model photo 2' },
  { seed: 'allure-week-3', label: 'Week model photo 3' },
] as const

const stats = [
  { label: 'Age', value: '20' },
  { label: 'Height', value: '1.79m / 5\'10"' },
  { label: 'Shoes', value: '38' },
  { label: 'Hair', value: 'brown' },
  { label: 'Eyes', value: 'brown' },
] as const

export function WeekModel() {
  const [index, setIndex] = useState(0)
  const photo = photos[index]!

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % photos.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  const goTo = (next: number) => {
    setIndex(((next % photos.length) + photos.length) % photos.length)
  }

  return (
    <section
      aria-label="Model of the week"
      className="bg-white pb-24 pt-6 transition-colors lg:pb-32 dark:bg-gray-950"
    >
      <div className="flex h-[277px] w-4/5 items-center justify-end bg-black">
        <h2 className="rotate-90 origin-right whitespace-nowrap font-display text-4xl font-bold text-white lg:text-6xl">
          Model of the week<span className="text-brand">.</span>
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            key={photo.seed}
            src={`https://picsum.photos/seed/${photo.seed}/900/1100`}
            alt=""
            className="h-[480px] w-full object-cover lg:h-[560px]"
          />
          <div className="absolute bottom-6 left-6 flex bg-white">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="w-24 py-3 text-navtext transition-colors hover:text-brand"
            >
              Previous
            </button>
            <span className="my-2.5 w-0.5 bg-rule" aria-hidden="true" />
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="w-24 py-3 text-navtext transition-colors hover:text-brand"
            >
              Next
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-display text-4xl font-bold text-ink dark:text-white">
            Samantha Smith
          </h3>
          <p className="mt-6 leading-relaxed text-mist">
            Samantha is our pick this week — a Milan favorite with a fearless editorial walk and a
            natural range from beauty close-ups to full runway. She has walked for twenty shows this
            season and features in three upcoming campaigns.
          </p>

          <dl className="mt-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-baseline justify-between gap-6 border-b border-rule py-3"
              >
                <dt className="w-36 text-lg font-medium text-ink dark:text-white">{stat.label}</dt>
                <dd className="text-lg text-fog">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href="#contact"
              className="text-base text-ink underline decoration-1 underline-offset-4 transition-colors hover:text-brand dark:text-white"
            >
              View Full Profile
            </a>
            <Button
              className={cn(
                'rounded-none bg-brand-deep px-10 py-5 text-base font-bold uppercase tracking-wide hover:bg-ink hover:text-white',
              )}
            >
              Bookings
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
