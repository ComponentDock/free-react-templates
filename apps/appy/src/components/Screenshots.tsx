import { ButtonLink } from '@free-react-templates/ui'

const screens = [1, 2, 3] as const

export function Screenshots() {
  return (
    <section id="screenshot" className="bg-gradient-to-br from-[#482cbf] to-[#6ac6f0] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[1.5px] text-white/70">
            Screenshots
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Screenshot 01
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-3">
          {screens.map((screen) => (
            <img
              key={screen}
              src={`https://picsum.photos/seed/appy-screen-${screen}/400/800`}
              alt={`Appy screenshot ${screen}`}
              className="w-full rounded-2xl border-4 border-white/20 object-cover shadow-2xl"
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <ButtonLink
            href="#features"
            className="rounded-full bg-white px-10 text-primary-600 hover:bg-primary-50"
          >
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
