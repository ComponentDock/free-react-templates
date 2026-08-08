import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary-700 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          You&apos;re Welcome Here
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-primary-100">
          Whether you&apos;re exploring faith or looking for a church home, we&apos;d love to meet
          you. Join us this Sunday!
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#contact"
            className="rounded-full bg-white px-8 py-4 text-base font-medium text-primary-700 hover:bg-primary-100"
          >
            Plan Your Visit
          </ButtonLink>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
