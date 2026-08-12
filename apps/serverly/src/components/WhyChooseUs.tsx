import { whyFeatures } from '../data'

/* "Why Choose us?" — three centered icon feature cards (the original's
   icon_box_1: 158px circular icon, 24px title, 14px description). */
export function WhyChooseUs() {
  return (
    <section id="why" className="bg-white pt-[42px] pb-[100px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[36px] font-semibold text-[#2c2c2c]">Why Choose us?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-steel-400">
            Ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {whyFeatures.map((feature) => (
            <article key={feature.title} className="flex flex-col items-center text-center">
              <div className="flex h-[158px] w-[158px] items-center justify-center rounded-full bg-steel-300">
                <feature.icon className="h-16 w-16 text-brand-500" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[#2c2c2c]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-400">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
