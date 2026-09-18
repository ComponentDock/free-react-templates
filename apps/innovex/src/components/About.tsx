import { Lightbulb } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <div
              className="aspect-[4/3] w-full rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('https://picsum.photos/seed/innovex-about/800/600')" }}
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <span className="mb-2 block font-script text-xl text-primary-300">
              Welcome to Innovex
            </span>
            <h2 className="mb-6 text-3xl font-bold text-dark md:text-4xl">
              Highest <br /> Creative Standards
            </h2>
            <p className="mb-8 text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                <Lightbulb size={28} className="text-primary-300" />
              </div>
              <div>
                <span className="text-3xl font-bold text-dark">42</span>
                <span className="ml-2 text-gray-600">
                  Years Of <br /> Experienced
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
