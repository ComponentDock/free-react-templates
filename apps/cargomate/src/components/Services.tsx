import { services } from '../data'

/** Services (reference `.service-area`): a dark navy block behind three
 *  image-topped cards; each card has a dark content box with a white
 *  uppercase title, copy, and a "Learn More" link that slides right with a
 *  red bar. On hover the box whitens, the title turns red, and the image
 *  scales. */
export function Services() {
  return (
    <section
      id={services.id}
      aria-label="Services"
      className="relative bg-navy pb-[320px] pt-[100px] lg:pt-[150px]"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-normal tracking-[1px] text-brand uppercase">
            {services.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-[32px] leading-tight font-bold text-white uppercase lg:text-[42px]">
            {services.heading}
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.cards.map((card, index) => (
            <article key={index} className="group">
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt=""
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="border border-white/30 bg-navy px-[40px] py-[45px] transition-colors duration-300 group-hover:bg-white lg:px-[50px]">
                <h3 className="font-heading text-[21px] font-normal text-white uppercase transition-colors duration-300 group-hover:text-brand">
                  {card.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-muted">
                  {card.text}
                </p>
                <a href="#quote" className="link-bar mt-6 text-white group-hover:text-navy">
                  {card.link}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
