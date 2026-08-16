import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BackToTop } from './BackToTop'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, configurable: true })
  fireEvent.scroll(window)
}

describe('BackToTop', () => {
  it('is hidden until the page is scrolled past the threshold', () => {
    render(<BackToTop />)
    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument()

    setScrollY(600)
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()

    setScrollY(0)
    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument()
  })

  it('scrolls back to the top when clicked', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    render(<BackToTop />)

    setScrollY(600)
    await user.click(screen.getByRole('button', { name: 'Back to top' }))

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
