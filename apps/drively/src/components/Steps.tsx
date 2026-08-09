const steps = [
  { number: '01', title: 'Time & Place', blurb: 'Choose where and when to pick up your car.' },
  { number: '02', title: 'Car', blurb: 'Pick the car that fits your trip from our offer.' },
  { number: '03', title: 'Details', blurb: 'Add your trip details and driver information.' },
  { number: '04', title: 'Checkout', blurb: 'Confirm your booking and pay securely.' },
  { number: '05', title: 'Done', blurb: 'Grab the keys and enjoy the ride.' },
] as const

export function Steps() {
  return (
    <section id="about" className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-black text-ink dark:text-white">How it works</h2>
        <p className="mx-auto mt-2 max-w-md text-mist">
          Renting a car with Drively takes just five easy steps.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
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
      </div>
    </section>
  )
}
