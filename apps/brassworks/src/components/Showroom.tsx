import { ButtonLink } from '@free-react-templates/ui'
import { address, hours, notices } from '../content'

/** Showroom: plumbed-in bays, the address, the counter hours, then the photo. */
export function Showroom() {
  return (
    <section id="showroom" className="section bg-white dark:bg-gray-950">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <p className="eyebrow dark:text-primary-400">Showroom</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-800 sm:text-4xl dark:text-white">
            Turn the taps on before you specify them
          </h2>
          <p className="mt-4 text-lg text-ink-500 dark:text-gray-400">
            Sixty bays of fixtures plumbed in and working, which is worth an hour of anyone&apos;s
            time before committing a client to a range from a catalogue photograph.
          </p>

          <address className="mt-6 text-ink-600 not-italic dark:text-gray-300">
            {address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>

          <dl className="mt-6 max-w-sm">
            {hours.map((row) => (
              <div
                key={row.day}
                className="flex justify-between border-b border-ink-100 py-2.5 dark:border-gray-800"
              >
                <dt className="text-ink-500 dark:text-gray-400">{row.day}</dt>
                <dd className="font-semibold text-ink-800 dark:text-white">{row.time}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-4 text-sm text-ink-400">{notices.showroom}</p>
          <div className="mt-6">
            <ButtonLink href="#contact" className="px-6 py-3">
              Book a showroom visit
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-7">
          <img
            src="https://picsum.photos/seed/brassworks-showroom/1200/600"
            alt="The Brassworks showroom interior"
            width={1200}
            height={600}
            loading="lazy"
            className="aspect-[2/1] w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
