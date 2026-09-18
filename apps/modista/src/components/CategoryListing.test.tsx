import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryListing } from './CategoryListing'

describe('CategoryListing', () => {
  it('renders three category headings', () => {
    render(<CategoryListing />)
    expect(screen.getByRole('heading', { name: 'Men' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Women' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Accessories' })).toBeInTheDocument()
  })

  it('renders subcategory links', () => {
    render(<CategoryListing />)
    const links = ['Down Jackets', 'Hoodies', 'Suits', 'Jeans', 'Casual Pants', 'Sunglass']
    links.forEach((link) => {
      const elements = screen.getAllByText(link)
      expect(elements.length).toBe(3) // once per category
    })
  })

  it('renders category images', () => {
    render(<CategoryListing />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})
