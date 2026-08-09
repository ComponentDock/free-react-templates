import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop } from './BackToTop'

describe('BackToTop', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('starts hidden and appears after scrolling past 300px', () => {
    render(<BackToTop />)
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('opacity-0')

    Object.defineProperty(window, 'scrollY', { value: 400, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(button).toHaveClass('opacity-100')

    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(button).toHaveClass('opacity-0')
  })

  it('scrolls to the top when clicked', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    render(<BackToTop />)
    await user.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
