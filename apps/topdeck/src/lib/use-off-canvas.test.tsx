import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useOffCanvas, RESIZE_CLOSE_WIDTH } from './use-off-canvas'

function Harness() {
  const { isOpen, close, toggle, panelRef, toggleRef, closeRef } = useOffCanvas()

  return (
    <div>
      <button ref={toggleRef} type="button" onClick={toggle}>
        Toggle
      </button>
      <aside ref={panelRef} data-testid="panel">
        <button ref={closeRef} type="button" onClick={close}>
          Close
        </button>
      </aside>
      <button type="button">Outside</button>
      <p>{isOpen ? 'open' : 'shut'}</p>
    </div>
  )
}

describe('useOffCanvas', () => {
  afterEach(() => {
    document.body.style.overflow = ''
  })

  it('starts shut and flips both ways from its own toggle', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    expect(screen.getByText('shut')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Toggle' }))
    expect(screen.getByText('open')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Toggle' }))
    expect(screen.getByText('shut')).toBeInTheDocument()
  })

  it('locks the page, moves focus into the panel and hands it back in the close glyph’s own path', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.click(screen.getByRole('button', { name: 'Toggle' }))

    expect(document.body.style.overflow).toBe('hidden')
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Close' }))

    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(document.body.style.overflow).toBe('')
    expect(screen.getByText('shut')).toBeInTheDocument()
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Toggle' }))
  })

  it('closes on Escape and returns focus to the toggle', async () => {
    const user = userEvent.setup()

    render(<Harness />)
    await user.click(screen.getByRole('button', { name: 'Toggle' }))

    fireEvent.keyDown(document, { key: 'Tab' })
    expect(screen.getByText('open')).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.getByText('shut')).toBeInTheDocument()
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Toggle' }))
  })

  it('closes on a press outside the panel while a press inside it is ignored', async () => {
    const user = userEvent.setup()

    render(<Harness />)
    await user.click(screen.getByRole('button', { name: 'Toggle' }))

    fireEvent.mouseUp(screen.getByTestId('panel'))
    expect(screen.getByText('open')).toBeInTheDocument()

    fireEvent.mouseUp(screen.getByRole('button', { name: 'Outside' }))
    expect(screen.getByText('shut')).toBeInTheDocument()
  })

  it('leaves the panel alone when the press lands on the toggle itself', async () => {
    const user = userEvent.setup()

    render(<Harness />)
    await user.click(screen.getByRole('button', { name: 'Toggle' }))

    fireEvent.mouseUp(screen.getByRole('button', { name: 'Toggle' }))

    expect(screen.getByText('open')).toBeInTheDocument()
  })

  it('dismisses the panel once the viewport is wider than the source’s own breakpoint', async () => {
    const user = userEvent.setup()
    const width = vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(RESIZE_CLOSE_WIDTH)

    render(<Harness />)
    await user.click(screen.getByRole('button', { name: 'Toggle' }))

    fireEvent(window, new Event('resize'))
    expect(screen.getByText('open')).toBeInTheDocument()

    width.mockReturnValue(RESIZE_CLOSE_WIDTH + 1)
    fireEvent(window, new Event('resize'))

    expect(screen.getByText('shut')).toBeInTheDocument()
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Toggle' }))

    width.mockRestore()
  })
})
