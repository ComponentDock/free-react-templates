import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

const quotes = testimonials.map((item) => item.quote)

describe('Testimonials', () => {
  it('renders the first testimonial with quote, name and position', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: /Happy People/ })).toBeInTheDocument()
    expect(screen.getByText(new RegExp(quotes[0]!.slice(0, 24)))).toBeInTheDocument()
    expect(screen.getByText(testimonials[0]!.name)).toBeInTheDocument()
    expect(screen.getByText(testimonials[0]!.position)).toBeInTheDocument()
  })

  it('advances through the carousel with next, previous and indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(new RegExp(quotes[1]!.slice(0, 24)))).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(new RegExp(quotes[0]!.slice(0, 24)))).toBeInTheDocument()

    // Wrap-around from the first slide backwards.
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(new RegExp(quotes[2]!.slice(0, 24)))).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 2' }))
    expect(screen.getByText(new RegExp(quotes[1]!.slice(0, 24)))).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
