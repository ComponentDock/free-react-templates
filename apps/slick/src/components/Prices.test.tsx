import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Prices } from './Prices'

describe('Prices', () => {
  it('shows the section heading and the priced rows', () => {
    render(<Prices />)

    expect(screen.getByRole('heading', { name: 'OUR TOP PRICES' })).toBeInTheDocument()

    const names = ['Special Beard Treatment', 'Color your Beard', 'Wax your Beard']
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getByText('$15.00')).toBeInTheDocument()
    expect(screen.getByText('$18.00')).toBeInTheDocument()
    expect(screen.getByText('$12.00')).toBeInTheDocument()
  })
})
