import { AGENTS, SOCIALS } from '../data'

/* Social brand icons — inline SVG paths (brand icons are not available in
   lucide-react; the source used an icon font which is not copyable). */
const SOCIAL_PATHS: Record<string, string> = {
  Facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  Twitter:
    'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  Instagram:
    'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
}

/* Agents (source: div.person-29381 — photo with a decorative 2px green
   frame offset -20px top/left behind it, name, "N Properties" caption,
   and three 40px circular #efefef social buttons). */
export function Agents() {
  return (
    <section id="agents" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 h-[2px] w-[70px] bg-brand" aria-hidden="true" />
          <h2 className="text-[22px] font-semibold uppercase text-ink">Our Agents</h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-gray-600">
            Meet the local experts who will guide you home.
          </p>
        </div>

        <ul className="grid gap-10 md:grid-cols-3">
          {AGENTS.map((agent) => (
            <li key={agent.name} className="text-center">
              <div className="relative mx-auto mb-5 h-64 max-w-[260px]">
                <span
                  aria-hidden="true"
                  className="absolute -left-5 -top-5 h-full w-1/2 border-2 border-brand"
                />
                <img
                  src={`https://picsum.photos/seed/${agent.seed}/400/500`}
                  alt={`Portrait of ${agent.name}`}
                  loading="lazy"
                  className="relative h-64 w-full object-cover"
                />
              </div>
              <h3 className="text-[18px] font-semibold text-ink">{agent.name}</h3>
              <p className="mt-1 text-[14px] text-gray-500">{agent.properties}</p>
              <ul className="mt-4 flex justify-center gap-2">
                {SOCIALS.map((social) => (
                  <li key={social.name}>
                    <a
                      href="#agents"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-circle text-gray-600 transition-colors hover:bg-brand hover:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path d={SOCIAL_PATHS[social.name]} />
                      </svg>
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
