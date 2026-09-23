import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /We are the best interior/i })).toBeInTheDocument()
  })

  it('renders the Learn More link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
  })
})
