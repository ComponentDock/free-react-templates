import { WHY_CHOOSE } from '../data'

/* Why Choose Us — photo on the left, heading and three numbered feature
   rows (01/02/03 in gold) on the right. */
export function WhyChoose() {
  return (
    <section aria-label="Why Choose Us" className="px-4 py-24 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 lg:flex-row lg:items-center">
        <div className="w-full max-w-md shrink-0 lg:w-2/5">
          <img
            src={WHY_CHOOSE.photo}
            alt="Legal practice"
            loading="lazy"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h2 className="font-display text-4xl font-bold text-ink">{WHY_CHOOSE.heading}</h2>
          <div className="mt-8 flex flex-col gap-6">
            {WHY_CHOOSE.items.map((item) => (
              <div key={item.number} className="flex items-start gap-5">
                <span className="font-display text-2xl font-bold text-brand">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}