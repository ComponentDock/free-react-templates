import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DRAWER_RESET_QUERY, useDrawer } from './use-drawer'
import { mockMatchMedia } from '../test/match-media'

/**
 * The rail as the page holds it: one flag, the two controls that shut it from the inside, and the
 * surfaces a press has to be forgiven for. `loose` renders the same thing without handing the rail
 * or the burger over, which is the state a page carries when neither is attached.
 */
function Harness({ loose = false }: { loose?: boolean }) {
  const { isOpen, toggle, close, railRef, toggleRef } = useDrawer()

  return (
    <div>
      <button type="button" ref={loose ? undefined : toggleRef} onClick={toggle}>
        burger
      </button>
      <button type="button" onClick={close}>
        push back
      </button>
      <aside ref={loose ? undefined : railRef} data-testid="rail">
        rail
      </aside>
      <p data-testid="state">{isOpen ? 'out' : 'away'}</p>
      <button type="button">beyond</button>
    </div>
  )
}

describe('useDrawer — the rail’s off-canvas state', () => {
  it('starts pushed away, and comes out and goes back on every press', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    const burger = screen.getByRole('button', { name: 'burger' })

    expect(screen.getByTestId('state')).toHaveTextContent('away')
    expect(document.body.classList.contains('offcanvas')).toBe(false)

    await user.click(burger)

    expect(screen.getByTestId('state')).toHaveTextContent('out')
    expect(document.body.classList.contains('offcanvas')).toBe(true)

    await user.click(burger)

    expect(screen.getByTestId('state')).toHaveTextContent('away')
    expect(document.body.classList.contains('offcanvas')).toBe(false)
  })

  it('goes back from its own control, whatever state it is in', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.click(screen.getByRole('button', { name: 'push back' }))
    expect(screen.getByTestId('state')).toHaveTextContent('away')

    await user.click(screen.getByRole('button', { name: 'burger' }))
    await user.click(screen.getByRole('button', { name: 'push back' }))

    expect(screen.getByTestId('state')).toHaveTextContent('away')
  })

  it('goes back on Escape while it is out, and ignores every other key', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.keyboard('{Escape}')
    expect(screen.getByTestId('state')).toHaveTextContent('away')

    await user.click(screen.getByRole('button', { name: 'burger' }))

    fireEvent.keyDown(document.body, { key: 'a' })
    expect(screen.getByTestId('state')).toHaveTextContent('out')

    await user.keyboard('{Escape}')

    expect(screen.getByTestId('state')).toHaveTextContent('away')
  })

  it('forgives a press on the rail and the burger, and goes back on one beyond them', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.click(screen.getByRole('button', { name: 'burger' }))

    fireEvent.mouseDown(screen.getByTestId('rail'))
    expect(screen.getByTestId('state')).toHaveTextContent('out')

    fireEvent.mouseDown(screen.getByRole('button', { name: 'burger' }))
    expect(screen.getByTestId('state')).toHaveTextContent('out')

    fireEvent.mouseDown(screen.getByRole('button', { name: 'beyond' }))

    expect(screen.getByTestId('state')).toHaveTextContent('away')
  })

  it('goes back as soon as the page scrolls', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.click(screen.getByRole('button', { name: 'burger' }))
    expect(screen.getByTestId('state')).toHaveTextContent('out')

    fireEvent.scroll(window)

    expect(screen.getByTestId('state')).toHaveTextContent('away')
  })

  it('goes back on a press anywhere when nothing is handed over to forgive', async () => {
    const user = userEvent.setup()

    render(<Harness loose />)

    await user.click(screen.getByRole('button', { name: 'burger' }))
    expect(screen.getByTestId('state')).toHaveTextContent('out')

    fireEvent.mouseDown(document.body)

    expect(screen.getByTestId('state')).toHaveTextContent('away')
  })

  it('goes back when the window passes the width the rail stops being a drawer at', async () => {
    const user = userEvent.setup()
    const width = mockMatchMedia(DRAWER_RESET_QUERY, false)

    render(<Harness />)

    await user.click(screen.getByRole('button', { name: 'burger' }))
    expect(screen.getByTestId('state')).toHaveTextContent('out')

    width.change(true)
    expect(screen.getByTestId('state')).toHaveTextContent('away')

    await user.click(screen.getByRole('button', { name: 'burger' }))

    width.change(false)
    expect(screen.getByTestId('state')).toHaveTextContent('out')
  })

  it('lets the page go clean when it is torn down while the rail is out', async () => {
    const user = userEvent.setup()

    const { unmount } = render(<Harness />)

    await user.click(screen.getByRole('button', { name: 'burger' }))
    expect(document.body.classList.contains('offcanvas')).toBe(true)

    unmount()

    expect(document.body.classList.contains('offcanvas')).toBe(false)
  })
})
