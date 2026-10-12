import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BackToTop } from './BackToTop'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, writable: true, value })
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

function withMotionChoice(reduce: boolean) {
  window.matchMedia = ((query: string) => ({
    matches: reduce,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
}

describe('BackToTop', () => {
  afterEach(() => {
    setScrollY(0)
    withMotionChoice(false)
  })

  it('stays hidden until the page has scrolled past its threshold', () => {
    render(<BackToTop />)

    expect(screen.queryByRole('button', { name: 'Back to the top of the page' })).toBeNull()

    setScrollY(321)

    expect(screen.getByRole('button', { name: 'Back to the top of the page' })).toBeInTheDocument()
  })

  it('scrolls smoothly back to the top for a visitor who wants motion', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, writable: true, value: scrollTo })

    render(<BackToTop />)
    setScrollY(400)
    await user.click(screen.getByRole('button', { name: 'Back to the top of the page' }))

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('jumps straight to the top when motion is reduced', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { configurable: true, writable: true, value: scrollTo })
    withMotionChoice(true)

    render(<BackToTop />)
    setScrollY(400)
    await user.click(screen.getByRole('button', { name: 'Back to the top of the page' }))

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' })
  })
})
