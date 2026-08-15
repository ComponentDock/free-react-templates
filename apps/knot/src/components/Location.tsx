import {
  addressColumns,
  locationAddress,
  locationPhone,
  locationTitle,
  mapEmbedTitle,
  mapEmbedUrl,
} from '../data'

export function Location() {
  const phoneHref = 'tel:' + locationPhone.replace(/[^\d+]/g, '')

  return (
    <section id="location-section" className="relative pb-24">
      <iframe
        title={mapEmbedTitle}
        src={mapEmbedUrl}
        loading="lazy"
        className="h-[450px] w-full border-0"
      />
      <div className="relative z-10 mx-auto -mt-28 w-[min(100%-2rem,616px)] bg-white p-[54px_60px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] max-md:p-5">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-normal text-brand">{locationTitle}</h2>
          <p className="mt-4 text-base leading-7">{locationAddress}</p>
          <p className="mt-2">
            <a href={phoneHref} className="text-brand">
              {locationPhone}
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-center max-md:grid-cols-1">
          {addressColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-semibold text-brand">{column.title}</h3>
              <p className="mt-3 text-[15px] leading-6">{column.hours}</p>
              <p className="mt-1 text-[15px] leading-6">{column.venue}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
