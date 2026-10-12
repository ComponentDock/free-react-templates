import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DRAWER_RESET_QUERY, useDrawer } from './use-drawer'
import { mockMatchMedia } from '../test/match-media'

/** A stand-in for the bar: the hook's three refs and its open state, nothing else. */
function Probe() {
  const { isOpen, toggle, close, toggleRef, panelRef, closeRef } = useDrawer()

  return (
    <div>
      <button ref={toggleRef} type="button" aria-expanded={isOpen} onClick={toggle}>
        menu
      </button>
      <div ref={panelRef} data-testid="panel">
        <button ref={closeRef} type="button" onClick={close}>
          close
        </button>
      </div>
      <output data-testid="state">{isOpen ? 'open' : 'closed'}</output>
    </div>
  )
}

const toggle = () => screen.getByRole('button', { name: 'menu' })
const state = () => screen.getByTestId('state').textContent

describe('useDrawer — the drawer’s one open flag', () => {
  it('starts closed and moves focus onto its own close control as it opens', async () => {
    const user = userEvent.setup()

    render(<Probe />)

    expect(state()).toBe('closed')
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle())

    expect(state()).toBe('open')
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'close' }))
  })

  it('closes from its toggle and hands focus back to it', async () => {
    const user = userEvent.setup()

    render(<Probe />)

    await user.click(toggle())
    await user.click(document.body)
    expect(state()).toBe('closed')

    await user.click(toggle())
    await user.click(toggle())

    expect(state()).toBe('closed')
    expect(document.activeElement).toBe(toggle())
  })

  it('closes on the close control and returns focus to the toggle', async () => {
    const user = userEvent.setup()

    render(<Probe />)

    await user.click(toggle())
    await user.click(screen.getByRole('button', { name: 'close' }))

    expect(state()).toBe('closed')
    expect(document.activeElement).toBe(toggle())
  })

  it('closes on Escape', async () => {
    const user = userEvent.setup()

    render(<Probe />)

    await user.click(toggle())
    fireEvent.keyDown(document, { key: 'Escape' })

    expect(state()).toBe('closed')

    // Escape while it is already closed is left alone.
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(state()).toBe('closed')

    // Any other key is left to the browser.
    await user.click(toggle())
    fireEvent.keyDown(document, { key: 'Tab' })
    expect(state()).toBe('open')
  })

  it('closes on a press outside the panel, and ignores one inside it or on the toggle', async () => {
    const user = userEvent.setup()

    render(<Probe />)

    await user.click(toggle())
    fireEvent.mouseDown(screen.getByTestId('panel'))
    expect(state()).toBe('open')

    fireEvent.mouseDown(toggle())
    expect(state()).toBe('open')

    fireEvent.mouseDown(document.body)
    expect(state()).toBe('closed')
  })

  it('drops the state when the viewport reaches the drawer’s hand-over width', async () => {
    const user = userEvent.setup()
    const width = mockMatchMedia(DRAWER_RESET_QUERY, false)

    render(<Probe />)

    // A hand-over that arrives while it is closed leaves it closed.
    width.change(true)
    expect(state()).toBe('closed')

    width.change(false)
    await user.click(toggle())
    expect(state()).toBe('open')

    // The drawer is dismissed when the viewport grows past the mobile range.
    width.change(true)
    expect(state()).toBe('closed')
    expect(document.activeElement).toBe(toggle())

    // A shrink back down does not bring it back.
    width.change(false)
    expect(state()).toBe('closed')
  })
})
