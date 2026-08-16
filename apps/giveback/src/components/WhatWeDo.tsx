import { ButtonLink } from '@free-react-templates/ui'
import { whatWeDo } from '../data'

export function WhatWeDo() {
  return (
    <section id="doing" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src={whatWeDo.image}
          alt="Volunteer helping a person in need"
          className="w-full object-cover"
        />
        <div>
          <span className="text-base font-medium uppercase tracking-widest text-teal">
            {whatWeDo.kicker}
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-navy sm:text-4xl dark:text-white">
            {whatWeDo.title}
          </h2>
          <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-ink">
            {whatWeDo.paragraph}
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#contact"
              className="rounded-none border-2 border-brand px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
            >
              {whatWeDo.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
