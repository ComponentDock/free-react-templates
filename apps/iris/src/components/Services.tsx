import { SERVICES, SERVICES_TEXT, SERVICES_TITLE } from '../data'

/**
 * Services — centered serif title plus a mosaic of eight alternating
 * image and light-panel text cells.
 */
export function Services() {
  return (
    <section id="services" className="bg-white py-[120px]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-[75px] max-w-[670px] text-center">
          <h2 className="mb-4 font-serif text-4xl text-ink md:text-[42px]">{SERVICES_TITLE}</h2>
          <p className="text-sm">{SERVICES_TEXT}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((cell, index) =>
            cell.kind === 'image' ? (
              <img
                key={index}
                src={cell.image}
                alt=""
                className="aspect-square h-full w-full object-cover"
              />
            ) : (
              <div key={index} className="flex flex-col bg-light px-10 pb-10 pt-24">
                <h4 className="mb-4 font-serif text-xl leading-[27px] text-ink">{cell.heading}</h4>
                <p className="text-sm">{cell.text}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
