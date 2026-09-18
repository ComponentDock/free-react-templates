import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText(/Passage made my immigration journey/)).toBeInTheDocument()
    expect(screen.getByText('Canada PR Holder')).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))

    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Australia Student Visa')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))

    expect(screen.getByText('Priya Sharma')).toBeInTheDocument()
    expect(screen.getByText('UK Work Visa')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial from a non-zero index', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Go to index 1
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()

    // Go back to index 0
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('wraps from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Go to last
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Priya Sharma')).toBeInTheDocument()

    // Wrap to first
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const dots = screen.getAllByRole('button', { name: /Go to testimonial/ })
    expect(dots).toHaveLength(3)

    await user.click(dots[1]!)
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<Testimonials />)
    const stars = screen.getAllByRole('img', { hidden: true })
    expect(stars.length).toBeGreaterThanOrEqual(1)
  })
})
