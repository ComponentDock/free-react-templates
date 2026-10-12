import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockMatchMedia } from '../test/match-media'
import { DRAWER_RESET_QUERY, useDrawer } from './use-drawer'

/**
 * The drawer hook on its own, driven through a harness that renders exactly the
 * three nodes it holds refs to: the opener, the panel, and the panel's own close
 * control. `withClose` drops the close control, which is the one case where the
 * hook asks focus to move onto a node that is not there.
 */
function Harness({ withClose = true }: { withClose?: boolean }) {
  const { isOpen, toggle, close, toggleRef, panelRef, closeRef } = useDrawer()

  return (
    <div>
      <button ref={toggleRef} type="button" aria-expanded={isOpen} onClick={toggle}>
        Toggle
      </button>

      {isOpen && (
        <div ref={panelRef}>
          {withClose && (
            <button ref={closeRef} type="button" onClick={close}>
              Close
            </button>
          )}
          <p>Panel body</p>
        </div>
      )}

      <button type="button">Elsewhere</button>
    </div>
  )
}

const toggle = () => screen.getByRole('button', { name: 'Toggle' })
const elsewhere = () => screen.getByRole('button', { name: 'Elsewhere' })

describe('useDrawer — one open flag and every path that closes it', () => {
  it('starts closed and opens on the opener', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Panel body')).not.toBeInTheDocument()

    await user.click(toggle())

    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Panel body')).toBeInTheDocument()
  })

  it('moves focus onto the panel’s own close control as it opens', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.click(toggle())

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Close' })).toHaveFocus()
    })
  })

  it('survives opening with no close control to move focus onto', async () => {
    const user = userEvent.setup()

    render(<Harness withClose={false} />)

    await user.click(toggle())

    expect(screen.getByText('Panel body')).toBeInTheDocument()
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes on its own opener, and hands focus back to it', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.click(toggle())
    await user.click(toggle())

    expect(screen.queryByText('Panel body')).not.toBeInTheDocument()
    expect(toggle()).toHaveFocus()
  })

  it('closes on Escape, on a press outside, and on the panel’s own control', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.click(toggle())
    await user.keyboard('{Escape}')

    expect(screen.queryByText('Panel body')).not.toBeInTheDocument()

    await user.click(toggle())
    await user.click(elsewhere())

    expect(screen.queryByText('Panel body')).not.toBeInTheDocument()

    await user.click(toggle())
    await user.click(screen.getByRole('button', { name: 'Close' }))

    expect(screen.queryByText('Panel body')).not.toBeInTheDocument()
    expect(toggle()).toHaveFocus()
  })

  it('keeps a press inside the panel from closing it', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.click(toggle())
    await user.click(screen.getByText('Panel body'))

    expect(screen.getByText('Panel body')).toBeInTheDocument()
  })

  it('ignores keys that are not Escape', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.click(toggle())
    await user.keyboard('{ArrowDown}')

    expect(screen.getByText('Panel body')).toBeInTheDocument()
  })

  it('folds itself away as the viewport passes the width the design named', async () => {
    const user = userEvent.setup()
    const query = mockMatchMedia(DRAWER_RESET_QUERY, false)

    render(<Harness />)

    await user.click(toggle())

    expect(screen.getByText('Panel body')).toBeInTheDocument()

    query.change(true)

    expect(screen.queryByText('Panel body')).not.toBeInTheDocument()
    expect(toggle()).toHaveFocus()
  })

  it('leaves the panel alone when the viewport reports the narrow side of the query', async () => {
    const user = userEvent.setup()
    const query = mockMatchMedia(DRAWER_RESET_QUERY, false)

    render(<Harness />)

    await user.click(toggle())
    query.change(false)

    expect(screen.getByText('Panel body')).toBeInTheDocument()
  })

  it('takes its document listeners down with it when it unmounts', async () => {
    const user = userEvent.setup()
    const remove = vi.spyOn(document, 'removeEventListener')

    const { unmount } = render(<Harness />)

    await user.click(toggle())

    unmount()

    expect(remove).toHaveBeenCalledWith('keydown', expect.any(Function))
    expect(remove).toHaveBeenCalledWith('mousedown', expect.any(Function))
  })
})
