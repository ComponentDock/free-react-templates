import { fireEvent, render, screen } from '@testing-library/react'
import { useSurfaceFlip } from './use-flip'

interface ProbeProps {
  /** The box the surface reports when it is measured. */
  rect?: Partial<DOMRect>
  /** False when the surface is not attached at all, as inside a closed row. */
  attach?: boolean
}

function Probe({ rect, attach = true }: ProbeProps) {
  const { ref, flipped, measure } = useSurfaceFlip<HTMLDivElement>()

  return (
    <div>
      <div
        ref={(node) => {
          ref.current = node

          if (node && rect) {
            node.getBoundingClientRect = () => ({ right: 0, ...rect }) as DOMRect
          }
        }}
        data-testid="surface"
        hidden={!attach}
      />
      <button type="button" onClick={measure}>
        measure
      </button>
      <output data-testid="flipped">{String(flipped)}</output>
    </div>
  )
}

/** The same probe, with no node behind the ref at all. */
function DetachedProbe() {
  const { flipped, measure } = useSurfaceFlip<HTMLDivElement>()

  return (
    <div>
      <button type="button" onClick={measure}>
        measure
      </button>
      <output data-testid="flipped">{String(flipped)}</output>
    </div>
  )
}

describe('useSurfaceFlip — keeping a surface inside the window', () => {
  it('leaves the surface where it is while its right edge is inside the viewport', () => {
    render(<Probe rect={{ right: 900 }} />)

    fireEvent.click(screen.getByRole('button', { name: 'measure' }))

    expect(screen.getByTestId('flipped').textContent).toBe('false')
  })

  it('flips the surface to its row’s right edge once it would run past the window', () => {
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024)

    render(<Probe rect={{ right: 1400 }} />)

    fireEvent.click(screen.getByRole('button', { name: 'measure' }))

    expect(screen.getByTestId('flipped').textContent).toBe('true')

    vi.restoreAllMocks()
  })

  it('does nothing when it is asked to measure a surface it has no node for', () => {
    render(<DetachedProbe />)

    fireEvent.click(screen.getByRole('button', { name: 'measure' }))

    expect(screen.getByTestId('flipped').textContent).toBe('false')
  })
})
