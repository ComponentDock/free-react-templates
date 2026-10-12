import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useDropdown } from './use-dropdown'

/** The menu as the bar holds it: one flag, one root box and one trigger to hand focus back to. */
function Harness() {
  const { isOpen, open, close, toggle, rootRef, triggerRef } = useDropdown()

  return (
    <div>
      <ul>
        <li ref={rootRef}>
          <button type="button" onClick={open}>
            open
          </button>
          <button type="button" onClick={close}>
            close
          </button>
          <button type="button" onClick={toggle}>
            toggle
          </button>
          <button ref={triggerRef} type="button">
            trigger
          </button>
        </li>
      </ul>
      <p data-testid="state">{isOpen ? 'open' : 'shut'}</p>
      <button type="button">outside</button>
    </div>
  )
}

describe('useDropdown — the rigging menu’s own state', () => {
  it('starts shut and opens and shuts from its own controls', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    expect(screen.getByTestId('state')).toHaveTextContent('shut')

    await user.click(screen.getByRole('button', { name: 'open' }))
    expect(screen.getByTestId('state')).toHaveTextContent('open')

    await user.click(screen.getByRole('button', { name: 'close' }))
    expect(screen.getByTestId('state')).toHaveTextContent('shut')

    await user.click(screen.getByRole('button', { name: 'toggle' }))
    expect(screen.getByTestId('state')).toHaveTextContent('open')

    await user.click(screen.getByRole('button', { name: 'toggle' }))
    expect(screen.getByTestId('state')).toHaveTextContent('shut')
  })

  it('shuts on Escape and hands focus back to the trigger, and ignores Escape while shut', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    const trigger = screen.getByRole('button', { name: 'trigger' })

    await user.keyboard('{Escape}')
    expect(screen.getByTestId('state')).toHaveTextContent('shut')

    await user.click(screen.getByRole('button', { name: 'open' }))
    await user.keyboard('{Escape}')

    expect(screen.getByTestId('state')).toHaveTextContent('shut')
    expect(document.activeElement).toBe(trigger)
  })

  it('shuts on a press outside its own box and stays put on one inside it', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.click(screen.getByRole('button', { name: 'open' }))

    fireEvent.pointerDown(screen.getByRole('button', { name: 'trigger' }))
    expect(screen.getByTestId('state')).toHaveTextContent('open')

    fireEvent.pointerDown(screen.getByRole('button', { name: 'outside' }))
    expect(screen.getByTestId('state')).toHaveTextContent('shut')
  })
})
