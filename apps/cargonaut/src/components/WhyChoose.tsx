import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { reasons } from '../data'

const aboutImage = 'https://picsum.photos/seed/cargonaut-about/900/700'

export function WhyChoose() {
  return (
    <section id="about" className="px-4 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <img
          src={aboutImage}
          alt="Cargo ship being loaded at the quay"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div>
          <h2 className="text-3xl font-normal text-navy sm:text-[46px] sm:leading-[52px]">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
            incididunt.
          </p>
          <ul className="mt-6 space-y-3">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-body">
                <Check className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                {reason}
              </li>
            ))}
          </ul>
          <ButtonLink
            href="#services"
            variant="outline"
            className="mt-8 rounded-none border border-brand px-10 py-3 text-sm uppercase tracking-[3px] text-brand hover:bg-brand hover:text-white"
          >
            About Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
