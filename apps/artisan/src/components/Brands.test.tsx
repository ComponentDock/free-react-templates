import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders the five grayscale wordmarks', () => {
    const { container } = render(<Brands />)
    for (const name of ['Forbes', 'dribbble', '99designs', 'AWWWARDS', 'Envato']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    const strip = container.querySelector('.brand-wrap')
    expect(strip).toHaveClass('bg-white')
    expect(strip).toHaveClass('rounded-full')
    expect(strip).toHaveClass('-mt-16')
  })
})
