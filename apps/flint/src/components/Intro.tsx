import { intro } from '../data'
import { SectionHeading } from './SectionHeading'

/* Editorial introduction: headline + pull quote + three paragraphs on the
   left, photo with an offset white caption card on the right. */
export function Intro() {
  return (
    <section id="about" className="pb-8 pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title={intro.headline} />
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <figure className="flex gap-4">
                <img
                  src="https://picsum.photos/seed/flint-person-1/80/80"
                  alt=""
                  className="h-10 w-10 flex-none rounded-full object-cover"
                />
                <blockquote className="font-serif text-lg italic leading-relaxed text-body">
                  {intro.quote}
                </blockquote>
              </figure>
              <div className="space-y-5 text-body">
                {intro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={`https://picsum.photos/seed/${intro.seed}/900/1100`}
              alt=""
              className="w-full object-cover"
            />
            <div className="relative z-10 -mt-12 ml-auto w-4/5 bg-white p-10">
              <div className="max-w-[400px]">
                <h3 className="font-display text-xl font-bold text-ink">{intro.caption.title}</h3>
                <p className="mt-3 text-body">{intro.caption.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
