import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial slide', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'What Our Guests Say' })).toBeInTheDocument()
    expect(screen.getByText(/An absolutely breathtaking experience/)).toBeInTheDocument()
    expect(screen.getByText('Victoria Hartwell')).toBeInTheDocument()
    expect(screen.getByText('Traveled with Family')).toBeInTheDocument()
  })

  it('moves to the next and previous slides with the carousel controls', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/We celebrated our anniversary/)).toBeInTheDocument()
    expect(screen.getByText('James & Olivia Chen')).toBeInTheDocument()
    expect(screen.getByText('Anniversary Celebration')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/An absolutely breathtaking experience/)).toBeInTheDocument()
  })

  it('wraps around the ends of the carousel', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/The villas are stunning/)).toBeInTheDocument()
    expect(screen.getByText('The Patels')).toBeInTheDocument()
    expect(screen.getByText('Wedding Guests')).toBeInTheDocument()
  })
})
