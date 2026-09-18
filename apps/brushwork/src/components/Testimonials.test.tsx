import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Exceptional Artistry' })).toBeInTheDocument()
    expect(screen.getByText(/stunning piece/i)).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('heading', { name: 'Creative Excellence' })).toBeInTheDocument()
  })

  it('navigates to the previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByRole('heading', { name: 'Trusted Partners' })).toBeInTheDocument()
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to index 2 (last)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('heading', { name: 'Trusted Partners' })).toBeInTheDocument()
    // Wrap around to index 0
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('heading', { name: 'Exceptional Artistry' })).toBeInTheDocument()
  })

  it('navigates prev from a non-zero index', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to index 1
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('heading', { name: 'Creative Excellence' })).toBeInTheDocument()
    // Go back to index 0
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByRole('heading', { name: 'Exceptional Artistry' })).toBeInTheDocument()
  })
})
