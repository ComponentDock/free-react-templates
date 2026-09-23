import { act } from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ScrollToTop } from './ScrollToTop'

describe('ScrollToTop', () => {
  it('does not render when page is at top', () => {
    render(<ScrollToTop />)
    expect(screen.queryByRole('button', { name: /Scroll to top/i })).not.toBeInTheDocument()
  })

  it('renders the button when page is scrolled down', () => {
    render(<ScrollToTop />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 500, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByRole('button', { name: /Scroll to top/i })).toBeInTheDocument()
  })

  it('scrolls to top when clicked', async () => {
    const user = userEvent.setup()
    render(<ScrollToTop />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 500, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    await user.click(screen.getByRole('button', { name: /Scroll to top/i }))
    expect(screen.getByRole('button', { name: /Scroll to top/i })).toBeInTheDocument()
  })
})
