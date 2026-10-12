import { fireEvent, render, screen } from '@testing-library/react'
import { useOffCanvas } from './use-off-canvas'

function setViewportWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, writable: true, value: width })
}

function Probe() {
  const { isOpen, close, toggle, panelRef, toggleRef } = useOffCanvas()

  return (
    <div>
      <button type="button" ref={toggleRef} onClick={toggle}>
        Toggle
      </button>
      <section ref={panelRef}>Panel</section>
      <button type="button" onClick={close}>
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

  it('closes on the glyph and on Escape, but ignores any other key', () => {
    render(<Probe />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle' }))

    fireEvent.keyDown(document, { key: 'ArrowDown' })
    expect(screen.getByTestId('state')).toHaveTextContent('open')

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.getByTestId('state')).toHaveTextContent('closed')

    fireEvent.click(screen.getByRole('button', { name: 'Toggle' }))
    expect(screen.getByTestId('state')).toHaveTextContent('open')

    fireEvent.click(screen.getByRole('button', { name: 'Glyph' }))
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

  it('closes itself when the viewport grows past 768px and stays put below it', () => {
    render(<Probe />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle' }))

    setViewportWidth(700)
    fireEvent(window, new Event('resize'))
    expect(screen.getByTestId('state')).toHaveTextContent('open')

    setViewportWidth(1024)
    fireEvent(window, new Event('resize'))
    expect(screen.getByTestId('state')).toHaveTextContent('closed')

    setViewportWidth(window.outerWidth)
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
})
