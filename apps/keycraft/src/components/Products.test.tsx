import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Products } from './Products'

describe('Products', () => {
  it('renders the section heading', () => {
    render(<Products />)

    expect(screen.getByRole('heading', { level: 2, name: 'Locksmith Store' })).toBeInTheDocument()
    expect(screen.getByText('Our products')).toBeInTheDocument()
  })

  it('renders all 5 product cards with prices', () => {
    render(<Products />)

    const prices = screen.getAllByText('$55.0')
    expect(prices.length).toBe(5)
  })

  it('renders the View all link', () => {
    render(<Products />)

    expect(screen.getByRole('link', { name: 'View all' })).toBeInTheDocument()
  })

  it('renders product images', () => {
    render(<Products />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(5)
  })
})
