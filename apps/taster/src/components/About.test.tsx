import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and descriptive paragraphs', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: /the restaurant/i })).toBeInTheDocument()
    expect(screen.getByText(/far far away, behind the word mountains/i)).toBeInTheDocument()
    expect(screen.getByText(/it is a paradisematic country/i)).toBeInTheDocument()
  })
})
