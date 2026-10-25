import { CHANNELS, TONE_TILE } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/** Six channel cards, one bordered grid cell each, two numbers on a hairline. */
export function Channels() {
  return (
    <section id="channels" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHead
          eyebrow="Channels"
          title="Find the room where your problem is normal"
          lede="Six rooms, each with a culture and a moderator. Post where the answer lives."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((channel, index) => (
            <Reveal key={channel.name} delay={index * 60}>
              <li className="group relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl text-lg font-semibold ${TONE_TILE[channel.tone]}`}
                  >
                    {channel.glyph}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-gray-900">
                      <a href="#discussions" className="hover:text-primary-600">
                        {channel.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{channel.blurb}</p>
                  </div>
                </div>

                <dl className="mt-5 flex gap-6 border-t border-gray-100 pt-4 text-sm">
                  <div>
                    <dt className="sr-only">Members</dt>
                    <dd className="font-semibold tabular-nums text-gray-900">
                      {channel.members}
                      <span className="ml-1 font-normal text-gray-500">members</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Posts this week</dt>
                    <dd className="font-semibold tabular-nums text-gray-900">
                      {channel.posts}
                      <span className="ml-1 font-normal text-gray-500">posts/wk</span>
                    </dd>
                  </div>
                </dl>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
