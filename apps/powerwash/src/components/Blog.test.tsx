import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest news from our blog')).toBeInTheDocument()
  })

  it('renders all blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText(/Regular Pressure Washing/)).toBeInTheDocument()
    expect(screen.getByText(/5 Signs Your Driveway/)).toBeInTheDocument()
    expect(screen.getByText(/Commercial vs Residential/)).toBeInTheDocument()
  })

  it('renders dates and authors', () => {
    render(<Blog />)
    expect(screen.getByText('June 14, 2024')).toBeInTheDocument()
    expect(screen.getByText('May 28, 2024')).toBeInTheDocument()
    expect(screen.getByText('April 10, 2024')).toBeInTheDocument()
  })
})
