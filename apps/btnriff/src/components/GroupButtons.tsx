export function GroupButtons() {
  return (
    <div className="flex flex-col gap-4">
      {/* Primary group */}
      <div data-button-group="primary" className="inline-flex">
        <button
          type="button"
          className="rounded-l bg-primary px-4 py-2 text-sm font-medium text-white shadow-[3px_5px_0_0_var(--color-primary-shadow)]"
        >
          Button 1
        </button>
        <button
          type="button"
          className="border-y border-primary bg-white px-4 py-2 text-sm font-medium text-primary shadow-[3px_5px_0_0_var(--color-primary-shadow)]"
        >
          Outline Button
        </button>
        <button
          type="button"
          className="rounded-r bg-primary px-4 py-2 text-sm font-medium text-white shadow-[3px_5px_0_0_var(--color-primary-shadow)]"
        >
          Button 1
        </button>
      </div>

      {/* Secondary group */}
      <div data-button-group="secondary" className="inline-flex">
        <button
          type="button"
          className="rounded-l bg-secondary px-4 py-2 text-sm font-medium text-white shadow-[3px_5px_0_0_var(--color-secondary-shadow)]"
        >
          Button 2
        </button>
        <button
          type="button"
          className="border-y border-secondary bg-white px-4 py-2 text-sm font-medium text-secondary shadow-[3px_5px_0_0_var(--color-secondary-shadow)]"
        >
          Outline Button
        </button>
        <button
          type="button"
          className="rounded-r bg-secondary px-4 py-2 text-sm font-medium text-white shadow-[3px_5px_0_0_var(--color-secondary-shadow)]"
        >
          Button 2
        </button>
      </div>
    </div>
  )
}
