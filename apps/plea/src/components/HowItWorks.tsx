import { Calendar, MessageCircle, ThumbsUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Make Schedule',
    description:
      'Book an appointment at a time that works best for you through our easy scheduling system.',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Start Discussion',
    description:
      'Meet with a professional counselor or attorney to discuss your situation in a safe environment.',
  },
  {
    number: '03',
    icon: ThumbsUp,
    title: 'Enjoy Plan',
    description:
      'Receive a customized plan tailored to your needs and start your journey toward resolution.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-[#f5f4f0] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+2rem)] top-8 hidden w-[calc(100%-4rem)] border-t-2 border-dashed border-gray-300 md:block" />
              )}

              <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#589167]">
                <step.icon className="h-7 w-7 text-white" />
              </div>

              <span className="mb-1 text-sm font-bold text-[#589167]">{step.number}</span>
              <h3 className="mb-2 text-lg font-semibold text-[#1a1a1a]">{step.title}</h3>
              <p className="max-w-xs text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
