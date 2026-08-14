import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { TestimonialsCarousel } from './TestimonialsCarousel'

describe('TestimonialsCarousel', () => {
  it('renders the heading and the first testimonial with avatar, name and italic quote', () => {
    render(<TestimonialsCarousel />)
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Katie Johnson avatar/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Katie Johnson' })).toBeInTheDocument()
    const quote = screen.getByText(/Far far away, behind the word mountains/)
    expect(quote.tagName).toBe('BLOCKQUOTE')
    expect(quote.className).toMatch(/italic/)
  })

  it('advances through all four testimonials', async () => {
    const user = userEvent.setup()
    render(<TestimonialsCarousel />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Jun Mars' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Shane Holmes' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Mark Johnson' })).toBeInTheDocument()
  })

  it('wraps from the last testimonial back to the first', async () => {
    const user = userEvent.setup()
    render(<TestimonialsCarousel />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Mark Johnson' })).toBeInTheDocument()
  })

  it('jumps to a testimonial via the dots', async () => {
    const user = userEvent.setup()
    render(<TestimonialsCarousel />)
    await user.click(screen.getByRole('button', { name: 'Show testimonial 3' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Shane Holmes' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('shows white carousel arrows below center', () => {
    render(<TestimonialsCarousel />)
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    expect(next.className).toMatch(/text-white/)
    const controls = next.parentElement!
    expect(controls.className).toMatch(/justify-center/)
  })
})
