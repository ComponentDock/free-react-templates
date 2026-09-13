import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularProducts } from './PopularProducts'

describe('PopularProducts', () => {
  it('renders the section heading', () => {
    render(<PopularProducts />)
    expect(screen.getByRole('heading', { name: /Popular Products/i })).toBeInTheDocument()
  })

  it('renders six product cards', () => {
    render(<PopularProducts />)
    expect(screen.getByRole('heading', { name: 'Bioderma' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Chanca Piedra' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Umcka Cold Care' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cetyl Pure' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'CLA Core' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Poo Pourri' })).toBeInTheDocument()
  })

  it('renders sale badges for discounted products', () => {
    render(<PopularProducts />)
    const saleBadges = screen.getAllByText('Sale')
    expect(saleBadges.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the View All Products button', () => {
    render(<PopularProducts />)
    expect(screen.getByRole('link', { name: /View All Products/i })).toBeInTheDocument()
  })

  it('renders product images', () => {
    render(<PopularProducts />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })
})
