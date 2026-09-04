import { TagCheckbox } from './TagCheckbox'

export function DemoSection() {
  return (
    <section className="px-4 py-[112px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h1 className="mb-10 pb-4 text-[28px] font-normal text-black">Checkbox #03</h1>
        <div className="mx-auto flex max-w-[475px] justify-center">
          <ul className="list-none p-5">
            <TagCheckbox label="Confirm Order One" />
            <TagCheckbox label="Confirm Order Two" />
          </ul>
        </div>
      </div>
    </section>
  )
}
