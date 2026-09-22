import { INSTAGRAM } from '../data'

/** Instagram — centered heading encouraging social follow. */
export function Instagram() {
  return (
    <section className="bg-offwhite py-16 text-center">
      <h2 className="font-heading text-2xl font-bold text-navy md:text-3xl">{INSTAGRAM.heading}</h2>
    </section>
  )
}
