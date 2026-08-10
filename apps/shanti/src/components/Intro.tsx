import { CheckCircle2 } from 'lucide-react'

const benefits = [
  'Yoga boosts brain power',
  'Yoga helps you to breathe better',
  'Yoga improves your strength',
  'Yoga helps you to focus',
  'Yoga helps give meaning to your day',
] as const

export function Intro() {
  return (
    <section
      id="about"
      aria-label="Why you should go to yoga"
      className="bg-cover bg-center py-28"
      style={{ backgroundImage: "url('https://picsum.photos/seed/shanti-2/1920/1080')" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="ml-auto max-w-xl">
          <h2 className="text-4xl font-extralight text-black sm:text-5xl">
            Why You Should Go To Yoga
          </h2>
          <p className="mt-6 leading-relaxed text-body-500">
            Yoga is more than a workout — it is a practice that calms the mind, strengthens the body
            and brings balance to everyday life. Whether you are new to the mat or a seasoned
            practitioner, every session leaves you lighter, stronger and more present.
          </p>
          <ul className="mt-10 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-4">
                <CheckCircle2
                  className="h-6 w-6 shrink-0 text-mauve-500"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-xl font-extralight text-black">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
