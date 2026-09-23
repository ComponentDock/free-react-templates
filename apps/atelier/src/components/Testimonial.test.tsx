import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the first testimonial by default', () => {
    render(<Testimonial />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText(/CEO, TechVibe/)).toBeInTheDocument()
    expect(screen.getByText(/Working with this agency/)).toBeInTheDocument()
  })

  it('navigates to the next testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<Testimonial />)
    const dots = screen.getAllByRole('tab')
    await user.click(dots[1]!)
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText(/Founder, StartupLab/)).toBeInTheDocument()
  })

  it('navigates to the third testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonial />)
    const dots = screen.getAllByRole('tab')
    await user.click(dots[2]!)
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<Testimonial />)
    expect(screen.getByRole('heading', { name: /What Our Clients Say/ })).toBeInTheDocument()
  })
})
