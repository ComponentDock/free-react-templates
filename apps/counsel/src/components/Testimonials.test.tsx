import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Testimonial/i })).toBeInTheDocument()
    expect(screen.getByText(/David Williams/i)).toBeInTheDocument()
  })

  it('switches testimonial on thumbnail click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Jennifer Martinez/i }))
    expect(screen.getByText(/Jennifer Martinez/i)).toBeInTheDocument()
    expect(screen.getByText(/intellectual property/i)).toBeInTheDocument()
  })
})
