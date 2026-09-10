import { ButtonLink } from '@free-react-templates/ui'

const steps = [
  {
    number: '01',
    title: 'Select a car',
    blurb: 'Choose from our wide range of cars that suit your needs.',
  },
  {
    number: '02',
    title: 'Fill up form',
    blurb: 'Fill in your trip details and driver information.',
  },
  {
    number: '03',
    title: 'Payment',
    blurb: 'Confirm your booking and pay securely.',
  },
] as const

export function HowItWorks() {
  return (
    <section className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-black text-ink dark:text-white">How it works?</h2>
        <p className="mx-auto mt-2 max-w-md text-mist">
          Renting a car with DriveGo takes just three easy steps.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand font-display text-lg font-black text-brand">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ink dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-mist">{step.blurb}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="#about" variant="outline">
            Video how it works
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
