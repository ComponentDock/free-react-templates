import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the heading, paragraph, and white-outline buttons', () => {
    render(<Welcome />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Welcome to our Charity' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/For fifteen years/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '#causes')
    expect(screen.getByRole('link', { name: 'Donate Now' })).toHaveAttribute('href', '#donate')
  })

  it('renders the photo on the right and the dark overlay', () => {
    const { container } = render(<Welcome />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('alt', 'Coastal village community served by Amity programs')
    expect(container.querySelector('[data-overlay]')).toBeInTheDocument()
  })
})
