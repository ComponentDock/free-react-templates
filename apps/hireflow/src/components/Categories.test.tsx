import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders section heading', () => {
    render(<Categories />)
    expect(screen.getByText('Featured Job Categories')).toBeInTheDocument()
    expect(screen.getByText('Browse top categories to find your ideal role')).toBeInTheDocument()
  })

  it('renders all six category cards', () => {
    render(<Categories />)
    expect(screen.getByText('Accounting')).toBeInTheDocument()
    expect(screen.getByText('Development')).toBeInTheDocument()
    expect(screen.getByText('Technology')).toBeInTheDocument()
    expect(screen.getByText('Media & News')).toBeInTheDocument()
    expect(screen.getByText('Medical')).toBeInTheDocument()
    expect(screen.getByText('Marketing')).toBeInTheDocument()
  })

  it('renders category links', () => {
    render(<Categories />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(6)
  })
})
