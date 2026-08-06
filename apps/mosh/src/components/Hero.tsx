import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary-500 py-24 sm:py-32">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/mosh-hero/1600/900')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="font-display text-4xl font-black leading-tight text-white sm:text-5xl">
          A Clean and Modern Template
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-primary-100">
          Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus
          blandit. Etiam nec odio vestibul.
        </p>
        <div className="mt-9">
          <ButtonLink
            href="#services"
            className="rounded-full bg-white px-10 py-3.5 text-primary-500 hover:bg-primary-50"
          >
            Get your freebie template now!
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
