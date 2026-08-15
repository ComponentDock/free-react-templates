import { variationItems } from '../data'

export function Variation() {
  return (
    <section id="about" className="bg-white py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:grid-cols-3">
        {variationItems.map((item) => {
          const Icon = item.icon
          return (
            <article key={item.title} className="text-center">
              <Icon className="mx-auto h-14 w-14 text-teal" aria-hidden="true" />
              <h3 className="mt-10 mb-3 font-sans text-[22px] text-navy">{item.title}</h3>
              <p className="mx-auto max-w-sm font-sans text-base leading-7 text-muted">
                {item.text}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
