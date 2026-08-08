import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, intro, and the first testimonial with author', () => {
    render(<Testimonials />)

    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Trusted by Engineering Teams' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Hear from the developers and CTOs/)).toBeInTheDocument()

    expect(screen.getByText(/cut our API development time in half/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('CTO, DataStream Inc.')).toBeInTheDocument()
  })

  it('advances to the next testimonial and back with the arrow controls', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.getByText(/cut our API development time in half/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/migrated from a custom API gateway/)).toBeInTheDocument()
    expect(screen.getByText('Marcus Rivera')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/cut our API development time in half/)).toBeInTheDocument()
  })

  it('wraps around from the first testimonial to the last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.getByText(/cut our API development time in half/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/developer experience is unmatched/)).toBeInTheDocument()
    expect(screen.getByText('Priya Sharma')).toBeInTheDocument()
    expect(screen.getByText(/3 \/ 3/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/cut our API development time in half/)).toBeInTheDocument()
  })
})
