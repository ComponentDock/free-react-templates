import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows one testimonial quote with author and role', () => {
    render(<Testimonials />)

    expect(screen.getByText(/Consilio reworked our go-to-market strategy/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('CEO, Meridian Trust Bank')).toBeInTheDocument()
  })

  it('cycles to the next and previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/rolled up their sleeves/)).toBeInTheDocument()
    expect(screen.getByText('David Chen')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/audit was rigorous/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/rolled up their sleeves/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/Consilio reworked our go-to-market strategy/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/audit was rigorous/)).toBeInTheDocument()
  })
})
