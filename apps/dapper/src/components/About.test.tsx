import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, lead paragraph, and Learn More button', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { name: 'We Believe that Interior beauty Lasts Long' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#services')
  })

  it('shows a framed photo of the barbershop', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: "Barber styling a client's hair" })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
