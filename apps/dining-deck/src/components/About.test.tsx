import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, description and Learn More link', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText(/A Place Where/i)).toBeInTheDocument()
    expect(screen.getByText(/locally sourced ingredients/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute(
      'href',
      '#reservation',
    )
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /diningdeck restaurant/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
