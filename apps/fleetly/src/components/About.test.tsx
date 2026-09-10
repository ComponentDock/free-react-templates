import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, subtitle, description, CTA, and image', () => {
    const { container } = render(<About />)

    expect(
      screen.getByRole('heading', { name: 'Globally Connected by Large Network' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('We are here to listen from you deliver excellence'),
    ).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText('get details')).toBeInTheDocument()

    const cta = screen.getByText('get details')
    expect(cta).toHaveAttribute('href', '#cars')

    const image = container.querySelector('img')
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/fleetly-about'),
    )
  })
})
