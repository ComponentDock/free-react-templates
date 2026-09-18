import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Products } from './Products'

describe('Products', () => {
  it('renders the section heading', () => {
    render(<Products />)
    expect(screen.getByText('Pharmacy Products')).toBeInTheDocument()
  })

  it('renders four product cards', () => {
    render(<Products />)
    const cards = screen.getAllByText('Umcka Cold Care')
    expect(cards).toHaveLength(4)
  })

  it('shows prices', () => {
    render(<Products />)
    const prices = screen.getAllByText('$120.00')
    expect(prices).toHaveLength(4)
  })

  it('shows sale badges', () => {
    render(<Products />)
    const saleBadges = screen.getAllByText('Sale')
    expect(saleBadges).toHaveLength(2)
  })

  it('has product images', () => {
    render(<Products />)
    const images = screen.getAllByAltText('Umcka Cold Care')
    expect(images).toHaveLength(4)
  })
})
