import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Working with this team transformed/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechStart Inc.')).toBeInTheDocument()
  })

  it('renders dot navigation buttons', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /Show testimonial/i })
    expect(dots).toHaveLength(3)
  })

  it('switches testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const secondDot = screen.getByRole('button', {
      name: 'Show testimonial 2',
    })
    await user.click(secondDot)

    expect(screen.getByText(/results exceeded every expectation/i)).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('switches to third testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const thirdDot = screen.getByRole('button', {
      name: 'Show testimonial 3',
    })
    await user.click(thirdDot)

    expect(screen.getByText(/Professional, innovative, and always delivers/i)).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })
})
