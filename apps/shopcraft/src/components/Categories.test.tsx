import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders heading and subtitle', () => {
    render(<Categories />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Shop for Different Categories',
    )
    expect(
      screen.getByText('Who are in extremely love with eco friendly system.'),
    ).toBeInTheDocument()
  })

  it('renders all category cards', () => {
    render(<Categories />)
    expect(screen.getByAltText('Product for Women')).toBeInTheDocument()
    expect(screen.getByAltText('Product for Couple')).toBeInTheDocument()
    expect(screen.getByAltText('Product For Men')).toBeInTheDocument()
  })
})
