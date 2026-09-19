import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Packages } from './Packages'

describe('Packages', () => {
  it('renders section heading and package cards', () => {
    render(<Packages />)
    expect(screen.getByText('Best Packages')).toBeInTheDocument()
    expect(screen.getByText('Bali Adventure')).toBeInTheDocument()
    expect(screen.getByText('Greek Island Hopping')).toBeInTheDocument()
    expect(screen.getByText('Japan Explorer')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<Packages />)
    expect(screen.getByText('$1,299')).toBeInTheDocument()
    expect(screen.getByText('$2,199')).toBeInTheDocument()
    expect(screen.getByText('$3,499')).toBeInTheDocument()
  })

  it('displays duration and rating info', () => {
    render(<Packages />)
    expect(screen.getByText('5 Days / 4 Nights')).toBeInTheDocument()
    const ratings = screen.getAllByText('4.9')
    expect(ratings.length).toBeGreaterThanOrEqual(1)
  })

  it('has view details links', () => {
    render(<Packages />)
    const links = screen.getAllByText('View Details →')
    expect(links).toHaveLength(3)
  })
})
