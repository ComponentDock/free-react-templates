import { Heart } from 'lucide-react'

export function PickYourStyle() {
  return (
    <section data-testid="pick-style" className="mb-12">
      <h2 className="mb-6 text-base font-medium text-btnmatrix-heading">Pick Your Style</h2>
      <div className="mb-3 flex flex-wrap gap-2">
        <button type="button" className="btn-matrix btn-matrix-primary">
          <span>Default Primary</span>
        </button>
        <button type="button" className="btn-matrix btn-matrix-primary">
          <Heart className="h-4 w-4" />
          <span>Default with icon</span>
        </button>
        <button type="button" className="btn-matrix btn-matrix-primary">
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="btn-matrix btn-matrix-outline-primary">
          <span>Default Primary</span>
        </button>
        <button type="button" className="btn-matrix btn-matrix-outline-primary">
          <Heart className="h-4 w-4" />
          <span>Default with icon</span>
        </button>
        <button type="button" className="btn-matrix btn-matrix-outline-primary">
          <Heart className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
