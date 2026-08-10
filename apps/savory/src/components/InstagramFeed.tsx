import { instaTiles, postImage } from '../data'

export function InstagramFeed() {
  return (
    <section aria-label="Instagram feed" className="bg-panel/40">
      <h2 className="sr-only">Instagram Feed</h2>
      <ul className="grid grid-cols-5">
        {instaTiles.map((tile) => (
          <li key={tile.seed}>
            <a href="#instagram" aria-label={tile.alt} className="block">
              <img
                src={postImage(tile.seed, 300, 300)}
                alt={tile.alt}
                className="aspect-square w-full object-cover"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
