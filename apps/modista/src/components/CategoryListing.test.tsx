import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryListing } from './CategoryListing'

describe('CategoryListing', () => {
  it('renders the category listing section', () => {
    render(<CategoryListing />)
    expect(screen.getByRole('region', { name: 'Product categories' })).toBeInTheDocument()
  })

  it('shows three category headings: Men, Women, Accessories', () => {
    render(<CategoryListing />)
    expect(screen.getByRole('heading', { name: 'Men' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Women' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Accessories' })).toBeInTheDocument()
  })

  it('shows subcategory links for each category', () => {
    render(<CategoryListing />)
    const subcategories = ['Down Jackets', 'Hoodies', 'Suits', 'Jeans', 'Casual Pants', 'Sunglass']
    for (const sub of subcategories) {
      const links = screen.getAllByText(sub)
      expect(links.length).toBe(3) // once per category
    }
  })

  it('shows category images', () => {
    render(<CategoryListing />)
    expect(screen.getByRole('img', { name: 'Men category' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Women category' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Accessories category' })).toBeInTheDocument()
  })
})
