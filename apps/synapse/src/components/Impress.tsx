import { ButtonLink } from '@free-react-templates/ui'

export function Impress() {
  return (
    <section
      id="contact"
      aria-label="Impress"
      className="relative overflow-hidden bg-primary-500 py-20 sm:py-28"
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/synapse-impress/1600/700')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
          Got Impressed to our features?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-primary-100">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div className="mt-9">
          <ButtonLink
            href="#pricing"
            className="rounded-full bg-white px-10 py-3.5 text-primary-600 hover:bg-primary-50"
          >
            Request Free Demo
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
