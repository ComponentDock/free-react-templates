import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="https://picsum.photos/seed/tribune-about/600/400"
              alt="About the conference"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="md:col-span-7 md:pl-8">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">What is all about us?</h2>
            <p className="mb-4 text-muted">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <p className="mb-6 text-muted">
              On her way she met a copy. The copy warned the Little Blind Text, that where it came
              from it would have been rewritten a thousand times and everything that was left from
              its origin would be the word &quot;and&quot; and the Little Blind Text should turn
              around and return to its own, safe country.
            </p>
            <Button className="bg-primary text-white hover:bg-primary-dark">Join now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
