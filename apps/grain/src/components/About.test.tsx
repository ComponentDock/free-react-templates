import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Grain')
  })

  it('renders the description paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/Grain is an interior design studio/)).toBeInTheDocument()
    expect(screen.getByText(/Our team of talented designers/)).toBeInTheDocument()
  })

  it('renders the stats', () => {
    render(<About />)
    expect(screen.getByText('120+')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('15+')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<About />)
    expect(screen.getByText('Projects Done')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /interior design workspace/i })
    expect(img).toBeInTheDocument()
  })

  it('has the about section with correct id', () => {
    render(<About />)
    const section = document.getElementById('about')
    expect(section).toBeInTheDocument()
  })
})
