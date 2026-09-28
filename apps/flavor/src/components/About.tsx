import { about } from '../data'

/** Two-column about section: heading, copy on the left, two food images
 *  on the right. */
export function About() {
  return (
    <section id="about" className="bg-section py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold">{about.heading}</h1>
          <p className="mt-6 leading-relaxed">{about.body}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {about.images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Flavor restaurant food ${index + 1}`}
              loading="lazy"
              className="w-full rounded-[10px] object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
