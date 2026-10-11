/* Split about block: full-bleed photo on the left, gradient-clipped heading
   with body copy and a dark pill button on the right. */
export function Welcome() {
  return (
    <section className="grid items-center gap-0 md:grid-cols-2">
      <img
        src="https://picsum.photos/seed/voyara-about/900/700"
        alt="Hotel lounge opening onto a terrace"
        loading="lazy"
        className="h-full w-full object-cover"
      />

      <div className="px-6 py-[100px] md:pl-[60px] md:pr-[70px]">
        <h2 className="text-[25px] font-semibold leading-[1.3]">
          <span className="bg-gradient-to-t from-pink to-peach bg-clip-text text-transparent">
            A very Lovely Welcome
          </span>
          <span className="block text-ink">to our Hotel</span>
        </h2>
        <p className="mt-6">
          Rooms made for slow mornings, a pool that catches the afternoon light, and a team that
          knows the good tables in town. Build the stay you actually want — then let us take care of
          the details.
        </p>
        <a
          href="#book"
          className="mt-8 inline-block rounded-[20px] border border-body bg-ink px-7 py-3 text-[13px] font-medium uppercase tracking-[1px] text-white transition-colors hover:bg-white hover:text-ink"
        >
          Make Package of your own
        </a>
      </div>
    </section>
  )
}
