import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop } from './BackToTop'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, configurable: true, writable: true })
}

function fireScroll() {
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

afterEach(() => {
  vi.restoreAllMocks()
  setScrollY(0)
})

describe('BackToTop', () => {
  it('is hidden on initial load', () => {
    setScrollY(0)
    render(<BackToTop />)
    expect(screen.queryByRole('button', { name: 'Back to top' })).toBeNull()
  })

  it('appears after scrolling past the threshold and scrolls to top on click', async () => {
    setScrollY(0)
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    const user = userEvent.setup()
    render(<BackToTop />)

    setScrollY(500)
    fireScroll()
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toBeInTheDocument()

    await user.click(button)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0 })
  })

  it('hides again when scrolling back to the top', () => {
    setScrollY(800)
    render(<BackToTop />)
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()

    setScrollY(0)
    fireScroll()
    expect(screen.queryByRole('button', { name: 'Back to top' })).toBeNull()
  })
})
