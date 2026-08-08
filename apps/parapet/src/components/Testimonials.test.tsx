import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, a five-star review, and carousel controls', () => {
    render(<Testimonials />)

    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Robert & Maria Garcia/)).toBeInTheDocument()
    expect(screen.getByText('Homeowners, The Woodlands')).toBeInTheDocument()
    expect(screen.getByLabelText('5 out of 5 stars')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
  })

  it('cycles through reviews with the next and previous controls and dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.getByText(/Robert & Maria Garcia/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/David Chen/)).toBeInTheDocument()
    expect(screen.queryByText(/Robert & Maria Garcia/)).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/Robert & Maria Garcia/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText(/Sarah Thompson/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/David Chen/)).toBeInTheDocument()
  })
})
