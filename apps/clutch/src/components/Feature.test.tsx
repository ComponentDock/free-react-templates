import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Feature } from './Feature'

describe('Feature', () => {
  it('renders the heading, paragraphs, and action buttons', () => {
    render(<Feature />)
    expect(
      screen.getByRole('heading', { name: /We Are a Trusted Name In Auto/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Our Partners' })).toHaveAttribute('href', '#cars')
  })

  it('renders the six-part feature list', () => {
    render(<Feature />)
    for (const label of ['Engine', 'Turbo', 'Cooling', 'Suspension', 'Electrical', 'Brakes']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
