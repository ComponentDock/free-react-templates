import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonial heading and first testimonial', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Testimonial')
    expect(screen.getByText('Jean Smith')).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('navigates between testimonials when dots are clicked', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.getByText('Jean Smith')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /show testimonial from maria johnson/i }))

    expect(screen.getByText('Maria Johnson')).toBeInTheDocument()
    expect(screen.getByText(/sit repellat ipsum dolor fugit/i)).toBeInTheDocument()
  })
})
