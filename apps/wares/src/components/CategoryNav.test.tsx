import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryNav } from './CategoryNav'

describe('CategoryNav', () => {
  it('renders all category links', () => {
    render(<CategoryNav />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Hot Deals')).toBeInTheDocument()
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('Laptops')).toBeInTheDocument()
    expect(screen.getByText('Smartphones')).toBeInTheDocument()
    expect(screen.getByText('Cameras')).toBeInTheDocument()
    expect(screen.getByText('Accessories')).toBeInTheDocument()
  })

  it('has navigation landmark', () => {
    render(<CategoryNav />)
    expect(screen.getByRole('navigation', { name: 'Product categories' })).toBeInTheDocument()
  })
})
