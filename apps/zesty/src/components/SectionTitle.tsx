interface SectionTitleProps {
  title: string
}

/* Decorative overlapping accents for the top-recipe and featured sections
   (reference `div.section-title` + `div.plus-icon`): a 470px-wide pink bar
   overlapping the section's top edge 57px, and an 80×57px pink box with a
   white "+" at the top right. Both are absolutely positioned; the parent
   section must be `relative`. */
export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <>
      <div className="pointer-events-none absolute -top-[57px] left-0 w-[470px] bg-brand py-[18px] pl-10 text-right">
        <h5 className="text-xl font-bold text-white">{title}</h5>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[57px] right-0 flex h-[57px] w-20 items-center justify-center bg-brand text-[32px] font-bold text-white"
      >
        +
      </div>
    </>
  )
}
