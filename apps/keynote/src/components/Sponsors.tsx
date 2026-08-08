import { Handshake } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const partners = [
  { tier: 'Diamond', names: ['Anthropic', 'OpenAI'] },
  { tier: 'Platinum', names: ['Google DeepMind', 'Cohere', 'Mistral AI'] },
  { tier: 'Gold', names: ['Hugging Face', 'Weights & Biases', 'Replicate', 'Modal'] },
  { tier: 'Silver', names: ['LangChain', 'Pinecone', 'Weaviate'] },
]

export function Sponsors() {
  return (
    <section id="sponsors" className="bg-gray-950 py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Backed by Leaders
          </h2>
          <p className="mt-4 text-gray-400">Thank you to the companies making Keynote possible.</p>
        </div>

        <div className="mt-14 space-y-10">
          {partners.map((group) => (
            <div key={group.tier} className="text-center">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                {group.tier}
              </h3>
              <ul className="mt-4 flex flex-wrap items-center justify-center gap-3">
                {group.names.map((name) => (
                  <li
                    key={name}
                    className="rounded-full border border-gray-800 bg-gray-900 px-6 py-3 font-display text-sm font-semibold text-gray-300"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-xl rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center">
          <h3 className="font-display text-xl font-bold">Become a Sponsor</h3>
          <p className="mt-2 text-sm text-gray-400">
            Get your brand in front of 5,000+ AI practitioners. Multiple tiers available.
          </p>
          <ButtonLink
            href="#tickets"
            variant="outline"
            className="mt-6 rounded-full border-gray-700 bg-transparent px-6 py-2.5 text-sm text-white hover:border-gray-500 hover:bg-gray-800"
          >
            <Handshake className="h-4 w-4" aria-hidden="true" />
            View Sponsorship Packages
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
