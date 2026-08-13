import { about } from '../data'

/** Two-column about section: heading, copy and a red "view full menu"
 *  button on the left, a food photograph on the right. */
export function About() {
  return (
    <section id="about" className="bg-white py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold">{about.heading}</h1>
          <p className="mt-6 leading-relaxed">{about.body}</p>
          <a
            href="#menu"
            className="mt-8 inline-block bg-brand px-[30px] leading-[42px] text-sm font-medium text-white uppercase transition-all duration-300 hover:shadow-[0px_20px_20px_0px_rgba(245,63,81,0.2)]"
          >
            {about.cta}
          </a>
        </div>
        <div>
          <img
            src={about.image}
            alt="Fresh food prepared by the Sizzle kitchen"
            loading="lazy"
            className="w-full rounded-[10px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}
