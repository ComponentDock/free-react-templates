import { ButtonLink } from '@free-react-templates/ui'
import { Counters } from './Counters'

export function About() {
  return (
    <section aria-label="Club overview" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <Counters />
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <div className="mr-auto max-w-[450px]">
            <h2 className="text-3xl font-black text-primary">Step Up Your Fitness</h2>
            <p className="mt-6 text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <ButtonLink
              href="#contact-section"
              className="mt-8 rounded-[4px] bg-primary px-4 py-3 text-btn-text hover:bg-primary-hover hover:text-white"
            >
              Get In Touch
            </ButtonLink>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/pumply-about/720/600"
              alt="Athlete training with a kettlebell in the gym"
              className="w-full object-cover shadow-[10px_10px_0_0_#48d494]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
