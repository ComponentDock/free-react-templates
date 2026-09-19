import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and first testimonial', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Testimonials')
    expect(screen.getByText(/Amazing quality products/)).toBeInTheDocument()
    expect(screen.getByText('Jennifer Wilson')).toBeInTheDocument()
  })

  it('navigates to next testimonial on click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Best online shopping experience/)).toBeInTheDocument()
    expect(screen.getByText('Robert Brown')).toBeInTheDocument()
  })

  it('navigates to previous testimonial on click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // First go to next so we're at index 1, then prev goes to index 0
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Robert Brown')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Jennifer Wilson')).toBeInTheDocument()
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Go to last (index 2) by clicking next twice
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Amanda Taylor')).toBeInTheDocument()

    // Click next again to wrap to first (index 0)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Jennifer Wilson')).toBeInTheDocument()
  })

  it('wraps around from first to last on previous', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Already at index 0, click previous to wrap to last (index 2)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Amanda Taylor')).toBeInTheDocument()
  })
})
