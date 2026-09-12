import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonies')).toBeInTheDocument()
  })

  it('renders first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText('Katie Johnson')).toBeInTheDocument()
    expect(screen.getByText(/made finding the right home insurance/)).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const nextBtn = screen.getByLabelText('Next testimonial')
    await user.click(nextBtn)
    expect(screen.getByText('Jun Mars')).toBeInTheDocument()
  })

  it('navigates to previous testimonial from non-first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const nextBtn = screen.getByLabelText('Next testimonial')
    await user.click(nextBtn) // now on testimonial 1
    const prevBtn = screen.getByLabelText('Previous testimonial')
    await user.click(prevBtn) // c !== 0, so c - 1
    expect(screen.getByText('Katie Johnson')).toBeInTheDocument()
  })

  it('navigates to previous from first (wraps to last)', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const prevBtn = screen.getByLabelText('Previous testimonial')
    await user.click(prevBtn) // c === 0, wraps
    expect(screen.getByText('Mark Johnson')).toBeInTheDocument()
  })

  it('wraps next to first from last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const nextBtn = screen.getByLabelText('Next testimonial')
    await user.click(nextBtn) // 1
    await user.click(nextBtn) // 2
    await user.click(nextBtn) // 3
    await user.click(nextBtn) // wraps to 0
    expect(screen.getByText('Katie Johnson')).toBeInTheDocument()
  })
})
