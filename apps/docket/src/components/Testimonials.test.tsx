import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /happy clients/i })).toBeInTheDocument()
  })

  it('renders first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/handled our case with professionalism/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Business Owner')).toBeInTheDocument()
  })

  it('renders pagination indicator', () => {
    render(<Testimonials />)
    expect(screen.getByText('1 / 5')).toBeInTheDocument()
  })

  it('navigates to next testimonial on next click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/facing a difficult legal situation/)).toBeInTheDocument()
    expect(screen.getByText('David Chen')).toBeInTheDocument()
    expect(screen.getByText('2 / 5')).toBeInTheDocument()
  })

  it('navigates to previous testimonial on previous click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Go forward first
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('2 / 5')).toBeInTheDocument()

    // Go back
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('1 / 5')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('wraps around from last to first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Go to last
    for (let i = 0; i < 4; i++) {
      await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    }
    expect(screen.getByText('5 / 5')).toBeInTheDocument()

    // Next wraps to first
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('1 / 5')).toBeInTheDocument()
  })
})
