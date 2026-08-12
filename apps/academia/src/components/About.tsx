/* About (source: div.about_area — heading + Crimson paragraph + Enroll pill
   left; three overlapping translucent stat circles right: peach 20+, light
   blue 7638, teal 230+). */
const STAT_CIRCLES = [
  { value: '20+', label: 'Courses', tone: 'peach', size: 'h-[270px] w-[270px]' },
  { value: '7638', label: 'Courses', tone: 'sky', size: 'h-[310px] w-[310px]' },
  { value: '230+', label: 'Courses', tone: 'brand', size: 'h-[270px] w-[270px]' },
] as const

const TONE_CLASSES: Record<string, string> = {
  peach: 'bg-peach/70',
  sky: 'bg-sky/70',
  brand: 'bg-brand/70',
}

export function About() {
  return (
    <section id="about" className="bg-white py-[120px]">
      <div className="mx-auto grid max-w-[1140px] items-center gap-16 px-[15px] lg:grid-cols-2">
        <div>
          <h2 className="text-[46px] font-normal leading-[1.15] text-ink lg:text-[38px]">
            Over 7000 Tutorials
            <br />
            from 20 Courses
          </h2>
          <p className="mt-6 max-w-[500px] font-serif text-[17px] leading-7 text-smoke">
            Our set he for firmament morning sixth subdue darkness creeping gathered divide our let
            god moving in fourth air night bring upon it beast.
          </p>
          <a
            href="#courses"
            className="mt-9 inline-block rounded-[30px] bg-brand px-[50px] py-[17px] text-[16px] font-medium text-white transition-colors hover:bg-brand/90"
          >
            Enroll a Course
          </a>
        </div>

        {/* Overlapping stat circles (source: .about_tutorials). */}
        <div className="relative mx-auto h-[420px] w-full max-w-[520px]">
          {STAT_CIRCLES.map((circle, index) => (
            <div
              key={circle.value + index}
              data-stat-circle={circle.tone}
              className={`absolute flex flex-col items-center justify-center rounded-full text-white ${circle.size} ${TONE_CLASSES[circle.tone]}`}
              style={
                index === 0
                  ? { left: '10%', top: '-5px' }
                  : index === 1
                    ? { right: '0', top: '-60px' }
                    : { left: '27%', top: '50%' }
              }
            >
              <span className="text-[60px] font-semibold leading-none">{circle.value}</span>
              <p className="mt-2 text-[18px]">{circle.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
