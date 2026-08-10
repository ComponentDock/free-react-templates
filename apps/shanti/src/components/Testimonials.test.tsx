import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first slide with quote badge and avatar', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimony')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Successful Stories' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /customer/i })).toBeInTheDocument()
    expect(screen.getByText('Customer')).toBeInTheDocument()
  })

  it('advances slides via the next control', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('David Chen')).toBeInTheDocument()
    expect(screen.queryByText('Sarah Mitchell')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /previous/i }))
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('moves to a slide via the dot controls', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /slide/i })
    expect(dots.length).toBeGreaterThanOrEqual(5)
    await user.click(dots[2]!)
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
  })
})
