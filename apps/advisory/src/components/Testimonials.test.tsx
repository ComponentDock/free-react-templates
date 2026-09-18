import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

const t = [
  { name: 'Robart Brown', role: 'Creative Designer', quote: 'Brook presents your services' },
  { name: 'Sarah Johnson', role: 'Marketing Director', quote: 'Pixel-perfect representation' },
]

describe('Testimonials', () => {
  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(t[0]!.name)).toBeInTheDocument()
    expect(screen.getByText(t[0]!.role)).toBeInTheDocument()
    expect(screen.getByText(/Brook presents your services/)).toBeInTheDocument()
  })

  it('renders quote icon', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
  })

  it('navigates to next testimonial via arrow button', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))

    expect(screen.getByText(t[1]!.name)).toBeInTheDocument()
    expect(screen.getByText(t[1]!.role)).toBeInTheDocument()
    expect(screen.getByText(/Pixel-perfect representation/)).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(t[1]!.name)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(t[0]!.name)).toBeInTheDocument()
  })

  it('wraps from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(t[1]!.name)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(t[0]!.name)).toBeInTheDocument()
  })

  it('wraps from first to last on previous', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(t[1]!.name)).toBeInTheDocument()
  })

  it('navigates via dot buttons', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 2' }))
    expect(screen.getByText(t[1]!.name)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 1' }))
    expect(screen.getByText(t[0]!.name)).toBeInTheDocument()
  })
})
