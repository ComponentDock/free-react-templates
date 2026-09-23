import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders all six categories with counts', () => {
    render(<Categories />)
    expect(screen.getByText('Real Estate')).toBeInTheDocument()
    expect(screen.getByText('Books & Magazines')).toBeInTheDocument()
    expect(screen.getByText('Furniture')).toBeInTheDocument()
    expect(screen.getByText('Electronics')).toBeInTheDocument()
    expect(screen.getByText('Cars & Vehicles')).toBeInTheDocument()
    expect(screen.getByText('Other')).toBeInTheDocument()
  })

  it('displays formatted counts', () => {
    render(<Categories />)
    expect(screen.getByText('3,921')).toBeInTheDocument()
    expect(screen.getByText('398')).toBeInTheDocument()
    expect(screen.getByText('1,229')).toBeInTheDocument()
    expect(screen.getByText('32,891')).toBeInTheDocument()
    expect(screen.getByText('29,221')).toBeInTheDocument()
    expect(screen.getByText('219')).toBeInTheDocument()
  })

  it('renders category links with correct href', () => {
    render(<Categories />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(6)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#ads')
    })
  })
})
