import { act, render, screen } from '@testing-library/react'
import type { RefObject } from 'react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useDisclosureMenu } from './useDisclosureMenu'

type ChangeHandler = (event: { matches: boolean }) => void

const originalMatchMedia = window.matchMedia

/** A matchMedia whose `change` listeners the test can drive by hand. */
function stubMatchMedia(): ChangeHandler[] {
  const handlers: ChangeHandler[] = []
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: (_type: string, handler: ChangeHandler) => {
      handlers.push(handler)
    },
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
  return handlers
}

function Menu() {
  const { open, toggle, close, barRef, buttonRef } = useDisclosureMenu()

  return (
    <div ref={barRef as RefObject<HTMLDivElement | null>} data-testid="bar">
      <button type="button" ref={buttonRef} onClick={toggle} aria-expanded={open}>
        menu
      </button>
      <button type="button" onClick={close}>
        reset
      </button>
      <span data-testid="state">{String(open)}</span>
    </div>
  )
}

const state = () => screen.getByTestId('state').textContent

describe('useDisclosureMenu', () => {
  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  it('starts closed and toggles from the button', async () => {
    const user = userEvent.setup()
    render(<Menu />)

    expect(state()).toBe('false')
    await user.click(screen.getByRole('button', { name: 'menu' }))
    expect(state()).toBe('true')
    await user.click(screen.getByRole('button', { name: 'menu' }))
    expect(state()).toBe('false')
  })

  it('closes from the explicit close callback', async () => {
    const user = userEvent.setup()
    render(<Menu />)

    await user.click(screen.getByRole('button', { name: 'menu' }))
    await user.click(screen.getByRole('button', { name: 'reset' }))
    expect(state()).toBe('false')
  })

  it('closes on Escape and returns focus to the button', async () => {
    const user = userEvent.setup()
    render(<Menu />)

    await user.click(screen.getByRole('button', { name: 'menu' }))
    await user.keyboard('{Escape}')

    expect(state()).toBe('false')
    expect(screen.getByRole('button', { name: 'menu' })).toHaveFocus()
  })

  it('ignores any key that is not Escape while open', async () => {
    const user = userEvent.setup()
    render(<Menu />)

    await user.click(screen.getByRole('button', { name: 'menu' }))
    await user.keyboard('a')
    expect(state()).toBe('true')
  })

  it('closes on a press outside the bar and not on one inside it', async () => {
    const user = userEvent.setup()
    render(
      <>
        <Menu />
        <p>outside</p>
      </>,
    )

    await user.click(screen.getByRole('button', { name: 'menu' }))
    await user.click(screen.getByTestId('bar'))
    expect(state()).toBe('true')

    await user.click(screen.getByText('outside'))
    expect(state()).toBe('false')
  })

  it('closes when the viewport crosses to the desktop query', async () => {
    const handlers = stubMatchMedia()
    const user = userEvent.setup()
    render(<Menu />)

    await user.click(screen.getByRole('button', { name: 'menu' }))
    expect(state()).toBe('true')

    act(() => {
      handlers[0]?.({ matches: false })
    })
    expect(state()).toBe('true')

    act(() => {
      handlers[0]?.({ matches: true })
    })
    expect(state()).toBe('false')
  })

  it('works on a browser without matchMedia', async () => {
    // @ts-expect-error — deliberately removing an API jsdom provides.
    delete window.matchMedia
    const user = userEvent.setup()
    render(<Menu />)

    await user.click(screen.getByRole('button', { name: 'menu' }))
    expect(state()).toBe('true')
    vi.restoreAllMocks()
  })
})
