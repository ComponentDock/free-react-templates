import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, tagline and paragraphs', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2, name: 'About Design Week' })).toBeInTheDocument()
    expect(screen.getByText('A Citywide Celebration Of Design')).toBeInTheDocument()
    expect(
      screen.getByText(/three days of talks, workshops, and studio crawls/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/bring a sketchbook/i)).toBeInTheDocument()
  })
})
