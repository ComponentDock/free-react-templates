import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">About us</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Welcome to Rently
          </h2>
          <p className="mt-6 leading-relaxed text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics.
          </p>
          <p className="mt-4 leading-relaxed text-mist">
            On her way she met a copy. The copy warned the Little Blind Text, that where it came
            from it would have been rewritten a thousand times.
          </p>
          <Button size="lg" className="mt-8">
            Search Vehicle
          </Button>
        </div>
      </div>
    </section>
  )
}
