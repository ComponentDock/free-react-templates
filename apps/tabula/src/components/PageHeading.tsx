/** Centered h2 heading + h3 subheading above the table. */
export function PageHeading() {
  return (
    <>
      <div className="flex justify-center">
        <div className="mb-6 w-full text-center min-[768px]:w-1/2">
          <h2 className="text-[28px] font-normal leading-[1.5] text-heading">Table #08</h2>
        </div>
      </div>
      <div className="mb-6 w-full text-center">
        <h3 className="text-xl font-normal leading-[1.5] text-heading">Collapsible Table</h3>
      </div>
    </>
  )
}
