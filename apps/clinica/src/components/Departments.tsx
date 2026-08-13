import { useState } from 'react'
import { ArrowRight, Bone, Brain, Droplets, Ear, HeartPulse, Stethoscope } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { departments, type DeptIcon } from '../data'

const deptIcons: Record<DeptIcon, typeof Stethoscope> = {
  dentistry: Stethoscope,
  cardiology: HeartPulse,
  ent: Ear,
  astrology: Bone,
  neuro: Brain,
  blood: Droplets,
}

/** "Our Medical Services" department tab panel: six white icon tab cards
 *  (active = light-blue gradient) and a shared gradient content pane with
 *  a heading, paragraph, white "Appointment" button and photo. All six
 *  panes carry identical content, faithful to the source. */
export function Departments() {
  const [active, setActive] = useState(0)

  return (
    <section id="department-section" className="relative py-24 md:py-[120px]">
      <img
        src="https://picsum.photos/seed/clinica-dept-bg/1600/900"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/75" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1320px] px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-[600px] text-center">
          <span className="inline-flex items-center gap-5 text-[18px] font-bold uppercase text-[#396cf0]">
            <span className="h-[2px] w-[50px] bg-[#396cf0]" aria-hidden="true" />
            {departments.kicker}
            <span className="h-[2px] w-[50px] bg-[#396cf0]" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-[40px] font-extrabold leading-tight text-ink md:text-[50px]">
            {departments.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {departments.tabs.map((tab, index) => {
            const Icon = deptIcons[tab.icon]
            const isActive = index === active
            return (
              <button
                key={tab.label}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(index)}
                className={cn(
                  'flex flex-col items-center gap-3 rounded-[3px] bg-white p-[30px] shadow-sm transition-colors',
                  isActive && 'bg-[linear-gradient(0deg,#24c0f1,#4c9afe)] text-white shadow-md',
                )}
              >
                <Icon className="h-10 w-10" aria-hidden="true" />
                <span className="font-sans text-[16px] font-semibold">{tab.label}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row">
          <div className="flex flex-col justify-center bg-[linear-gradient(0deg,#24c0f1,#4c9afe)] p-10 lg:w-7/12 lg:p-[100px]">
            <h3 className="text-[25px] font-semibold leading-[1.4] text-white lg:text-[35px]">
              {departments.pane.title}
            </h3>
            <p className="mt-5 mb-12 text-white/90">{departments.pane.paragraph}</p>
            <ButtonLink
              href={departments.pane.href}
              className="w-fit rounded-none bg-white px-[69px] py-[20px] text-[16px] font-semibold text-black hover:bg-gray-100"
            >
              {departments.pane.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <img
            src={departments.pane.image}
            alt={departments.pane.alt}
            className="h-[320px] w-full object-cover lg:h-auto lg:w-5/12"
          />
        </div>
      </div>
    </section>
  )
}
