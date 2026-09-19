import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ExtraPromos } from './ExtraPromos'

describe('ExtraPromos', () => {
  it('renders the first promo with 30% off', () => {
    render(<ExtraPromos />)
    expect(screen.getByText('30%')).toBeInTheDocument()
    expect(screen.getByText('On all shoes')).toBeInTheDocument()
  })

  it('renders the Mix & Match promo', () => {
    render(<ExtraPromos />)
    expect(screen.getByText('Mix')).toBeInTheDocument()
    expect(screen.getByText('Match')).toBeInTheDocument()
  })

  it('renders check out buttons', () => {
    render(<ExtraPromos />)
    const buttons = screen.getAllByText('Check Out')
    expect(buttons).toHaveLength(2)
  })
})
