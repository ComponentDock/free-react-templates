import { welcome } from '../data'

/** Split welcome section: image on the left (wider than its column,
 *  overlapping into the text side) and a thick-bordered (#f9f9f9 10px)
 *  text panel on the right with an h2, two paragraphs and a gradient
 *  "learn more" button. */
export function Welcome() {
  return (
    <section id="welcome" className="bg-white pb-[130px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="relative w-full shrink-0 lg:w-[45%]">
            <img
              src={welcome.image}
              alt="Medical care at our clinic"
              loading="lazy"
              className="relative z-[1] w-[120%] max-w-none"
            />
          </div>
          <div className="w-full border-[10px] border-[#f9f9f9] p-10 lg:w-[55%] lg:p-[100px]">
            <h2 className="mb-6 text-[30px] font-bold text-ink md:text-[36px]">
              {welcome.heading}
            </h2>
            {welcome.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 16)}
                className="mb-5 text-[15px] leading-relaxed text-body"
              >
                {paragraph}
              </p>
            ))}
            <a
              href="#contact"
              className="mt-4 inline-flex items-center justify-center px-8 py-3 text-[12px] font-normal uppercase tracking-wide text-white transition-opacity hover:opacity-80"
              style={{ background: 'linear-gradient(to right, #244cfd, #15e4fd)' }}
            >
              {welcome.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
