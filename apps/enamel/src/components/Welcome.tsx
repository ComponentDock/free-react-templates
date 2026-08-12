/** Split welcome section: clinic photo left, "Welcome to Enamel" subheading,
    big headline, two paragraphs and a founder card right (the source
    .wrap-about block). */
export function Welcome() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <img
            src="https://picsum.photos/id/1081/1000/1200"
            alt="Modern dental clinic building"
            className="h-full max-h-[520px] w-full object-cover"
          />
        </div>
        <div className="lg:col-span-7">
          <p className="text-base font-medium uppercase tracking-[2px] text-ink">
            Welcome to Enamel
          </p>
          <h2 className="mt-3 text-2xl font-normal leading-snug text-ink md:text-[32px]">
            Medical specialty concerned with the care of acutely ill hospitalized patients
          </h2>
          <p className="mt-5 leading-relaxed text-mist">
            Enamel is a modern dental clinic built around gentle, honest care. Our team combines
            decades of clinical experience with the latest equipment so every visit is as
            comfortable as it is thorough.
          </p>
          <p className="mt-4 leading-relaxed text-mist">
            From routine cleanings to full smile makeovers, we listen first and treat second —
            because healthy teeth start with a conversation, not a drill.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <img
              src="https://picsum.photos/seed/enamel-founder/80/80"
              alt=""
              className="h-20 w-20 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-medium text-ink">Dr. Paul Foster</p>
              <p className="text-sm text-mist">CEO, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
