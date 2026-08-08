import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and label', () => {
    render(<Services />)
    expect(screen.getByText(/Services/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
  })

  it('renders the four service cards with read-more links', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Architect/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interior Design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Landscape Design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Consultancy/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Read more/i })).toHaveLength(4)
  })

  it('renders an image for each service card', () => {
    render(<Services />)
    expect(screen.getAllByRole('img')).toHaveLength(4)
  })
})
