import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByText('Cloe Marena')).toBeInTheDocument()
    expect(screen.getByText('Homeowner')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Nathalie Channie')).toBeInTheDocument()
    expect(screen.getByText('Business Owner')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Move forward first so prev has a non-zero current
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Nathalie Channie')).toBeInTheDocument()

    // Now prev from index 1 → index 0 (covers false branch of c === 0)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Cloe Marena')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText('Will Turner')).toBeInTheDocument()
  })

  it('wraps from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Go to last testimonial
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 4' }))
    expect(screen.getByText('Nicolas Stainer')).toBeInTheDocument()

    // Next should wrap to first
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Cloe Marena')).toBeInTheDocument()
  })

  it('wraps from first to last on previous', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Already at first, prev should wrap to last (covers true branch of c === 0)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Nicolas Stainer')).toBeInTheDocument()
  })
})
