import { MAP_TITLE } from '../data'

/**
 * MapSection — full-width map embed (source `section.Map-area`, Google Maps;
 * recreated with an OpenStreetMap iframe — no copied assets).
 */
export function MapSection() {
  return (
    <section aria-label="Map">
      <h2 className="sr-only">{MAP_TITLE}</h2>
      <iframe
        title="Machina location map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=90.33%2C23.70%2C90.45%2C23.80&amp;layer=mapnik&amp;marker=23.75%2C90.39"
        className="h-[420px] w-full border-0"
        loading="lazy"
      />
    </section>
  )
}
