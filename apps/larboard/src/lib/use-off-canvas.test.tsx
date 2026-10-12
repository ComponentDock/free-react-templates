import { fireEvent, render, screen } from '@testing-library/react'
import { RESIZE_CLOSE_WIDTH, useOffCanvas } from './use-off-canvas'

function Probe() {
  const { isOpen, close, toggle, panelRef, toggleRef, closeRef } = useOffCanvas()

  return (
    <div>
      <button type="button" ref={toggleRef} onClick={toggle}>
        Toggle
      </button>
      <section ref={panelRef}>Panel</section>
      <button type="button" ref={closeRef} onClick={close}>
        Glyph
      </button>
      <p data-testid="state">{isOpen ? 'open' : 'closed'}</p>
    </div>
  )
}

describe('useOffCanvas', () => {
  afterEach(() => {
    document.body.style.overflow = ''
  })

  it('starts shut, toggles both ways, and locks the document only while open', () => {
    render(<Probe />)

    expect(screen.getByTestId('state')).toHaveTextContent('closed')
    expect(document.body.style.overflow).toBe('')

    fireEvent.click(screen.getByRole('button', { name: 'Toggle' }))
    expect(screen.getByTestId('state')).toHaveTextContent('open')
    expect(document.body.style.overflow).toBe('hidden')

    fireEvent.click(screen.getByRole('button', { name: 'Toggle' }))
    expect(screen.getByTestId('state')).toHaveTextContent('closed')
    expect(document.body.style.overflow).toBe('')
  })

  it('moves focus into the panel on open and hands it back to the toggle on close', () => {
    render(<Probe />)

    const toggle = screen.getByRole('button', { name: 'Toggle' })
    const glyph = screen.getByRole('button', { name: 'Glyph' })

    fireEvent.click(toggle)
    expect(document.activeElement).toBe(glyph)

    fireEvent.click(glyph)
    expect(document.activeElement).toBe(toggle)
  })

  it('closes on the glyph and on Escape, but ignores any other key', () => {
    render(<Probe />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle' }))

    fireEvent.keyDown(document, { key: 'ArrowDown' })
    expect(screen.getByTestId('state')).toHaveTextContent('open')

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.getByTestId('state')).toHaveTextContent('closed')
  })

  it('ignores presses inside the panel and on the toggle, and closes on an outside press', () => {
    render(<Probe />)
    const toggle = screen.getByRole('button', { name: 'Toggle' })
    fireEvent.click(toggle)

    fireEvent.mouseUp(screen.getByText('Panel'))
    expect(screen.getByTestId('state')).toHaveTextContent('open')

    fireEvent.mouseUp(toggle)
    expect(screen.getByTestId('state')).toHaveTextContent('open')

    fireEvent.mouseUp(document.body)
    expect(screen.getByTestId('state')).toHaveTextContent('closed')
  })

  it('does not listen at all while it is shut, and releases the lock when it unmounts', () => {
    const addEventListener = vi.spyOn(document, 'addEventListener')
    const { unmount } = render(<Probe />)

    expect(addEventListener).not.toHaveBeenCalled()

    fireEvent.click(screen.getByRole('button', { name: 'Toggle' }))
    expect(document.body.style.overflow).toBe('hidden')

    unmount()
    expect(document.body.style.overflow).toBe('')
    addEventListener.mockRestore()
  })

  it('dismisses the sidebar when the viewport grows past 768px, keeping it below that', () => {
    const width = vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(768)
    render(<Probe />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle' }))

    fireEvent(window, new Event('resize'))
    expect(screen.getByTestId('state')).toHaveTextContent('open')

    width.mockReturnValue(769)
    fireEvent(window, new Event('resize'))
    expect(screen.getByTestId('state')).toHaveTextContent('closed')
    expect(document.body.style.overflow).toBe('')
    expect(RESIZE_CLOSE_WIDTH).toBe(768)

    width.mockRestore()
  })

  it('stops watching the resize once the sidebar is shut again', () => {
    const removeEventListener = vi.spyOn(window, 'removeEventListener')
    render(<Probe />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle' }))
    fireEvent.keyDown(document, { key: 'Escape' })

    expect(removeEventListener.mock.calls.map(([type]) => type)).toContain('resize')
    removeEventListener.mockRestore()
  })
})
