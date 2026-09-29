import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryNav } from './CategoryNav'

describe('CategoryNav', () => {
  it('renders all category links', () => {
    render(<CategoryNav />)

    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByText('Ladies')).toBeInTheDocument()
    expect(screen.getByText('Mens')).toBeInTheDocument()
    expect(screen.getByText('Accessories')).toBeInTheDocument()
    expect(screen.getByText('Sale')).toBeInTheDocument()
  })

  it('marks Accessories as active', () => {
    render(<CategoryNav />)

    const accessories = screen.getByText('Accessories')
    // The active item should have bold or underline styling
    expect(accessories).toHaveClass('font-bold')
  })

  it('renders five links in total', () => {
    render(<CategoryNav />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(5)
  })
})
