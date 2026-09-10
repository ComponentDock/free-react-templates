import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders experience headline', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: /experience/i })).toBeInTheDocument()
  })

  it('renders Read More button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })

  it('renders illustration image', () => {
    render(<About />)
    expect(screen.getByAltText(/about bizmark/i)).toBeInTheDocument()
  })
})
