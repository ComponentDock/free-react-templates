import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, supporting copy, and the Explore Our Features CTA', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/We\u2019re Web Hosting Professionals/)
    expect(screen.getByText(/reliable and affordable hosting/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /explore our features/i })).toHaveAttribute(
      'href',
      '#features',
    )
  })

  it('renders a server-themed illustration with a decorative map backdrop', () => {
    const { container } = render(<Hero />)
    expect(screen.getByRole('img', { name: /server rack/i })).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
