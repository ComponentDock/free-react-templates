import { about } from '../data'

const sectionClass = 'px-4 py-[70px] md:py-[80px] xl:py-[130px]'
const containerClass = 'mx-auto max-w-[1140px] px-4'

/** White about band: centred statement, 7/5 collage, centred paragraph 60px below. */
export function About() {
  return (
    <section id="about" className={`bg-white ${sectionClass}`}>
      <div className={containerClass}>
        <h2 className="mx-auto mb-[81px] max-w-[760px] text-center text-[26px] leading-[1.25] font-bold text-ink xl:text-[36px]">
          {about.statement}
        </h2>

        <div className="mx-auto flex max-w-[1140px] flex-col gap-[30px] lg:flex-row">
          <figure className="lg:w-7/12">
            <img
              src={about.images.wide.src}
              alt={about.images.wide.alt}
              width={760}
              height={520}
              loading="lazy"
              className="h-[320px] w-full object-cover lg:h-[440px]"
            />
          </figure>
          <figure className="hidden lg:block lg:w-5/12">
            <img
              src={about.images.tall.src}
              alt={about.images.tall.alt}
              width={540}
              height={520}
              loading="lazy"
              className="h-[320px] w-full object-cover lg:h-[440px]"
            />
          </figure>
        </div>

        <p className="mx-auto mt-[60px] max-w-[760px] text-center text-[15px] leading-[1.8] text-body">
          {about.paragraph}
        </p>
      </div>
    </section>
  )
}
