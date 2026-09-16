import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimony } from './Testimony'

describe('Testimony', () => {
  it('renders the first testimonial with name, role, and quote', () => {
    render(<Testimony />)
    expect(screen.getByRole('heading', { name: /testimonials/i })).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Youth Ministry Leader')).toBeInTheDocument()
    expect(screen.getByText(/sprout church has transformed my life/i)).toBeInTheDocument()
  })

  it('navigates to the next testimonial with the arrow button', async () => {
    const user = userEvent.setup()
    render(<Testimony />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('David Chen')).toBeInTheDocument()
    expect(screen.getByText('Worship Team')).toBeInTheDocument()
  })

  it('navigates to a specific testimonial via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimony />)
    await user.click(screen.getByRole('button', { name: /go to testimonial 3/i }))
    expect(screen.getByText('Maria Rodriguez')).toBeInTheDocument()
  })

  it('wraps around when clicking next on the last testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimony />)
    // Navigate to last
    await user.click(screen.getByRole('button', { name: /go to testimonial 3/i }))
    // Click next should wrap to first
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimony />)
    // Start at first, prev should wrap to last
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Maria Rodriguez')).toBeInTheDocument()
  })
})
