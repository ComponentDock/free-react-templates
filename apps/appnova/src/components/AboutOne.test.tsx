import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutOne } from './AboutOne'

describe('AboutOne', () => {
  it('renders the heading, blurb, and CTA button', () => {
    render(<AboutOne />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Designed for a Seamless Experience' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Great apps are built on great foundations/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Details' })).toHaveAttribute('href', '#pricing')
  })
})
