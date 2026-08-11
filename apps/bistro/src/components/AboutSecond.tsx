/**
 * AboutSecond — second about block (source `.about-area2`): same heading as
 * About but with a lighter (font-light) second paragraph and a kitchen photo
 * on the left. Text block and photo swap order on desktop (photo left).
 */
export function AboutSecond() {
  return (
    <section className="bg-white py-24 lg:py-[195px] lg:pb-[140px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/bistro-kitchen/700/500"
          alt="Our kitchen team at work"
          loading="lazy"
          className="order-2 w-full rounded-md object-cover lg:order-1"
        />
        <div className="order-1 lg:order-2">
          <span className="text-base font-medium text-brand">About Our Restaurant</span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink lg:text-[49px]">
            We provide good food for your family
          </h2>
          <p className="mt-6 font-medium leading-relaxed text-navy">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="mt-4 font-light leading-relaxed text-navy">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by the name of Lorem
            Ipsum decided to leave for the far World of Grammar.
          </p>
        </div>
      </div>
    </section>
  )
}
