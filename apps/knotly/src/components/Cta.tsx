import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section id="jobs" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-[22px] bg-gradient-to-br from-[#a65cff] to-[#8266ff] px-6 py-16 text-center shadow-xl">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Start finding your dream job
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Browse thousands of roles matched to your skills and let the automated process take care
            of the rest.
          </p>
          <ButtonLink
            href="#contact"
            className="mt-8 rounded-full bg-blush px-10 py-4 text-base hover:bg-[#e055e8]"
          >
            Browse Job
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
