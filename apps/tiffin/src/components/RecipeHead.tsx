/**
 * The head is two lines: a rust uppercase label and the largest serif line on
 * the page. The label is a `<p>` because it captions the row beneath it — the
 * dish titles are the page's only section headings.
 */
export function RecipeHead() {
  return (
    <header className="mb-24 text-center">
      <p className="m-0 text-[14px] leading-4 font-bold tracking-[.12em] text-eyebrow uppercase">
        This week&apos;s menu
      </p>
      <h1 className="mt-2 mb-0 font-display text-[clamp(32px,4.4vw,50px)] leading-[1.05] font-normal tracking-[-.01em]">
        Weeknight dinners, sorted
      </h1>
    </header>
  )
}
