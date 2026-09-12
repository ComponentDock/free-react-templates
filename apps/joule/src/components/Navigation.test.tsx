import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navigation } from './Navigation'

describe('Navigation', () => {
  it('renders all navigation links', () => {
    render(<Navigation />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Hot Deals')).toBeInTheDocument()
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('New Products')).toBeInTheDocument()
    expect(screen.getByText('Lifestyle')).toBeInTheDocument()
    expect(screen.getByText('Featured')).toBeInTheDocument()
  })

  it('has correct navigation landmark', () => {
    render(<Navigation />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })

  it('has white background and red top border', () => {
    const { container } = render(<Navigation />)
    const nav = container.querySelector('nav')
    expect(nav?.className).toContain('border-t-[3px]')
    expect(nav?.className).toContain('border-brand')
    expect(nav?.className).toContain('bg-white')
  })

  it('links to correct anchors', () => {
    render(<Navigation />)
    const hotDeals = screen.getByText('Hot Deals')
    expect(hotDeals).toHaveAttribute('href', '#hot-deal')
    const newProducts = screen.getByText('New Products')
    expect(newProducts).toHaveAttribute('href', '#new-products')
  })
})
