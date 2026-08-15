import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the heading, the first quote with author and role, and navigation buttons', () => {
    render(<Testimonials />)
    const first = testimonials[0]!
    expect(
      screen.getByRole('heading', { level: 2, name: 'Our satisfied customer says' }),
    ).toBeInTheDocument()
    expect(screen.getByText(new RegExp(first.quote))).toBeInTheDocument()
    expect(screen.getAllByText(first.name).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(first.role)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
  })

  it('cycles through quotes and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[1]!.role)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[2]!.role)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[0]!.role)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(testimonials[4]!.role)).toBeInTheDocument()
  })
})
