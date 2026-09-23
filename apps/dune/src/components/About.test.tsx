import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and Learn More link', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', {
        name: /Exploration is really the essence of the human spirit/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText(/group of travelers/i)).toBeInTheDocument()
  })
})
