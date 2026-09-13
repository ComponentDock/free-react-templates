import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText('Who We Are')).toBeInTheDocument()
  })

  it('renders the description paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/decade of experience/i)).toBeInTheDocument()
    expect(screen.getByText(/initial consultation/i)).toBeInTheDocument()
  })

  it('renders the capability list', () => {
    render(<About />)
    expect(screen.getByText('Residential landscape design')).toBeInTheDocument()
    expect(screen.getByText('Commercial property maintenance')).toBeInTheDocument()
    expect(screen.getByText('Garden installation and renovation')).toBeInTheDocument()
    expect(screen.getByText('Irrigation system setup')).toBeInTheDocument()
    expect(screen.getByText('Seasonal cleanup services')).toBeInTheDocument()
    expect(screen.getByText('Hardscape and patio construction')).toBeInTheDocument()
    expect(screen.getByText('Tree and shrub care')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /landscaping work/i })).toBeInTheDocument()
  })
})
