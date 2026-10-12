import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockMatchMedia } from '../test/match-media'
import { useNavCollapse } from './use-nav-collapse'

interface HarnessProps {
  /** Renders the measurable region; a harness without one has no box to measure. */
  withRegion?: boolean
}

function Harness({ withRegion = true }: HarnessProps) {
  const { isOpen, isDesktop, toggle, close, settle, toggleRef, regionRef, regionStyle } =
    useNavCollapse()

  return (
    <div>
      <button ref={toggleRef} type="button" onClick={toggle}>
        Hamburger
      </button>
      <button type="button" onClick={close}>
        Close
      </button>
      <button type="button" onClick={settle}>
        Settle
      </button>
      {withRegion ? (
        <div ref={regionRef} data-testid="region" style={regionStyle}>
          expanded rows
        </div>
      ) : null}
      <output data-testid="state">{`${String(isOpen)}/${String(isDesktop)}`}</output>
    </div>
  )
}

const state = () => screen.getByTestId('state').textContent
const region = () => screen.getByTestId('region')

describe('useNavCollapse', () => {
  it('starts closed, with no inline height on the region and the narrow presentation', () => {
    render(<Harness />)

    expect(state()).toBe('false/false')
    expect(region().style.height).toBe('')
  })

  it('reads the breakpoint at mount, so a wide viewport starts in the always-visible presentation', () => {
    mockMatchMedia(true)

    render(<Harness />)

    expect(state()).toBe('false/true')
  })

  it('expands on the toggle and hands the box back to auto when there is nothing to measure', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.click(screen.getByRole('button', { name: 'Hamburger' }))

    expect(state()).toBe('true/false')
    // jsdom lays nothing out, so scrollHeight is 0 and the height is left to the content.
    expect(region().style.height).toBe('')
  })

  it('animates from zero to the measured content height and releases it once the transition ends', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    Object.defineProperty(region(), 'scrollHeight', { configurable: true, value: 243 })

    await user.click(screen.getByRole('button', { name: 'Hamburger' }))

    expect(region().style.height).toBe('243px')

    await user.click(screen.getByRole('button', { name: 'Settle' }))

    expect(region().style.height).toBe('')
  })

  it('expands from the toggle even when it has no box to measure at all', async () => {
    const user = userEvent.setup()

    render(<Harness withRegion={false} />)

    await user.click(screen.getByRole('button', { name: 'Hamburger' }))

    expect(state()).toBe('true/false')
  })

  it('closes on a second toggle, on Escape anywhere on the page, and on its own close, returning focus to the hamburger', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    const hamburger = screen.getByRole('button', { name: 'Hamburger' })

    await user.click(hamburger)
    await user.click(hamburger)
    expect(state()).toBe('false/false')
    expect(document.activeElement).toBe(hamburger)

    await user.click(hamburger)
    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(state()).toBe('false/false')
    expect(document.activeElement).toBe(hamburger)

    await user.click(hamburger)
    fireEvent.keyDown(document, { key: 'a' })
    expect(state()).toBe('true/false')

    await user.keyboard('{Escape}')
    expect(state()).toBe('false/false')
    expect(document.activeElement).toBe(hamburger)
  })

  it('folds the list away and moves to the always-visible presentation when the viewport reaches 768px', async () => {
    const user = userEvent.setup()
    const media = mockMatchMedia(false)

    render(<Harness />)

    await user.click(screen.getByRole('button', { name: 'Hamburger' }))
    expect(state()).toBe('true/false')

    media.change(true)
    expect(state()).toBe('false/true')

    media.change(false)
    expect(state()).toBe('false/false')
  })
})
