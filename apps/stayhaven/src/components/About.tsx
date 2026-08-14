import { Play } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { ABOUT_IMAGE } from '../data'

/* About (source: section.py-5.bg-light — light-grey split: "Hey there!"
   serif heading + copy + red uppercase "Watch the video" button, photo on
   the right). */
export function About() {
  return (
    <section id="about" className="bg-mist py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold text-ink">Hey there!</h2>
          <p className="mt-5 leading-relaxed text-smoke">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="mt-4 leading-relaxed text-smoke">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <Button className="mt-8 h-auto rounded-full bg-brand px-8 py-3 font-medium uppercase tracking-widest hover:bg-brand-dark">
            <Play className="h-4 w-4" aria-hidden="true" />
            Watch the video
          </Button>
        </div>
        <img
          src={ABOUT_IMAGE}
          alt="A relaxing hotel room with warm morning light"
          className="w-full rounded-lg"
        />
      </div>
    </section>
  )
}
