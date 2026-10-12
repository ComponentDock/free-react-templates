import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useCartMenu } from './use-cart-menu'

/**
 * The hook as the card wires it: a list item holding the link and the destinations it opens,
 * with something outside the item to press.
 */
function Harness() {
  const { isOpen, open, close, toggle, rootRef, triggerRef } = useCartMenu()

  return (
    <div>
      <ul className="m-0 list-none p-0">
        <li ref={rootRef} onMouseEnter={open} onMouseLeave={close}>
          <button type="button" ref={triggerRef} onClick={toggle}>
            Yard store
          </button>
          {isOpen && <a href="#yard-fittings">Boat fittings</a>}
        </li>
      </ul>
      <button type="button">Somewhere else</button>
      <output>{isOpen ? 'open' : 'shut'}</output>
    </div>
  )
}

const trigger = () => screen.getByRole('button', { name: 'Yard store' })
const state = () => screen.getByRole('status').textContent

describe('useCartMenu — the bill list as one flag and its three closing paths', () => {
  it('starts shut and opens and shuts again on the link itself', () => {
    render(<Harness />)

    expect(state()).toBe('shut')

    fireEvent.click(trigger())

    expect(state()).toBe('open')

    fireEvent.click(trigger())

    expect(state()).toBe('shut')
  })

  it('opens on a hover and shuts when the pointer leaves the item', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.hover(trigger())

    expect(state()).toBe('open')

    await user.unhover(trigger())

    expect(state()).toBe('shut')
  })

  it('shuts on a press outside the item, and leaves a press inside it alone', () => {
    render(<Harness />)

    fireEvent.click(trigger())

    fireEvent.pointerDown(screen.getByRole('link', { name: 'Boat fittings' }))

    expect(state()).toBe('open')

    fireEvent.pointerDown(screen.getByRole('button', { name: 'Somewhere else' }))

    expect(state()).toBe('shut')
  })

  it('shuts on Escape and hands focus back to the link', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    fireEvent.click(trigger())
    trigger().focus()
    await user.keyboard('{Escape}')

    expect(state()).toBe('shut')
    expect(document.activeElement).toBe(trigger())
  })
})
