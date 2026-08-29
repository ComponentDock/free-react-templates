export function PickYourColor() {
  return (
    <section data-testid="pick-color" className="mb-12">
      <h2 className="mb-6 text-base font-medium text-btnmatrix-heading">Pick Your Color</h2>
      <div className="mb-3 flex flex-wrap gap-2">
        <button type="button" className="btn-matrix btn-matrix-primary">
          <span>Default Primary</span>
        </button>
        <button type="button" className="btn-matrix btn-matrix-secondary">
          <span>Default Secondary</span>
        </button>
        <button type="button" className="btn-matrix btn-matrix-tertiary">
          <span>Default Tertiary</span>
        </button>
        <button type="button" className="btn-matrix btn-matrix-quarternary">
          <span>Default Quarternary</span>
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="btn-matrix btn-matrix-outline-primary">
          <span>Default Primary</span>
        </button>
        <button type="button" className="btn-matrix btn-matrix-outline-secondary">
          <span>Default Secondary</span>
        </button>
        <button type="button" className="btn-matrix btn-matrix-outline-tertiary">
          <span>Default Tertiary</span>
        </button>
        <button type="button" className="btn-matrix btn-matrix-outline-quarternary">
          <span>Default Quarternary</span>
        </button>
      </div>
    </section>
  )
}
