import { donateCards, donateEyebrow, donateText, donateTitle } from '../data'

export function DonateCta() {
  return (
    <section
      id="donate"
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/meadow-donate/1920/1080')" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[53%] bg-canvas md:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:ml-auto md:mr-24 md:w-[53%] md:px-0">
        <span className="text-[13px] font-medium uppercase tracking-[1px] text-brand">
          {donateEyebrow}
        </span>
        <h2 className="mt-2 text-4xl font-medium text-ink">{donateTitle}</h2>
        <p className="mt-4 text-body">{donateText}</p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {donateCards.map((card) => {
            const Icon = card.icon
            return (
              <a
                key={card.title}
                href="#contact"
                className="group rounded-md bg-white p-5 transition-shadow hover:shadow-lg"
              >
                <div className="donate-icon flex h-20 w-20 items-center justify-center rounded-tr-full rounded-br-full rounded-bl-full border border-mint bg-white transition-colors group-hover:border-brand group-hover:bg-brand">
                  <Icon
                    aria-hidden="true"
                    className="h-10 w-10 text-brand transition-colors group-hover:text-white"
                  />
                </div>
                <h3 className="mt-4 text-base font-medium text-ink">{card.title}</h3>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
