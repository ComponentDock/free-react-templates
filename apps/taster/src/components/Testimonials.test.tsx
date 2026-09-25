import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading and first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: /customer reviews/i })).toBeInTheDocument()
    expect(screen.getByText('Maxim Smith')).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Geert Green')).toBeInTheDocument()
  })

  it('wraps from last to first when clicking next at the end', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Navigate to last item (index 3) by clicking next 3 times
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    // Click next again — should wrap to first
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Maxim Smith')).toBeInTheDocument()
  })

  it('wraps from first to last when clicking prev at the start', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // At index 0, click prev — should wrap to last
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Geert Green', { selector: 'h4' })).toBeInTheDocument()
  })

  it('navigates prev from a non-zero index', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to index 2 via dots
    await user.click(screen.getByRole('button', { name: /go to testimonial 3/i }))
    expect(screen.getByText('Dennis Roman')).toBeInTheDocument()
    // Click prev — should go to index 1
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Geert Green', { selector: 'h4' })).toBeInTheDocument()
  })

  it('navigates via dot buttons', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /go to testimonial 3/i }))
    expect(screen.getByText('Dennis Roman')).toBeInTheDocument()
  })
})
