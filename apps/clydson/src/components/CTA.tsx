import { Button } from '@free-react-templates/ui'

export default function CTA() {
  return (
    <section className="py-20 bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a project on your mind.</h2>
            <p className="text-gray-400 mb-6 max-w-xl">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly.
            </p>
            <Button className="bg-white text-heading hover:bg-gray-100 px-8 py-3 rounded">
              Contact me
            </Button>
          </div>
          <div className="lg:w-1/3">
            <img
              src="https://picsum.photos/seed/clydson-cta/400/400"
              alt="Contact"
              className="w-full max-w-xs mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
