import { ButtonLink } from '@free-react-templates/ui'

export function Promo() {
  return (
    <section id="about" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-black text-ink">
              You can easily avail our promo for renting a car
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-mist">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <div className="mt-6">
              <ButtonLink href="#listing">Meet them now</ButtonLink>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/drivego-promo/600/400"
              alt="Promotional car"
              className="w-full max-w-md rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
