import { BarChart, FileText, Laptop, TrendingUp } from 'lucide-react'
import { services } from '../data'

const serviceIcons = [TrendingUp, BarChart, Laptop, FileText]

/* Services (source: section.categories-area — centered heading + FOUR white
   cards, each with a line icon in a light-pink circle; on hover the card
   fills dark navy from the bottom and the text flips white). */
export function Services() {
  return (
    <section
      id="services"
      className="bg-[radial-gradient(#f2f2f2_1px,transparent_1px)] [background-size:24px_24px] py-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-[15px]">
        <div className="mb-[60px] text-center">
          <span className="mb-[18px] block text-[13px] font-medium uppercase tracking-[0.1em] text-brand">
            {services.kicker}
          </span>
          <h2 className="font-heading text-[36px] font-bold text-navy lg:text-[40px]">
            {services.heading}
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {serviceIcons.map((Icon, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-[5px] bg-white p-[40px_21px] text-center shadow-[0_25px_60px_0_rgba(0,0,0,0.08)]"
            >
              {/* Navy fill from the bottom on hover (source: .single-cat::before). */}
              <div
                className="absolute inset-0 origin-bottom scale-y-0 bg-navy transition-transform duration-500 group-hover:scale-y-100"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ffe9f2] text-brand transition-colors group-hover:bg-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-[22px] font-bold text-navy transition-colors group-hover:text-white">
                  {services.cardTitle}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-copy transition-colors group-hover:text-white/90">
                  {services.cardCopy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
