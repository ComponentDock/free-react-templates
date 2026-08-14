import { act, fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ScrollToTop } from './ScrollToTop'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, configurable: true, writable: true })
}

function backToTopButton(container: HTMLElement) {
  return container.querySelector('button[aria-label="Back to top"]')!
}

describe('ScrollToTop', () => {
  it('is hidden before the user scrolls down', () => {
    setScrollY(0)
    const { container } = render(<ScrollToTop />)

    expect(backToTopButton(container)).toHaveAttribute('aria-hidden', 'true')
  })

  it('appears after scrolling past the threshold', () => {
    setScrollY(0)
    const { container } = render(<ScrollToTop />)

    act(() => {
      setScrollY(500)
      fireEvent.scroll(window)
    })

    expect(backToTopButton(container)).toHaveAttribute('aria-hidden', 'false')
  })

  it('scrolls back to the top when activated', () => {
    setScrollY(500)
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { value: scrollTo, configurable: true })

    const { container } = render(<ScrollToTop />)
    fireEvent.click(backToTopButton(container))

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('hides again when scrolled back up', () => {
    setScrollY(500)
    const { container } = render(<ScrollToTop />)

    act(() => {
      setScrollY(0)
      fireEvent.scroll(window)
    })

    expect(backToTopButton(container)).toHaveAttribute('aria-hidden', 'true')
  })
})
