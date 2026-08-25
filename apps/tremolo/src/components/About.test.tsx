import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'About Tremolo' })).toBeInTheDocument()
  })

  it('displays the three value propositions', () => {
    render(<About />)
    expect(screen.getByText('Expert Craftsmanship')).toBeInTheDocument()
    expect(screen.getByText('Farm-to-Table')).toBeInTheDocument()
    expect(screen.getByText('Wood-Fired Excellence')).toBeInTheDocument()
  })
})
