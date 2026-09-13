import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FooterCTA } from './FooterCTA'

describe('FooterCTA', () => {
  it('renders the heading and Explore Now button', () => {
    render(<FooterCTA />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'We Are Tidal, A Travel Agency',
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Explore Now' })).toBeInTheDocument()
  })
})
