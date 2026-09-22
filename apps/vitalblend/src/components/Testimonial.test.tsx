import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the first testimonial by default', () => {
    render(<Testimonial />)
    expect(screen.getByText(/the automated process starts/i)).toBeInTheDocument()
    expect(screen.getByText('Robart Brown')).toBeInTheDocument()
    expect(screen.getByText('Creative Designer')).toBeInTheDocument()
  })

  it('renders dot navigation buttons', () => {
    render(<Testimonial />)
    const dots = screen.getAllByRole('button', { name: /show testimonial/i })
    expect(dots.length).toBe(2)
  })

  it('switches testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<Testimonial />)

    const secondDot = screen.getByRole('button', { name: 'Show testimonial 2' })
    await user.click(secondDot)

    expect(screen.getByText(/amazing health consultation/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
    expect(screen.getByText('Wellness Coach')).toBeInTheDocument()
  })

  it('renders the testimonial avatar image', () => {
    render(<Testimonial />)
    expect(screen.getByRole('img', { name: 'Robart Brown' })).toBeInTheDocument()
  })
})
