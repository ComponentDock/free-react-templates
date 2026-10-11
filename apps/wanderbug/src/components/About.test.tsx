import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the split layout with the illustration, pitch and yellow booking CTA', () => {
    render(<About />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Get ready for real time adventure' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Small groups, local leaders/)).toBeInTheDocument()

    const illustration = screen.getByRole('img', {
      name: 'Travellers planning the next leg of a guided tour',
    })
    expect(illustration).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/wanderbug-about/700/560',
    )

    const cta = screen.getByRole('link', { name: 'Book Your Destination' })
    expect(cta).toHaveAttribute('href', '#events')
    expect(cta).toHaveClass('bg-brand')
  })
})
