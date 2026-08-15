import { gradientStripHeading } from '../data'

export function GradientStrip() {
  return (
    <section
      aria-label="Services banner"
      className="bg-[linear-gradient(-45deg,#2f89fc_0%,#55fbc2_100%)] py-12"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-2xl font-normal text-white md:text-3xl">{gradientStripHeading}</h3>
      </div>
    </section>
  )
}
