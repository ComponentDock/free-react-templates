import { ButtonLink } from '@free-react-templates/ui'

/**
 * The 6/6 about split: a fluid row where the copy column starts at 20 % of the
 * container and the image runs full bleed to the right edge. The azure pill
 * "See Details" inverts to a transparent pill with an azure border on hover.
 */
export function AboutSplit() {
  return (
    <section id="about" className="scroll-mt-[108px] bg-surface">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full px-5 py-12 lg:w-6/12 lg:pr-[5%] lg:pl-[20%]">
          <h1 className="font-heading text-[36px] font-semibold text-ink max-md:text-[25px]">
            Built for teams who ship on Fridays
          </h1>
          <p className="py-[20px] text-copy">
            Every Skyport environment arrives with staging, automated snapshots and a rollback that
            works the first time. Deploy from your pipeline or the dashboard, then watch the traffic
            graphs settle.
          </p>
          <ButtonLink
            href="#service"
            className="inline-flex h-[42px] items-center rounded-[25px] border border-transparent bg-brand px-[50px] text-[12px] font-medium text-white uppercase transition-colors hover:border-brand hover:bg-transparent hover:text-brand"
          >
            See Details
          </ButtonLink>
        </div>
        <div className="w-full lg:w-6/12">
          <img
            src="https://picsum.photos/seed/skyport-about/1000/700"
            alt="Engineers reviewing a cloud dashboard together"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
