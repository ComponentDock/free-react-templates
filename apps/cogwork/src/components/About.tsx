import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="https://picsum.photos/seed/cogwork-about/600/400"
              alt="About our company"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="mb-6 text-3xl font-bold">Create, Enhance and Sustain</h2>
            <p className="mb-4 text-[#6c757d]">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[#fd5f00] hover:text-[#d75100]"
            >
              Read More <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
