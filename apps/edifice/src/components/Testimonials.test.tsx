import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first quote', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Why we are the best/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Alan Crew' })).toBeInTheDocument()
    expect(screen.getByText(/1 \/ 3/i)).toBeInTheDocument()
  })

  it('navigates to the next and previous quotes', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByRole('heading', { level: 3, name: 'Jean Doe' })).toBeInTheDocument()
    expect(screen.getByText(/2 \/ 3/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByRole('heading', { level: 3, name: 'Alan Crew' })).toBeInTheDocument()
    expect(screen.getByText(/1 \/ 3/i)).toBeInTheDocument()
  })

  it('wraps around past the last quote', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByRole('heading', { level: 3, name: 'Alan Crew' })).toBeInTheDocument()
    expect(screen.getByText(/1 \/ 3/i)).toBeInTheDocument()
  })
})
