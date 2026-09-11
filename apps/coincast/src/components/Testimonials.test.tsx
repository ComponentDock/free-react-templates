import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Crypto Investor')).toBeInTheDocument()
  })

  it('navigates to next testimonial on button click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Blockchain Developer')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Elena Rodriguez')).toBeInTheDocument()
  })

  it('navigates via dot buttons', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /Go to testimonial/i })
    await user.click(dots[2]!)
    expect(screen.getByText('Elena Rodriguez')).toBeInTheDocument()
  })

  it('renders testimonial quote text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/transformed our approach/)).toBeInTheDocument()
  })
})
