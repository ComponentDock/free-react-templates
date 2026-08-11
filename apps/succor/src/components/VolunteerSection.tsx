import { DonationCounter } from './DonationCounter'

/* Seeded picsum placeholder for the source volunteer photograph
   (images/about.jpg — a smiling volunteer; must not be copied). The prep
   spec pinned seed succor-volunteer, but image screening (2026-08-11)
   showed it renders a dark coffee-brewing scene — off-subject.
   succor-nature renders a bright boardwalk leading to the ocean, a hopeful
   scene that reads well behind the white text block. */
const VOLUNTEER_IMAGE = 'https://picsum.photos/seed/succor-nature/1200/900'

const VOLUNTEER_BLURB =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.'

const DONATION_BLURB =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export function VolunteerSection() {
  return (
    /* section.ftco-volunteer — two-column split: photo panel (7/12, pulled
       up -70px over the hero on desktop) + black donation panel (5/12,
       #1e1e1e). */
    <section id="about" aria-label="Volunteer and donation" className="bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* .img-volunteer — cover photo, margin-top -70px ≥992px, with a
            white text block overlaid on its right side. */}
        <div
          className="min-h-[420px] bg-cover bg-[top_center] lg:mt-[-70px] lg:w-7/12"
          style={{ backgroundImage: `url('${VOLUNTEER_IMAGE}')` }}
        >
          <div className="flex justify-end">
            <div className="bg-white p-6 sm:p-10 lg:w-[60%]">
              <h2 className="text-[32px] font-black leading-[1.1] text-black lg:text-[50px]">
                We need volunteers in Africa
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-600">{VOLUNTEER_BLURB}</p>
              <p className="mt-6">
                <a
                  href="#causes"
                  className="inline-block rounded-[3px] bg-brand px-4 py-3 text-[16px] font-bold text-white transition-colors hover:bg-transparent hover:text-brand"
                >
                  Join now
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* .bg-black .about-text — #1e1e1e panel, vertically centered, with
            the animated "Donation so far $380,000" counter. */}
        <div className="flex items-center bg-coal lg:w-5/12">
          <div className="px-6 py-10 sm:px-10 lg:pl-12">
            <h2 className="text-[32px] font-black leading-[1.1] text-white lg:text-[50px]">
              Donation so far{' '}
              <span className="text-white/20">
                $<DonationCounter target={380000} />
              </span>
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/70">{DONATION_BLURB}</p>
            <p className="mt-6">
              <a
                href="#contact"
                className="inline-block rounded-[3px] bg-black px-4 py-3 text-[16px] font-bold text-white transition-colors hover:bg-[#333]"
              >
                Donate now
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
