import { DonationForm } from './DonationForm'

/* .donation-form-area — the white .donation-box overlapping the banner's
   bottom edge (~170px) with a USD select, amount input, One Time/Ongoing
   radios, and a green "Donate Now" button. */
export function DonationFormSection() {
  return (
    <section className="relative z-10 mt-[-170px] pb-[150px]">
      <div className="mx-auto max-w-3xl px-4">
        <div className="bg-white p-8 shadow-[0_20px_50px_0_rgba(153,153,153,0.2)] md:p-12">
          <DonationForm idPrefix="banner" withDonationType />
        </div>
      </div>
    </section>
  )
}
