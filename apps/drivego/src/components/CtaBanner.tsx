import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className="bg-brand py-16">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-black text-white">What are you waiting for?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <div className="mt-8">
          <ButtonLink
            href="#listing"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-brand"
          >
            Rent a car now
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
