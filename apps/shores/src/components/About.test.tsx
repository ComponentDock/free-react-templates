import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /we are nonprofit team/i })).toBeInTheDocument()
  })

  it('renders description paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/For over a decade/i)).toBeInTheDocument()
    expect(screen.getByText(/Our mission is to create/i)).toBeInTheDocument()
  })

  it('renders Learn more button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /nonprofit team/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('loading', 'lazy')
  })
})
