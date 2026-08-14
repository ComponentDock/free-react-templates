import { cn } from '@free-react-templates/ui'
import { intro } from '../data'

/** White intro section: the big 72px heading plus two alternating image +
 *  text rows, each with a red underline "Find out more" link. */
export function Intro() {
  return (
    <section id="about" className="bg-white py-24 lg:py-[110px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-heading text-4xl font-bold leading-tight text-heading lg:text-[72px] lg:leading-none">
          {intro.title}
        </h2>

        <div className="mt-16 space-y-20 lg:mt-20">
          {intro.rows.map((row) => (
            <div
              key={row.heading}
              className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16"
            >
              <img
                src={row.image}
                alt=""
                loading="lazy"
                className={cn('w-full max-w-xl lg:w-1/2', row.imageRight && 'lg:order-2')}
              />
              <div className={cn('flex-1', row.imageRight && 'lg:order-1')}>
                <h3 className="font-heading text-3xl font-bold leading-snug text-heading">
                  {row.heading}
                </h3>
                <p className="mt-6 text-[15px] leading-7 text-body">{row.text}</p>
                <a
                  href="#about"
                  className="mt-8 inline-block border-b border-brand pb-0.5 font-heading text-lg font-bold text-brand transition-opacity hover:opacity-80"
                >
                  Find out more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
