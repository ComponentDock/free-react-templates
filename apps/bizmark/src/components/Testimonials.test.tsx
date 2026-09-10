import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section headline', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: /customer are saying/i }),
    ).toBeInTheDocument()
  })

  it('shows first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/daniel e gilchrist/i)).toBeInTheDocument()
    expect(screen.getByText(/manager, vision/i)).toBeInTheDocument()
  })

  it('switches testimonial when thumbnail is clicked', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const thumbnails = screen.getAllByRole('button', { name: /view testimonial/i })
    await user.click(thumbnails[1]!)
    expect(screen.getByText(/sarah mitchell/i)).toBeInTheDocument()
  })

  it('renders thumbnail avatars', () => {
    render(<Testimonials />)
    const thumbnails = screen.getAllByRole('button', { name: /view testimonial/i })
    expect(thumbnails.length).toBe(3)
  })
})
