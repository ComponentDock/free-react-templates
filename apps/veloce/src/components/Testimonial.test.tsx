import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the first testimonial quote', () => {
    render(<Testimonial />)

    expect(screen.getByText(/Veloce Garage completely transformed/)).toBeInTheDocument()
  })

  it('renders three dot navigation buttons', () => {
    render(<Testimonial />)

    const dots = screen.getAllByRole('button', { name: /Show testimonial/ })
    expect(dots).toHaveLength(3)
  })

  it('switches testimonial when a different dot is clicked', async () => {
    const user = userEvent.setup()
    render(<Testimonial />)

    expect(screen.getByText(/Veloce Garage completely transformed/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Show testimonial 2' }))

    expect(screen.getByText(/Outstanding customer service/)).toBeInTheDocument()
  })

  it('switches to third testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonial />)

    await user.click(screen.getByRole('button', { name: 'Show testimonial 3' }))

    expect(screen.getByText(/The upgrade package/)).toBeInTheDocument()
  })
})
