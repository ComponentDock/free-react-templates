import { aboutHeading, aboutPhoto, experienceLabel, experienceYears } from '../data'

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-display text-[42px] font-light leading-none text-ink sm:text-[50px]">
            {aboutHeading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-body">
            Every frame starts with a story. I photograph people, places, and moments the way they
            truly felt — honest, warm, and beautifully imperfect.
          </p>
          {/* Stylized SVG signature — replaces the source image signature */}
          <svg
            aria-hidden="true"
            viewBox="0 0 180 60"
            className="mt-10 h-14 w-44 text-ink"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M8 42c16-26 30-14 36-2 8 16 22 20 30 2 6-14 18-22 26-12 6 8 4 20-8 22-14 2-20-12-12-22 7-9 22-9 26 2" />
            <path d="M122 40c14-14 26-8 26 2 0 8-8 12-14 12s-10-6-6-12c4-7 14-7 16 2" />
          </svg>
        </div>

        <div>
          <img
            src={aboutPhoto}
            alt="Photographer at work"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div>
          <div className="flex items-baseline gap-4">
            <span className="font-display text-[110px] leading-none text-ink">
              {experienceYears}
            </span>
            <p className="max-w-[140px] text-xl font-light text-ink">{experienceLabel}</p>
          </div>
          <p className="mt-6 leading-relaxed text-body">
            A decade behind the lens across three continents — festivals, quiet homes, and
            everything in between.
          </p>
          <blockquote className="mt-6 border-l-2 border-ink pl-4 italic leading-relaxed text-body">
            A gray cat slinks past a wooden house — life is full of quiet moments worth keeping.
          </blockquote>
          <a
            href="#portfolios"
            className="mt-10 inline-block border border-ink px-[39px] py-[11px] font-display text-sm tracking-[1px] text-ink transition-colors hover:bg-hover-fill hover:text-white"
          >
            My Work
          </a>
        </div>
      </div>
    </section>
  )
}
