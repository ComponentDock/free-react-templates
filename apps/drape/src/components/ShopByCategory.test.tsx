import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ShopByCategory } from './ShopByCategory'

describe('ShopByCategory', () => {
  it('renders the section heading', () => {
    render(<ShopByCategory />)
    expect(screen.getByRole('heading', { name: 'Shop by category' })).toBeInTheDocument()
  })

  it('renders three category cards with images', () => {
    render(<ShopByCategory />)
    for (const name of ['Clothing', 'Jewellery', 'Bags']) {
      expect(screen.getByText(name)).toBeInTheDocument()
      expect(screen.getByAltText(name)).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos'),
      )
    }
  })

  it('each category links to the shop section', () => {
    render(<ShopByCategory />)
    const links = screen.getAllByRole('link', { name: /Clothing|Jewellery|Bags/ })
    expect(links.length).toBe(3)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#shop')
    }
  })
})
