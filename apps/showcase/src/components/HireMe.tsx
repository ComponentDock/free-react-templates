import { ButtonLink } from '@free-react-templates/ui'

export function HireMe() {
  return (
    <section aria-label="Hire me" className="relative overflow-hidden py-28 lg:py-36">
      <img
        src="https://picsum.photos/seed/showcase-hireme/1600/700"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-brand/85 to-[#251bc3]/90"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-4xl font-black text-white lg:text-[40px]">
          I&apos;m Available for freelancing
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/90">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia.
        </p>
        <ButtonLink href="#contact-section" className="mt-8 px-10 text-base">
          Hire me
        </ButtonLink>
      </div>
    </section>
  )
}
