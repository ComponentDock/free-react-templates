import { SectionHeading } from './SectionHeading'
import { SocialIcon } from './SocialIcon'
import { agents, agentsHeading, image, socials } from '../data'

/** Three agent cards, each photo framed by a brand-green L-corner. */
export function Agents() {
  return (
    <section id="agents" className="py-12 lg:py-28">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-10 max-w-[560px] text-center">
          <SectionHeading align="center">{agentsHeading}</SectionHeading>
        </div>

        <ul className="grid gap-10 md:grid-cols-3">
          {agents.map((agent) => (
            <li key={agent.name}>
              <div className="relative pl-5 pt-5">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[calc(100%-20px)] w-1/2 border-2 border-brand"
                />
                <img
                  src={image(agent.seed, 500, 600)}
                  alt={`Portrait of ${agent.name}`}
                  className="relative h-[320px] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 text-[18px] leading-tight">
                <a href="#agents" className="text-black transition-colors hover:text-brand">
                  {agent.name}
                </a>
              </h3>
              <span className="mb-4 block text-[14px] text-meta">{agent.count}</span>
              <ul aria-label={`${agent.name} social links`} className="flex gap-2">
                {socials.map((social) => (
                  <li key={`${agent.name}-${social.label}`}>
                    <a
                      href={social.href}
                      aria-label={`${agent.name} on ${social.label}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#efefef] text-body transition-colors hover:bg-brand hover:text-white"
                    >
                      <SocialIcon label={social.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
