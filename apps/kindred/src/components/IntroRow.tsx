import { Button } from '@free-react-templates/ui'

export function IntroRow() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="font-display text-6xl font-bold text-brand lg:text-7xl">380,000</p>
          <h2 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">
            Waterless Drinking in Africa
          </h2>
          <Button className="mt-6 rounded-[3px] bg-brand hover:bg-brand-700">Start Donation</Button>
        </div>
        <blockquote className="border-l-4 border-brand pl-6 lg:pl-8">
          <p className="text-lg italic leading-relaxed text-gray-600 dark:text-gray-300">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
        </blockquote>
      </div>
    </section>
  )
}
