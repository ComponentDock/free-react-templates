import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  addToCartLabel,
  favoriteLabel,
  popularIntro,
  popularProducts,
  popularTitle,
  sortLabel,
  sortOptions,
  viewMoreLabel,
} from '../data'
import { PopularItems } from './PopularItems'

describe('PopularItems', () => {
  it('renders the title, intro, six product cards, and view-more button', () => {
    render(<PopularItems />)
    expect(screen.getByRole('heading', { name: popularTitle })).toBeInTheDocument()
    expect(screen.getByText(popularIntro)).toBeInTheDocument()

    expect(screen.getAllByRole('article')).toHaveLength(popularProducts.length)
    for (const product of popularProducts) {
      expect(screen.getByRole('heading', { name: product.name })).toBeInTheDocument()
      expect(screen.getByText(product.price)).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: viewMoreLabel })).toBeInTheDocument()
  })

  it('renders the sort select and changes its value', async () => {
    const user = userEvent.setup()
    render(<PopularItems />)

    const select = screen.getByLabelText(sortLabel)
    expect(select).toHaveValue(sortOptions[0])
    for (const option of sortOptions) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }

    await user.selectOptions(select, sortOptions[1])
    expect(select).toHaveValue(sortOptions[1])
  })

  it('renders add-to-cart bars and favorite buttons on each card', () => {
    render(<PopularItems />)
    expect(screen.getAllByRole('link', { name: addToCartLabel })).toHaveLength(
      popularProducts.length,
    )
    for (const product of popularProducts) {
      expect(
        screen.getByRole('button', { name: `${favoriteLabel}: ${product.name}` }),
      ).toBeInTheDocument()
    }
  })
})
