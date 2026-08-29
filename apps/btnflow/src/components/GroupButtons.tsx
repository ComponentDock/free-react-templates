export function GroupButtons() {
  return (
    <div className="flex flex-col gap-4">
      {/* Blue group */}
      <div data-button-group="blue" className="inline-flex">
        <button
          type="button"
          className="rounded-l bg-blue px-4 py-2 text-sm font-medium text-white shadow-[3px_5px_0_0_var(--color-blue-shadow)]"
        >
          Button 1
        </button>
        <button
          type="button"
          className="border-y border-blue bg-white px-4 py-2 text-sm font-medium text-blue shadow-[3px_5px_0_0_var(--color-blue-shadow)]"
        >
          Outline Button
        </button>
        <button
          type="button"
          className="rounded-r bg-blue px-4 py-2 text-sm font-medium text-white shadow-[3px_5px_0_0_var(--color-blue-shadow)]"
        >
          Button 1
        </button>
      </div>

      {/* Indigo group */}
      <div data-button-group="indigo" className="inline-flex">
        <button
          type="button"
          className="rounded-l bg-indigo px-4 py-2 text-sm font-medium text-white shadow-[3px_5px_0_0_var(--color-indigo-shadow)]"
        >
          Button 2
        </button>
        <button
          type="button"
          className="border-y border-indigo bg-white px-4 py-2 text-sm font-medium text-indigo shadow-[3px_5px_0_0_var(--color-indigo-shadow)]"
        >
          Outline Button
        </button>
        <button
          type="button"
          className="rounded-r bg-indigo px-4 py-2 text-sm font-medium text-white shadow-[3px_5px_0_0_var(--color-indigo-shadow)]"
        >
          Button 2
        </button>
      </div>

      {/* Purple group */}
      <div data-button-group="purple" className="inline-flex">
        <button
          type="button"
          className="rounded-l bg-purple px-4 py-2 text-sm font-medium text-white shadow-[3px_5px_0_0_var(--color-purple-shadow)]"
        >
          Button 3
        </button>
        <button
          type="button"
          className="border-y border-purple bg-white px-4 py-2 text-sm font-medium text-purple shadow-[3px_5px_0_0_var(--color-purple-shadow)]"
        >
          Outline Button
        </button>
        <button
          type="button"
          className="rounded-r bg-purple px-4 py-2 text-sm font-medium text-white shadow-[3px_5px_0_0_var(--color-purple-shadow)]"
        >
          Button 3
        </button>
      </div>
    </div>
  )
}
