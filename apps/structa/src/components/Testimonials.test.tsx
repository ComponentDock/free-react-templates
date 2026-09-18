import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Structa delivered our office complex/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechBuild Inc.')).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText(/worked with many construction companies/i)).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText(/Structa delivered our office complex/i)).toBeInTheDocument()
  })

  it('navigates via dot buttons', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: /Go to testimonial 3/i }))
    expect(screen.getByText(/From the initial consultation/i)).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('wraps from first to last on Previous', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Currently at index 0 — clicking Previous should wrap to last (index 2)
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText(/From the initial consultation/i)).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('wraps from last to first on Next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    // Navigate to last testimonial
    await user.click(screen.getByRole('button', { name: /Go to testimonial 3/i }))
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()

    // Clicking Next should wrap back to first (index 0)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText(/Structa delivered our office complex/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('has the testimonials section landmark', () => {
    render(<Testimonials />)
    expect(screen.getByRole('region', { name: /Testimonials/i })).toBeInTheDocument()
  })
})
