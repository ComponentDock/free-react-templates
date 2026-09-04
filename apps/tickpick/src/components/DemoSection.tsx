import { CheckboxItem } from './CheckboxItem'

const items = [
  { label: 'Task One', defaultChecked: true },
  { label: 'Task Two', defaultChecked: false },
  { label: 'Task Three', defaultChecked: false },
]

export function DemoSection() {
  return (
    <section className="px-4 py-[112px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h1 className="mb-5 text-[28px] font-normal text-black dark:text-white">Checkbox #09</h1>
        <div className="flex justify-center">
          <ul className="list-none p-5">
            {items.map((item) => (
              <CheckboxItem
                key={item.label}
                label={item.label}
                defaultChecked={item.defaultChecked}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
