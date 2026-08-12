import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the large Women\u2019s fashion tile and four small tiles with SHOP NOW links', () => {
    render(<Categories />)

    expect(screen.getByRole('heading', { level: 2, name: "Women's fashion" })).toBeInTheDocument()
    for (const name of ["Men's fashion", "Kid's fashion", 'Cosmetics', 'Accessories']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: /Shop Now/ })).toHaveLength(5)
    expect(screen.getAllByRole('img')).toHaveLength(5)
  })
})
