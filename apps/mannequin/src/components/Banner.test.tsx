import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders three category cards with names, seasons and Shop Now links', () => {
    render(<Banner />)
    expect(screen.getByText('Women')).toBeInTheDocument()
    expect(screen.getByText('Men')).toBeInTheDocument()
    expect(screen.getByText('Accessories')).toBeInTheDocument()
    expect(screen.getAllByText('Spring 2030')).toHaveLength(2)
    expect(screen.getByText('New Trend')).toBeInTheDocument()
    expect(screen.getAllByText('Shop Now')).toHaveLength(3)
  })

  it('links each card to the products section', () => {
    render(<Banner />)
    const links = screen.getAllByRole('link')
    const productLinks = links.filter((link) => link.getAttribute('href') === '#products')
    expect(productLinks).toHaveLength(3)
  })
})
