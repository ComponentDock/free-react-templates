import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ScrollToTop } from './ScrollToTop'

describe('ScrollToTop', () => {
  it('does not render when not scrolled', () => {
    render(<ScrollToTop />)
    expect(screen.queryByRole('button', { name: /scroll to top/i })).not.toBeInTheDocument()
  })

  it('renders after scrolling past threshold', () => {
    render(<ScrollToTop />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 500, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByRole('button', { name: /scroll to top/i })).toBeInTheDocument()
  })

  it('hides when scrolled back up', () => {
    render(<ScrollToTop />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 500, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByRole('button', { name: /scroll to top/i })).toBeInTheDocument()

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.queryByRole('button', { name: /scroll to top/i })).not.toBeInTheDocument()
  })

  it('calls scrollTo on click', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', { value: scrollTo })

    render(<ScrollToTop />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 500, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    await user.click(screen.getByRole('button', { name: /scroll to top/i }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
