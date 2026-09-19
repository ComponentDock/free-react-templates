import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ShopByGender } from './ShopByGender'

describe('ShopByGender', () => {
  it('renders the men collection link', () => {
    render(<ShopByGender />)
    const link = screen.getByRole('link', { name: /Shop Men's Collection/ })
    expect(link).toHaveAttribute('href', '#men')
  })

  it('renders the women collection link', () => {
    render(<ShopByGender />)
    const link = screen.getByRole('link', { name: /Shop Women's Collection/ })
    expect(link).toHaveAttribute('href', '#women')
  })

  it('renders section with correct aria-label', () => {
    render(<ShopByGender />)
    expect(screen.getByRole('link', { name: /Shop Men's Collection/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Shop Women's Collection/ })).toBeInTheDocument()
  })
})
