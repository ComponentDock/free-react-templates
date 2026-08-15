import { describe, expect, it, vi } from 'vitest'
import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

function activeFigure(section: HTMLElement): HTMLElement {
  const figure = Array.from(section.querySelectorAll('figure')).find((el) =>
    el.classList.contains('block'),
  )
  if (!figure) throw new Error('no active figure')
  return figure as HTMLElement
}

describe('Testimonials', () => {
  it('shows the first testimonial slide with author and role', () => {
    render(<Testimonials />)

    const section = screen.getByRole('region', { name: 'Testimonials' })
    const active = activeFigure(section)
    expect(active).toHaveTextContent(/Donec imperdiet congue orci consequat/)
    expect(active).toHaveTextContent('Robert Thomson')
    expect(active).toHaveTextContent('Business Owner')
    expect(
      within(section).getByRole('button', { name: 'Previous testimonial' }),
    ).toBeInTheDocument()
    expect(within(section).getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
  })

  it('advances slides with the next button and wraps with previous', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const section = screen.getByRole('region', { name: 'Testimonials' })
    await user.click(within(section).getByRole('button', { name: 'Next testimonial' }))
    expect(activeFigure(section)).toHaveTextContent(/Fusce ac mattis nulla/)

    await user.click(within(section).getByRole('button', { name: 'Previous testimonial' }))
    expect(activeFigure(section)).toHaveTextContent(/Donec imperdiet congue orci consequat/)
  })

  it('wraps forward from the last slide to the first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const section = screen.getByRole('region', { name: 'Testimonials' })
    const next = within(section).getByRole('button', { name: 'Next testimonial' })
    await user.click(next)
    await user.click(next)
    await user.click(next)
    expect(activeFigure(section)).toHaveTextContent(/Donec imperdiet congue orci consequat/)
  })

  it('autoplays to the next slide after the interval and cleans up on unmount', async () => {
    vi.useFakeTimers()
    const { unmount } = render(<Testimonials />)
    const clearSpy = vi.spyOn(window, 'clearInterval')

    await act(async () => {
      await vi.advanceTimersByTimeAsync(8001)
    })
    const section = screen.getByRole('region', { name: 'Testimonials' })
    expect(activeFigure(section)).toHaveTextContent(/Fusce ac mattis nulla/)

    unmount()
    expect(clearSpy).toHaveBeenCalled()
    clearSpy.mockRestore()
    vi.useRealTimers()
  })
})
