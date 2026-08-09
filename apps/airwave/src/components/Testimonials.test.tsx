import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial with dots', () => {
    render(<Testimonials />)

    expect(screen.getByText('Reviews')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Listeners Say' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Rachel Kim/)).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /Go to testimonial/ })).toHaveLength(6)
  })

  it('changes the visible testimonial when a dot is activated', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.queryByText(/Marcus Thompson/)).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 2' }))
    expect(screen.getByText(/Marcus Thompson/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 6' }))
    expect(screen.getByText(/Jordan Blake/)).toBeInTheDocument()
  })

  it('marks the active dot with aria-current', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const first = screen.getByRole('button', { name: 'Go to testimonial 1' })
    expect(first).toHaveAttribute('aria-current', 'true')

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(first).not.toHaveAttribute('aria-current')
    expect(screen.getByRole('button', { name: 'Go to testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
