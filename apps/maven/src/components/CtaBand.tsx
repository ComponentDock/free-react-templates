/** White CTA band (reference second `.cta_part`): "recent work" eyebrow and
 *  a "Creative work for client" heading introducing the team section. */
export function CtaBand() {
  return (
    <section aria-label="Team intro" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="text-sm font-medium uppercase tracking-wider text-primary-600">Recent Work</p>
        <h2 className="mt-4 font-heading text-[42px] font-bold text-navy-deep">
          Creative work for client
        </h2>
      </div>
    </section>
  )
}
