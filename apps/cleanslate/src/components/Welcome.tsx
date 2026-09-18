import { Phone } from 'lucide-react'

export function Welcome() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div
            className="md:w-1/2 relative min-h-[400px] bg-cover bg-center rounded-lg overflow-hidden"
            style={{ backgroundImage: 'url(https://picsum.photos/seed/cleanslate-about/800/600)' }}
          >
            <div className="absolute bottom-0 left-0 right-0">
              <div className="bg-white p-6 m-4 rounded-lg shadow-lg">
                <h2 className="text-brand-heading text-xl font-bold mb-3">Business Hours</h2>
                <div className="text-sm text-brand-body space-y-2">
                  <div>
                    <h4 className="font-semibold text-brand-heading">Opening Days:</h4>
                    <p className="pl-3">
                      <strong>Monday – Friday:</strong> 9am to 20pm
                      <br />
                      <strong>Saturday:</strong> 9am to 17pm
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-heading">Vacations:</h4>
                    <p className="pl-3">
                      All Sunday Days
                      <br />
                      All Official Holidays
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-primary p-4 m-4 -mt-2 rounded-lg text-white flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">For Emergency Cases</h3>
                  <span className="text-lg font-bold">(+01) 123 456 7890</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <span className="text-brand-primary font-medium text-sm uppercase tracking-wider mb-2">
              Welcome to CleanSlate
            </span>
            <h2 className="text-brand-heading text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s make you fresher than ever
            </h2>
            <p className="text-brand-body leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia. It is a paradisematic
              country, in which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
