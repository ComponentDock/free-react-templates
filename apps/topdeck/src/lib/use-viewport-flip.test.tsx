import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useViewportFlip } from './use-viewport-flip'

function Harness() {
  const { ref, flipped, measure } = useViewportFlip<HTMLDivElement>()

  return (
    <div>
      <button type="button" onClick={measure}>
        Measure
      </button>
      <div ref={ref} data-testid="surface">
        {flipped ? 'leftwards' : 'rightwards'}
      </div>
    </div>
  )
}

describe('useViewportFlip', () => {
  it('keeps a surface opening rightwards while it fits', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    expect(screen.getByText('rightwards')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Measure' }))

    expect(screen.getByText('rightwards')).toBeInTheDocument()
  })

  it('flips the surface once its right edge would fall outside the window, and back when it fits', async () => {
    const user = userEvent.setup()
    const width = vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024)

    render(<Harness />)

    const surface = screen.getByTestId('surface')

    surface.getBoundingClientRect = () => ({ right: 1400 }) as DOMRect

    await user.click(screen.getByRole('button', { name: 'Measure' }))
    expect(screen.getByText('leftwards')).toBeInTheDocument()

    surface.getBoundingClientRect = () => ({ right: 300 }) as DOMRect

    await user.click(screen.getByRole('button', { name: 'Measure' }))
    expect(screen.getByText('rightwards')).toBeInTheDocument()

    width.mockRestore()
  })
})
