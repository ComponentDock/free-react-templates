import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial card', () => {
    const { container } = render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Happy Clients' })).toBeInTheDocument()
    expect(screen.getByText(testimonials[0]!.name)).toBeInTheDocument()
    expect(screen.getAllByText('Companies Client')).toHaveLength(1)
    expect(screen.getByText(`“${testimonials[0]!.quote}”`)).toBeInTheDocument()

    // Avatar (decorative -> no img role).
    expect(container.querySelectorAll('img')).toHaveLength(1)
  })

  it('advances through testimonials with the arrows and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[1]!.name)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(testimonials[2]!.name)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(testimonials[1]!.name)).toBeInTheDocument()
  })
})
