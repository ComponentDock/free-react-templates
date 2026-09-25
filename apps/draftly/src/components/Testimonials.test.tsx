import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading', () => {
    render(<Testimonials />)
    expect(screen.getByText(/What client says about/)).toBeInTheDocument()
  })

  it('renders first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Cloe Marena')).toBeInTheDocument()
    expect(screen.getByText(/Laudantium non eligendi/)).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Nathalie Channie')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Will Turner')).toBeInTheDocument()
  })

  it('wraps around from first to last on prev', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // At index 0, prev should go to index 2 (Will Turner)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Will Turner')).toBeInTheDocument()
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to index 2 via prev twice
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Will Turner')).toBeInTheDocument()
    // Now next should wrap to index 0 (Cloe Marena)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Cloe Marena')).toBeInTheDocument()
  })

  it('goes back from middle to first on prev', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to index 1 via next
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Nathalie Channie')).toBeInTheDocument()
    // Prev from index 1 should go to index 0 (Cloe Marena)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Cloe Marena')).toBeInTheDocument()
  })
})
