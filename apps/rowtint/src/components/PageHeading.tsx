export interface PageHeadingProps {
  title: string
}

export function PageHeading({ title }: PageHeadingProps) {
  return (
    <div className="flex justify-center">
      <div className="mb-[3rem] w-full text-center min-[768px]:w-1/2">
        <h2 className="text-[28px] font-normal leading-[1.5] text-heading">{title}</h2>
      </div>
    </div>
  )
}
