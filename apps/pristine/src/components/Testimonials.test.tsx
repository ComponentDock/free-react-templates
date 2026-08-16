import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and the first testimonial slide', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What Our Clients Say/i })).toBeInTheDocument()
    expect(screen.getByText(/Pristine transformed our office overnight/i)).toBeInTheDocument()
    expect(screen.getByText('- Robert')).toBeInTheDocument()
  })

  it('shows a five-star rating', () => {
    render(<Testimonials />)
    expect(screen.getAllByLabelText('star')).toHaveLength(5)
  })

  it('advances the slides via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Show testimonial from Amanda' }))
    expect(screen.getByText(/Our carpets look brand new/i)).toBeInTheDocument()
    expect(screen.getByText('- Amanda')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Show testimonial from Daniel' }))
    expect(screen.getByText(/Reliable, friendly and thorough/i)).toBeInTheDocument()
    expect(screen.getByText('- Daniel')).toBeInTheDocument()
  })

  it('marks the active dot with aria-current', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const robertDot = screen.getByRole('button', { name: 'Show testimonial from Robert' })
    expect(robertDot).toHaveAttribute('aria-current', 'true')
    await user.click(screen.getByRole('button', { name: 'Show testimonial from Daniel' }))
    expect(robertDot).toHaveAttribute('aria-current', 'false')
  })
})
