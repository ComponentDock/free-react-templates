import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { addToCartLabel, introProducts, introSubtitle, introTitle } from '../data'
import { IntroProducts } from './IntroProducts'

describe('IntroProducts', () => {
  it('renders the section title and subtitle', () => {
    render(<IntroProducts />)
    expect(screen.getByRole('heading', { name: introTitle })).toBeInTheDocument()
    expect(screen.getByText(introSubtitle)).toBeInTheDocument()
  })

  it('renders five product cards with hover overlays and a NEW badge', () => {
    render(<IntroProducts />)
    const names = screen.getAllByRole('listitem').map((item) => item.textContent)
    for (const product of introProducts) {
      expect(names.some((text) => text?.includes(product.name))).toBe(true)
      expect(names.some((text) => text?.includes(product.price))).toBe(true)
    }
    expect(screen.getAllByText(addToCartLabel)).toHaveLength(introProducts.length)
    const badge = introProducts.find((product) => product.badge)
    expect(screen.getByText(badge?.badge ?? '')).toBeInTheDocument()
  })
})
