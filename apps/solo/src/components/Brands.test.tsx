import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Brands } from './Brands'
import { brands } from '../data'

describe('Brands', () => {
  it('renders the six client logo placeholders on the gradient band', () => {
    render(<Brands />)
    for (const brand of brands) {
      expect(screen.getByText(brand)).toBeInTheDocument()
    }
    expect(screen.getByLabelText('Brands')).toBeInTheDocument()
  })
})
