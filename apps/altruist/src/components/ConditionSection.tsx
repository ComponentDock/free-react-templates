import { CONDITION_CHECKLIST } from '../data'

/* .condition-area — two-slide carousel recreated as a static alternating
   two-row grid: photo + "New way to give back" copy with a teal square-
   bullet checklist. */
function SlideContent() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-ink lg:text-[40px]">
        New way to give back
      </h1>
      <p className="mt-6 leading-[1.625] text-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris.
      </p>
      <p className="mt-4 leading-[1.625] text-body">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </p>
      <ul className="mt-8 space-y-3">
        {CONDITION_CHECKLIST.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span aria-hidden="true" className="mt-[7px] h-2 w-2 shrink-0 bg-teal" />
            <span className="text-[15px] text-body">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ConditionSection() {
  return (
    <section id="about" className="bg-white py-[150px]">
      <div className="mx-auto max-w-6xl space-y-24 px-4">
        {[0, 1].map((slide) => (
          <div key={slide} className="grid items-center gap-10 lg:grid-cols-2">
            {slide % 2 === 0 ? (
              <img
                src="https://picsum.photos/seed/altruist-6/900/700"
                alt="Children drinking clean water"
                className="w-full object-cover"
              />
            ) : (
              <SlideContent />
            )}
            {slide % 2 === 0 ? (
              <SlideContent />
            ) : (
              <img
                src="https://picsum.photos/seed/altruist-6/900/700"
                alt="Children drinking clean water"
                className="w-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
