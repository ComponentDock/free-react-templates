import { ButtonLink } from '@free-react-templates/ui'

export function Discount() {
  return (
    <section className="bg-brand/10 py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl font-bold text-brand sm:text-4xl">Get 20% discount</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-mist dark:text-gray-300">
          Book your escape this month and enjoy 20% off your first full-day wellness package.
        </p>
        <div className="mt-8">
          <ButtonLink
            href="#footer"
            className="rounded-full bg-brand px-8 py-3 font-bold text-white hover:bg-brand-dark"
          >
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
