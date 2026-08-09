import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { name: 'Trusted by Thousands of Families' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Movere moved our three-bedroom house/)).toBeInTheDocument()
    expect(screen.getByText('Jennifer Martinez')).toBeInTheDocument()
    expect(screen.getByText('Local Move')).toBeInTheDocument()
  })

  it('cycles forward through the testimonials and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const next = screen.getByRole('button', { name: 'Next testimonial' })
    for (const name of [
      'Robert Chen',
      'Amanda Foster',
      'Brian & Kelly Adams',
      'Patricia Nguyen',
      'David Hoffman',
    ]) {
      await user.click(next)
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    await user.click(next)
    expect(screen.getByText('Jennifer Martinez')).toBeInTheDocument()
  })

  it('cycles backward and wraps from the first slide', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const prev = screen.getByRole('button', { name: 'Previous testimonial' })
    await user.click(prev)
    expect(screen.getByText('David Hoffman')).toBeInTheDocument()
    await user.click(prev)
    expect(screen.getByText('Patricia Nguyen')).toBeInTheDocument()
  })

  it('jumps to a slide via the dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText('Amanda Foster')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
