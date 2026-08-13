import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the eyebrow, heading and the first quote card', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimony' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Successful Stories' }),
    ).toBeInTheDocument()
    expect(screen.getByText(`“${testimonials[0]!.quote}”`)).toBeInTheDocument()
    expect(screen.getByText(testimonials[0]!.name)).toBeInTheDocument()
    expect(screen.getByText('Customer')).toBeInTheDocument()
  })

  it('cycles through quotes with next/prev and wraps', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(`“${testimonials[1]!.quote}”`)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(`“${testimonials[0]!.quote}”`)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(
      screen.getByText(`“${testimonials[testimonials.length - 1]!.quote}”`),
    ).toBeInTheDocument()
  })

  it('jumps to a quote from its dot', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText(`“${testimonials[2]!.quote}”`)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
