import { stripCount, stripLabel, stripTileLabel } from '../data'

export function InstagramStrip() {
  return (
    <section aria-label={stripLabel} className="border-t border-hairline bg-white">
      <ul className="grid grid-cols-3 md:grid-cols-6">
        {Array.from({ length: stripCount }, (_, index) => (
          <li key={index}>
            <a href="#" className="group relative block overflow-hidden">
              <img
                src={`https://picsum.photos/seed/sojourn-strip-${index + 1}/320/320`}
                alt={stripTileLabel(index)}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:skew-x-[5deg]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
