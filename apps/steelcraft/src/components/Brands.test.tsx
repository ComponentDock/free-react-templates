import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Brands } from './Brands'
import { brands } from '../data'

describe('Brands', () => {
  it('renders all client logo marks', () => {
    render(<Brands />)
    for (const name of brands) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('labels the strip for assistive technology', () => {
    render(<Brands />)
    expect(screen.getByRole('region', { name: 'Client logos' })).toBeInTheDocument()
  })

  it('renders the marks in grayscale', () => {
    const { container } = render(<Brands />)
    expect(container.querySelector('ul')).toHaveClass('grayscale')
  })
})
