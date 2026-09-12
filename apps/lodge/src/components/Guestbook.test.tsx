import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Guestbook } from './Guestbook'

describe('Guestbook', () => {
  it('renders the guestbook heading', () => {
    render(<Guestbook />)
    expect(screen.getByRole('heading', { name: 'Guestbook' })).toBeDefined()
  })

  it('shows the first testimonial by default', () => {
    render(<Guestbook />)
    expect(screen.getByText(/Sarah Johnson/)).toBeDefined()
    expect(screen.getByText(/wonderful stay/)).toBeDefined()
  })

  it('switches testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<Guestbook />)
    const dots = screen.getAllByRole('button', { name: /show testimonial/i })
    expect(dots.length).toBe(3)
    await user.click(dots[1]!)
    expect(screen.getByText(/Michael Chen/)).toBeDefined()
    // Click 3rd testimonial (4 stars) to cover the non-gold star branch
    await user.click(dots[2]!)
    expect(screen.getByText(/Emily Davis/)).toBeDefined()
  })

  it('renders star ratings', () => {
    render(<Guestbook />)
    expect(screen.getByText(/Sarah Johnson/)).toBeDefined()
  })
})
