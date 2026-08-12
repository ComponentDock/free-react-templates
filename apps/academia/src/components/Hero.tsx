import { GraduationCap, Laptop, Play } from 'lucide-react'

/* Hero (source: div.slider_area > div.single_slider.slider_bg_1 — 100vh
   purple-gradient cover with soft circles; flat illustration left, white
   three-line headline + teal pill CTA right). The illustration is recreated
   as a light composition of lucide icons; the gradient approximates the
   banner art. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(135deg,#9b6bff_0%,#7c32ff_55%,#5e5bff_100%)]"
    >
      {/* Soft abstract circles (source banner art). */}
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 right-10 h-[420px] w-[420px] rounded-full bg-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-white/5"
      />

      <div className="relative mx-auto grid max-w-[1140px] items-center gap-12 px-[15px] py-32 lg:grid-cols-2">
        {/* Flat illustration composition (source: img banner/edu_ilastration.png). */}
        <div className="relative mx-auto w-full max-w-[460px]">
          <div className="relative rounded-3xl bg-white p-10 shadow-2xl">
            <Laptop className="mx-auto h-28 w-28 text-brand" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand shadow-lg">
                <Play className="h-7 w-7 fill-white text-white" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              {[0, 1, 2].map((n) => (
                <span
                  key={n}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-iris/20"
                >
                  <GraduationCap className="h-6 w-6 text-iris" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Headline + CTA (source: div.slider_info). */}
        <div className="text-center lg:text-left">
          <h1 className="text-[40px] font-semibold leading-[1.2] text-white lg:text-[56px]">
            Learn your
            <br />
            Favorite Course
            <br />
            From Online
          </h1>
          <p className="mx-auto mt-6 max-w-[440px] font-serif text-[17px] leading-7 text-white/90 lg:mx-0">
            Learn from industry experts and start your journey with courses crafted for every level
            — from first steps to professional mastery.
          </p>
          <a
            href="#courses"
            className="mt-9 inline-block rounded-[30px] bg-brand px-[50px] py-[17px] text-[16px] font-medium text-white transition-colors hover:bg-brand/90"
          >
            Browse Our Courses
          </a>
        </div>
      </div>
    </section>
  )
}
