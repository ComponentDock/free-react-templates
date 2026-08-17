/* MapSection — full-width embedded map of the event location with an
   accessible label. */
export function MapSection() {
  return (
    <section id="map" aria-label="Map of the event location" className="scroll-mt-20 bg-white">
      <iframe
        title="Map of the event location"
        src="https://www.google.com/maps?q=3968%20Carson%20Street%2C%20San%20Diego%2C%20CA%2092101&output=embed"
        className="h-[400px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  )
}
