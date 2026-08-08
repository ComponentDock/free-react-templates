import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and the first testimonial', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Trusted by fast-moving startups' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/We went from idea to production/)).toBeInTheDocument()
    expect(screen.getByText('Alex Rivera')).toBeInTheDocument()
    expect(screen.getByText(/CTO · NexaFlow/)).toBeInTheDocument()
  })

  it('moves to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/The preview deployments for every branch/)).toBeInTheDocument()
    expect(screen.getByText('Priya Sharma')).toBeInTheDocument()
  })

  it('moves to the previous testimonial and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/Our team ships daily instead of monthly/)).toBeInTheDocument()
    expect(screen.getByText('Ahmed Hassan')).toBeInTheDocument()
  })
})
