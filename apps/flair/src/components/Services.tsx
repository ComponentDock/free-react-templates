import { IMAGES, SERVICES } from '../data'

/* Services — "Our Services" on a photo background with the dark navy
   overlay: three centered cards with 40px purple icons (gradient-clipped
   text is not possible on lucide SVGs, so the icons use the gradient's
   purple start colour), white titles and white paragraphs. */
export function Services() {
  return (
    <section
      aria-label="Services"
      className="relative bg-cover bg-center py-[100px]"
      style={{ backgroundImage: `url('${IMAGES.services}')` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[rgba(4,8,29,0.7)]" />
      <div className="relative mx-auto max-w-[1170px] px-6 text-center">
        <h2 className="text-[30px] font-bold text-white lg:text-[38px]">{SERVICES.heading}</h2>
        <p className="mt-4 text-sm leading-[1.8] text-white/80">{SERVICES.subtext}</p>
        <div className="mt-[50px] grid gap-[30px] md:grid-cols-3">
          {SERVICES.items.map((service) => (
            <div key={service.title} className="text-center">
              <service.icon
                aria-hidden="true"
                className="mx-auto h-10 w-10 text-brand-purple transition-transform hover:scale-[1.2]"
              />
              <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-[1.8] text-white/80">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
