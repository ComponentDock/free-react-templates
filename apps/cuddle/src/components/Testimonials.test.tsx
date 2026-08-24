import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)

    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getByText('What People Says')).toBeInTheDocument()
  })

  it('renders testimonial content', () => {
    render(<Testimonials />)

    expect(screen.getByText(/The smallest act of kindness/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Community Leader')).toBeInTheDocument()
  })

  it('renders navigation arrows', () => {
    render(<Testimonials />)

    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
  })

  it('renders pagination dots', () => {
    render(<Testimonials />)

    const dots = screen.getAllByRole('button', { name: /Go to testimonial \d+/ })
    expect(dots).toHaveLength(3)
  })

  it('navigates to next testimonial on next click', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))

    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Monthly Donor')).toBeInTheDocument()
  })

  it('navigates to previous testimonial on prev click', () => {
    render(<Testimonials />)

    // Go forward first
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('wraps around from last to first on next', () => {
    render(<Testimonials />)

    // Navigate to last
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))

    // Click next — should wrap to first
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('wraps around from first to last on prev', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))

    // Should show last testimonial
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('navigates via pagination dots', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('auto-advances every 6 seconds', () => {
    vi.useFakeTimers()
    render(<Testimonials />)

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()

    vi.advanceTimersByTime(6000)
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()

    vi.advanceTimersByTime(6000)
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()

    vi.useRealTimers()
  })

  it('has section with id testimonials', () => {
    const { container } = render(<Testimonials />)

    const section = container.querySelector('#testimonials')
    expect(section).toBeInTheDocument()
  })

  it('renders testimonial avatars', () => {
    render(<Testimonials />)

    const avatars = screen.getAllByAltText(/Sarah Johnson|Michael Chen|Emily Rodriguez/)
    expect(avatars).toHaveLength(3)
  })
})
