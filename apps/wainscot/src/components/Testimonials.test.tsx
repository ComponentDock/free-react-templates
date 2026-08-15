import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { testimonials } from '../data'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial with quote, name and role', () => {
    render(<Testimonials />)
    const first = testimonials[0]!
    expect(screen.getByText(first.quote)).toBeInTheDocument()
    expect(screen.getByText(first.name)).toBeInTheDocument()
    expect(screen.getByText(first.role)).toBeInTheDocument()
  })

  it('advances to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const next = testimonials[1]!
    expect(screen.queryByText(next.quote)).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(next.quote)).toBeInTheDocument()
    expect(screen.getByText(next.name)).toBeInTheDocument()
  })

  it('goes back to the previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const first = testimonials[0]!
    const second = testimonials[1]!
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(second.quote)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(first.quote)).toBeInTheDocument()
  })

  it('wraps around from the first to the last testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const last = testimonials[testimonials.length - 1]!
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(last.quote)).toBeInTheDocument()
  })

  it('wraps around from the last to the first testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const first = testimonials[0]!
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(first.quote)).toBeInTheDocument()
  })
})
