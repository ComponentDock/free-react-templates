import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders about section heading and text', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /delicious food provider since 1990/i,
      }),
    ).toBeInTheDocument()
  })

  it('displays descriptive paragraphs', () => {
    render(<About />)
    // Both paragraphs start with the same text — use getAllByText
    const paragraphs = screen.getAllByText(/good lights it very to above/i)
    expect(paragraphs).toHaveLength(2)
  })

  it('renders learn more link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('renders restaurant image', () => {
    render(<About />)
    expect(screen.getByAltText('Restaurant interior')).toBeInTheDocument()
  })
})
