import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial with controls', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()

    expect(screen.getByRole('figure', { name: 'John Smith' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'John Smith' })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('navigates between testimonials with the arrows and dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('figure', { name: 'Christine Aguilar' })).toBeInTheDocument()
    expect(screen.queryByRole('figure', { name: 'John Smith' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByRole('figure', { name: 'John Smith' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 4' }))
    expect(screen.getByRole('figure', { name: 'Bruce Rogers' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 4' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
