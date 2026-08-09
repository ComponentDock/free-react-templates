import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { act, fireEvent } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.clearAllTimers()
    vi.useRealTimers()
  })

  it('renders the heading and the first testimonial card', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Carl Smith' })).toBeInTheDocument()
    expect(screen.getByText('Customer Corp.')).toBeInTheDocument()
    expect(screen.getByText(/Quaerat qui, ipsum debitis/)).toBeInTheDocument()
  })

  it('auto-advances between cards every five seconds', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 3, name: 'Carl Smith' })).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('heading', { level: 3, name: 'Craig Darren' })).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('heading', { level: 3, name: 'John Smith' })).toBeInTheDocument()
    expect(screen.getByText(/Nisi itaque tempore/)).toBeInTheDocument()
  })

  it('advances and wraps with the next/previous controls', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Craig Darren' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Carl Smith' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByRole('heading', { level: 3, name: 'John Smith' })).toBeInTheDocument()
    expect(screen.getByText(/Animi doloribus accusamus/)).toBeInTheDocument()
  })

  it('jumps to a card via the dot controls and marks it current', () => {
    render(<Testimonials />)

    const dots = screen.getAllByRole('button', { name: /Go to testimonial/ })
    expect(dots).toHaveLength(4)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByRole('heading', { level: 3, name: 'John Smith' })).toBeInTheDocument()
    expect(screen.getByText(/Nisi itaque tempore/)).toBeInTheDocument()
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
  })

  it('clears the autoplay interval on unmount', () => {
    const clearSpy = vi.spyOn(globalThis, 'clearInterval')
    const { unmount } = render(<Testimonials />)

    unmount()

    expect(clearSpy).toHaveBeenCalled()
    clearSpy.mockRestore()
  })
})
