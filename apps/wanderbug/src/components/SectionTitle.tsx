interface SectionTitleProps {
  eyebrow?: string
  title: string
}

/* Centered section header: periwinkle eyebrow above a Josefin Sans headline. */
export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="mb-[45px] text-center">
      {eyebrow ? (
        <span className="mb-[10px] inline-block text-[16px] tracking-[0.05em] text-periwinkle capitalize">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-[24px] leading-[1.4] font-bold text-navy md:text-[31px] lg:text-[50px]">
        {title}
      </h2>
    </div>
  )
}
