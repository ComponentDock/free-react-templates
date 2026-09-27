import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section title and first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Clients Testimonials/i })).toBeInTheDocument()
    expect(screen.getByText(/Emily Carter/)).toBeInTheDocument()
    expect(screen.getByText(/Homeowner/)).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    expect(screen.getByText(/Emily Carter/)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText(/Michael Torres/)).toBeInTheDocument()
    expect(screen.getByText(/First-time Buyer/)).toBeInTheDocument()
  })

  it('navigates to the previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText(/Sarah Kim/)).toBeInTheDocument()
    expect(screen.getByText(/Renters/)).toBeInTheDocument()
  })

  it('wraps next from last to first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to last: click next twice
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText(/Sarah Kim/)).toBeInTheDocument()
    // Click next again — wraps to first
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText(/Emily Carter/)).toBeInTheDocument()
  })

  it('wraps prev from first to last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Already at first (index 0), click prev — wraps to last
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText(/Sarah Kim/)).toBeInTheDocument()
    // Click prev again from non-zero index
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText(/Michael Torres/)).toBeInTheDocument()
  })

  it('renders the background image with an accessible name', () => {
    render(<Testimonials />)
    expect(screen.getByRole('img', { name: /Happy clients/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
