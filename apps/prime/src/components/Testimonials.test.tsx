import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the heading, subheading, and five slides with authors and roles', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: 'Testimony' })).toBeInTheDocument()
    expect(screen.getByText('Our Happy Customer Says')).toBeInTheDocument()
    for (const testimonial of testimonials) {
      expect(screen.getByText(testimonial.author)).toBeInTheDocument()
      expect(screen.getByText(testimonial.role)).toBeInTheDocument()
    }
  })

  it('advances through the slides with the next control', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('button', { name: 'Go to testimonial 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('wraps around at both ends', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByRole('button', { name: 'Go to testimonial 5' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('button', { name: 'Go to testimonial 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide via the dot controls', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByRole('button', { name: 'Go to testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByRole('button', { name: 'Go to testimonial 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
