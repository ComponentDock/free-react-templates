import { FileText, Search, Zap } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Apply for loan',
    description: 'We will customize a loan based on the amount of cash your company need term',
  },
  {
    number: '02',
    icon: Search,
    title: 'Application review',
    description: 'We will customize a loan based on the amount of cash your company need term',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Get funding fast',
    description: 'We will customize a loan based on the amount of cash your company need term',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-works-bg py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-3 h-[3px] w-15 rounded bg-brand" />
          <h2 className="text-3xl font-normal text-navy lg:text-[44px]">How it Works</h2>
          <p className="mt-2 text-body-text">
            We provide online instant cash loans with quick approval that suit your term
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-brand text-brand">
                <span className="text-lg font-bold">{step.number}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-navy">{step.title}</h3>
              <p className="text-sm text-body-text">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
