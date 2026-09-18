import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Roost Real Estate Agency</h2>
            <p className="mb-4 text-gray-500">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <p className="mb-8 text-gray-500">
              Even the all-powerful Pointing has no control about the blind texts it is an almost
              unorthographic life One day however a small line of blind text by the name of Lorem
              Ipsum decided to leave for the far World of Grammar.
            </p>
            <div className="flex gap-4">
              <Button className="rounded-full">Book now</Button>
              <Button variant="outline" className="rounded-full">
                Contact us
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/roost-about/600/400"
              alt="About Roost"
              className="w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
