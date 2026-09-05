import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { ProductsCarousel } from './ProductsCarousel'

describe('ProductsCarousel', () => {
  it('renders', () => {
    const { container } = render(<ProductsCarousel />)
    expect(container).toBeInTheDocument()
  })
})
