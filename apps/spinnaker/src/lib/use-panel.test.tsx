import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PANEL_RESET_QUERY, usePanel } from './use-panel'
import { mockMatchMedia } from '../test/match-media'

/** The folding panel as the bar holds it: one flag, and the two paths that shut it. */
function Harness() {
  const { isOpen, toggle, close } = usePanel()

  return (
    <div>
      <button type="button" onClick={toggle}>
        toggle
      </button>
      <button type="button" onClick={close}>
        close
      </button>
      <p data-testid="state">{isOpen ? 'open' : 'shut'}</p>
    </div>
  )
}

describe('usePanel — the folding panel’s own state', () => {
  it('starts folded and flips on every toggle', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    expect(screen.getByTestId('state')).toHaveTextContent('shut')

    await user.click(screen.getByRole('button', { name: 'toggle' }))
    expect(screen.getByTestId('state')).toHaveTextContent('open')

    await user.click(screen.getByRole('button', { name: 'toggle' }))
    expect(screen.getByTestId('state')).toHaveTextContent('shut')
  })

  it('shuts on Escape while it is open, and ignores Escape while it is not', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.keyboard('{Escape}')
    expect(screen.getByTestId('state')).toHaveTextContent('shut')

    await user.click(screen.getByRole('button', { name: 'toggle' }))

    fireEvent.keyDown(document.body, { key: 'a' })
    expect(screen.getByTestId('state')).toHaveTextContent('open')

    await user.keyboard('{Escape}')

    expect(screen.getByTestId('state')).toHaveTextContent('shut')
  })

  it('shuts from its own control, whatever state it is in', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.click(screen.getByRole('button', { name: 'close' }))
    expect(screen.getByTestId('state')).toHaveTextContent('shut')

    await user.click(screen.getByRole('button', { name: 'toggle' }))
    await user.click(screen.getByRole('button', { name: 'close' }))

    expect(screen.getByTestId('state')).toHaveTextContent('shut')
  })

  it('folds itself away when the viewport passes the width where the bar’s list takes over', async () => {
    const user = userEvent.setup()
    const width = mockMatchMedia(PANEL_RESET_QUERY, false)

    render(<Harness />)

    await user.click(screen.getByRole('button', { name: 'toggle' }))
    expect(screen.getByTestId('state')).toHaveTextContent('open')

    width.change(true)
    expect(screen.getByTestId('state')).toHaveTextContent('shut')

    await user.click(screen.getByRole('button', { name: 'toggle' }))

    width.change(false)
    expect(screen.getByTestId('state')).toHaveTextContent('open')
  })
})
