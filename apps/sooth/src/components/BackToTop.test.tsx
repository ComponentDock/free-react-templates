import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders nothing until the page is scrolled', () => {
    render(<BackToTop />)
    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument()
  })

  it('appears after scrolling past 300px', () => {
    render(<BackToTop />)
    Object.defineProperty(window, 'scrollY', { value: 400, configurable: true })
    fireEvent.scroll(window)
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
  })

  it('scrolls back to the top on click', async () => {
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    const user = userEvent.setup()
    render(<BackToTop />)
    Object.defineProperty(window, 'scrollY', { value: 600, configurable: true })
    fireEvent.scroll(window)
    await user.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('hides again when scrolled back up', () => {
    render(<BackToTop />)
    Object.defineProperty(window, 'scrollY', { value: 400, configurable: true })
    fireEvent.scroll(window)
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument()
  })
})
