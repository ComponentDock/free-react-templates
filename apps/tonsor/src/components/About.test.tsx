import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the barbershop photos on the left', () => {
    const { container } = render(<About />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(2)
    expect(images[0]).toHaveAttribute('alt', 'Barber at work in the salon')
    expect(images[1]).toHaveAttribute('alt', 'Grooming tools on a barber counter')
  })

  it('shows the heading, paragraph, and Learn More button', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { name: 'We Believe that Interior beauty Lasts Long' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/a haircut and shave are more than grooming/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#services')
  })
})
