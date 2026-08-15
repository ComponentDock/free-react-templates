import { agents } from '../data'

export function Agents() {
  return (
    <section id="agents-section" aria-label="Real Estate Agents" className="py-24">
      <div className="mx-auto max-w-[1170px] px-4 text-center">
        <h2 className="font-heading text-3xl font-light uppercase text-black md:text-4xl">
          Real Estate Agents
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora
          reiciendis.
        </p>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {agents.map((agent) => (
            <article key={agent.name} className="text-center">
              <img
                src={agent.image}
                alt={`Portrait of ${agent.name}`}
                loading="lazy"
                className="mx-auto aspect-square w-48 rounded-full object-cover"
              />
              <h3 className="mt-6 font-heading text-xl font-light uppercase text-black">
                {agent.name}
              </h3>
              <span className="mt-1 block text-sm text-muted-2">{agent.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
