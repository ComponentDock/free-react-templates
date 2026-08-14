const skills = [
  { label: 'Nature', value: 75 },
  { label: 'Passion', value: 100 },
  { label: 'Portraits', value: 90 },
] as const

export function Intro() {
  return (
    <section id="about" className="bg-white px-[15px] py-[90px] lg:py-[120px]">
      <div className="mx-auto flex max-w-[1780px] flex-col gap-12 lg:flex-row">
        <div className="lg:w-3/5">
          <h2 className="text-3xl font-medium text-ink md:text-5xl">
            My name is Sam. I&rsquo;m a photographer
          </h2>
          <p className="mt-6 mb-11 max-w-xl text-base leading-[1.8] text-body">
            I&rsquo;m a freelance photographer based in New York, specializing in landscapes, macro,
            and portrait photography. For over a decade I&rsquo;ve been documenting the world around
            me — from the quiet corners of nature to the faces of the people I meet.
          </p>
          <a
            href="#portfolio"
            className="inline-block border-b-[3px] border-ink pb-1 pr-[15px] text-base font-medium text-ink transition-opacity hover:opacity-60"
          >
            Take a look @my portfolio
          </a>
        </div>

        <div className="lg:w-2/5 lg:pl-[83px] lg:pt-20">
          {skills.map((skill) => (
            <div key={skill.label} className="mb-[30px] last:mb-0">
              <div className="relative h-[6px] w-full">
                <div
                  className="absolute top-0 left-0 h-[6px] bg-ink"
                  style={{ width: `${skill.value}%` }}
                >
                  <span className="absolute top-[22px] right-0 flex h-10 w-[54px] items-start justify-center bg-ink pt-2 text-white">
                    {skill.value}%
                  </span>
                </div>
              </div>
              <p className="pt-7 text-base text-ink">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
