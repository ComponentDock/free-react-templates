import { Plus } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { SectionHeading } from './SectionHeading'
import { btn } from './action'
import {
  trainers,
  trainersBand,
  trainersCta,
  trainersHeading,
  trainersLabel,
} from '../data'

export function Trainers() {
  return (
    <section
      id="trainers"
      aria-label="Our trainers"
      className="relative bg-cover bg-center pb-[100px] pt-[125px]"
      style={{ backgroundImage: `url(${trainersBand})` }}
    >
      <div className="absolute inset-0 bg-[#0b1c8a]/80" />
      <div className="relative mx-auto max-w-[1170px] px-4">
        <div className="relative">
          <SectionHeading label={trainersLabel} title={trainersHeading} />
          <ButtonLink
            href="#classes"
            className={cn(btn.base, btn.dark, 'mb-[40px] md:absolute md:bottom-[13px] md:right-0 md:mb-0')}
          >
            {trainersCta}
          </ButtonLink>
        </div>

        <div className="grid gap-[30px] md:grid-cols-3">
          {trainers.map((trainer) => (
            <figure key={trainer.name} className="relative">
              <img
                src={trainer.image}
                alt={trainer.alt}
                loading="lazy"
                className="h-[420px] w-full object-cover"
              />
              <span
                aria-hidden="true"
                data-trainer-tab="true"
                className="absolute left-[15px] top-0 flex items-center justify-center bg-brand px-[40px] py-[37px] text-white"
              >
                <Plus className="h-5 w-5" aria-hidden="true" />
              </span>
              <figcaption className="pt-[48px]">
                <h3 className="text-[18px] font-bold uppercase tracking-[1.5px] text-white">
                  {trainer.name}
                </h3>
                <span className="mt-[5px] block text-[15px] font-normal text-white opacity-60">
                  {trainer.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
