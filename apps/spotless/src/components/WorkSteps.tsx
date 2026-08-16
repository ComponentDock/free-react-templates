import { CalendarClock, CheckCircle2, ClipboardList } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Pick a suitable plan',
    text: 'Choose the service and frequency that fit your home and budget.',
  },
  {
    icon: CalendarClock,
    number: '02',
    title: 'Set your schedule',
    text: 'Book a time that works for you — mornings, evenings, or weekends.',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Get things done',
    text: 'Relax while our team leaves every corner clean and fresh.',
  },
] as const

export function WorkSteps() {
  return (
    <section
      id="how-it-works"
      className="bg-cover bg-center bg-no-repeat py-20 lg:py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/spotless-work/1920/900')" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="font-accent text-base font-semibold uppercase tracking-[4px] text-accent">
            How it work
          </p>
          <h2 className="mt-4 text-4xl font-medium text-white">
            Get Amazing Cleaning In 3 Simple Steps
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <span className="flex h-[170px] w-[170px] items-center justify-center rounded-full bg-brand shadow-lg">
                <step.icon className="h-16 w-16 text-white" aria-hidden="true" />
              </span>
              <p className="mt-6 font-accent text-3xl font-semibold text-accent">{step.number}</p>
              <h3 className="mt-2 text-xl font-medium text-white">{step.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/85">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
