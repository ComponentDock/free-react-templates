import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and Learn More link', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /We Offer Quick/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
  })
})
