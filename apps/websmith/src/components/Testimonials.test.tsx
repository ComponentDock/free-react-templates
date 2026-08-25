import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the eyebrow and heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Client Sayings/i })).toBeInTheDocument()
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Websmith transformed our online presence/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechCorp')).toBeInTheDocument()
  })

  it('cycles through testimonials with next button', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('David Chen')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('cycles backward with the previous button', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('wraps around from last to first testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
  })

  it('renders prev and next navigation buttons', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
  })

  it('renders all three distinct testimonials by cycling', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const quotes = [
      /Websmith transformed our online presence/i,
      /Working with the Websmith team/i,
      /quality of work and professionalism/i,
    ]
    for (const quote of quotes) {
      expect(screen.getByText(quote)).toBeInTheDocument()
      await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    }
  })

  it('renders the section with light background', () => {
    const { container } = render(<Testimonials />)
    const section = container.querySelector('section')
    expect(section).toHaveStyle({ backgroundColor: '#f8f9fa' })
  })
})
