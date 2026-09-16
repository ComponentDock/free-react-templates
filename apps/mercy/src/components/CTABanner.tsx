import { ButtonLink } from '@free-react-templates/ui'

export function CTABanner() {
  return (
    <section className="bg-brand py-16 transition-colors lg:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Best Way to Make a Difference in the World
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/90">
          Join thousands of people who are making a difference. Your support can change lives and
          build a better future for communities in need.
        </p>
        <ButtonLink
          href="#volunteer"
          className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:bg-gray-100"
        >
          Become A Volunteer
        </ButtonLink>
      </div>
    </section>
  )
}
