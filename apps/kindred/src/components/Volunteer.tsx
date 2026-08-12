import { Button } from '@free-react-templates/ui'

export function Volunteer() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-sm">
          <img
            src="https://picsum.photos/seed/kindred-about/640/720"
            alt="Kindred volunteers at work"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-white/95 p-8 dark:bg-gray-900/95">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">
              Kindred Charity
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
            </p>
            <Button className="mt-5 rounded-[3px] bg-brand hover:bg-brand-700">Join now</Button>
          </div>
        </div>

        <div
          data-testid="donation-panel"
          className="flex flex-col justify-center bg-brand p-10 text-white lg:p-14"
        >
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide">
            Donation so far
          </h2>
          <p className="mt-4 font-display text-5xl font-bold lg:text-6xl">$380,000</p>
          <p className="mt-4 max-w-sm leading-relaxed text-white/85">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove.
          </p>
          <Button className="mt-8 w-fit rounded-[3px] bg-black text-white hover:bg-gray-800">
            Donate now
          </Button>
        </div>
      </div>
    </section>
  )
}
