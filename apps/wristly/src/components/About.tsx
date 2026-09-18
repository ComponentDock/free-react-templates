import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/wristly-about/540/380"
            alt="Wristly smartwatch on wrist"
            className="w-full max-w-md rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
        </div>
        <div>
          <h5 className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-500">
            Brand new tech to blow your mind
          </h5>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            We&#39;ve made a life that will change you
          </h2>
          <p className="mb-3 font-medium text-gray-900">
            We are here to listen from you and deliver excellence.
          </p>
          <p className="mb-6 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
          <Button className="rounded-full bg-brand-500 text-white hover:bg-brand-600">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
