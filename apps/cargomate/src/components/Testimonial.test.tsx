import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('shows the first slide with author details', () => {
    render(<Testimonial />)

    expect(screen.getByText('User Feedback')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'What our customers feedback for amazing service.',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('Marvel Maison')).toBeInTheDocument()
    expect(screen.getByText('Chief Executive, Amazon')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('cycles slides with next, prev, and dots', async () => {
    const user = userEvent.setup()
    render(<Testimonial />)

    const firstQuote = screen.getByText(/a full container ahead of schedule/)
    expect(firstQuote).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Customs clearance that usually takes days/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/a full container ahead of schedule/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/Customs clearance that usually takes days/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 1' }))
    expect(screen.getByText(/a full container ahead of schedule/)).toBeInTheDocument()
  })
})
