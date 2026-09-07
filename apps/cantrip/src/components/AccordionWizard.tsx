import { useState } from 'react'
import { Step1BasicInfo } from './Step1BasicInfo'
import { Step2ContactInfo } from './Step2ContactInfo'
import { Step3Specialities } from './Step3Specialities'

const steps = [
  { id: 1, title: 'Basic Information', Component: Step1BasicInfo },
  { id: 2, title: 'Additional Information', Component: Step2ContactInfo },
  { id: 3, title: 'Specialities', Component: Step3Specialities },
]

export function AccordionWizard() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <div className="w-full max-w-[700px]">
      {steps.map(({ id, title, Component }) => {
        const isOpen = activeStep === id
        return (
          <div key={id} className="border-b border-border">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`step-${id}`}
              onClick={() => setActiveStep(id)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <h3 className="m-0 text-[18px] font-bold uppercase text-muted">{title}</h3>
              <span
                className={`text-muted transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
            {isOpen && (
              <div id={`step-${id}`} role="region" className="pb-8">
                <Component />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
