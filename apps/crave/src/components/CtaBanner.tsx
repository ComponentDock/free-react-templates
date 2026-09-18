import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section
      className="relative bg-cover bg-center py-20 md:py-32"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/crave-cta/1400/500)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(2,1,15,0.7)]" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
        <p className="mb-4 text-lg text-white">Some Trendy And Popular Courses Offered</p>
        <h2 className="mb-8 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Under replenish give saying thing
        </h2>
        <ButtonLink
          href="#contact"
          size="md"
          className="rounded-full bg-brand text-white shadow-lg hover:bg-red-700"
        >
          Reservation
        </ButtonLink>
      </div>
    </section>
  )
}
