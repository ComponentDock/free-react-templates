import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'What Our Students Say' })).toBeInTheDocument()
    expect(screen.getByText('Alice Williams')).toBeInTheDocument()
    expect(screen.getByText(/Fitnest transformed my life/)).toBeInTheDocument()
  })

  it('navigates to the next testimonial when clicking Next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Robert Garcia')).toBeInTheDocument()
    expect(screen.getByText(/complete beginner/)).toBeInTheDocument()
  })

  it('navigates to the previous testimonial from a non-zero index', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Go forward first to index 1
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Robert Garcia')).toBeInTheDocument()

    // Now go back (tests the else branch: c !== 0 → c - 1)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Alice Williams')).toBeInTheDocument()
  })

  it('navigates backward from first to last testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Start at index 0, go to last (tests c === 0 branch)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Maria Lopez')).toBeInTheDocument()
  })

  it('wraps around from last to first on Next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Navigate: 0 -> 1 -> 2 -> 0
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Alice Williams')).toBeInTheDocument()
  })

  it('renders testimonial photos', () => {
    render(<Testimonials />)
    expect(screen.getByRole('img', { name: 'Alice Williams' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('renders the dot indicators', () => {
    render(<Testimonials />)
    const dots = document.querySelectorAll('.rounded-full')
    expect(dots.length).toBeGreaterThanOrEqual(3)
  })
})
