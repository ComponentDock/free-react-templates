import { GOLD_SPONSORS, SILVER_SPONSORS } from '../data'

/* Sponsors section: dark background image with Gold tier (3 logos)
   and Silver tier (3 logos). Uses placeholder company names. */

export function Sponsors() {
  return (
    <section className="relative overflow-hidden py-[100px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/conclave-sponsors-bg/1920/1080)',
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#111429]/85" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p
            className="text-sm font-medium uppercase tracking-wider text-[#ea0763]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Partners &amp; Sponsors
          </p>
          <h2
            className="mt-3 text-3xl font-bold uppercase tracking-wide text-white md:text-[38px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Official Sponsors
          </h2>
        </div>

        {/* Gold Tier */}
        <div className="mt-14">
          <p
            className="text-center text-sm font-bold uppercase tracking-wider text-[#FFD700]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Gold Sponsors
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {GOLD_SPONSORS.map((sponsor) => (
              <div
                key={sponsor}
                className="flex h-[150px] w-[250px] items-center justify-center border-2 border-[#FFD700]/30 bg-white/10 transition-colors hover:bg-white/20"
              >
                <span className="text-xl font-bold uppercase tracking-wider text-white">
                  {sponsor}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Tier */}
        <div className="mt-14">
          <p
            className="text-center text-sm font-bold uppercase tracking-wider text-[#C0C0C0]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Silver Sponsors
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {SILVER_SPONSORS.map((sponsor) => (
              <div
                key={sponsor}
                className="flex h-[130px] w-[220px] items-center justify-center border-2 border-[#C0C0C0]/30 bg-white/10 transition-colors hover:bg-white/20"
              >
                <span className="text-lg font-bold uppercase tracking-wider text-white">
                  {sponsor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
