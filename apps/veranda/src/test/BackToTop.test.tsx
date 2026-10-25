import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { BackToTop } from '../components/BackToTop'

describe('BackToTop', () => {
  it('fades in past 300 px and scrolls the page back to the top', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', {
      configurable: true,
      writable: true,
      value: scrollTo,
    })
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })

    render(<BackToTop />)
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('opacity-0')

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 400 })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })

    expect(button).toHaveClass('opacity-100')

    await user.click(button)
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
