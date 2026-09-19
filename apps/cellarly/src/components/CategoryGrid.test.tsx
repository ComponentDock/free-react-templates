import { render, screen } from '@testing-library/react'
import { CategoryGrid } from './CategoryGrid'

describe('CategoryGrid', () => {
  it('renders all six categories', () => {
    render(<CategoryGrid />)
    expect(screen.getByText('Brandy')).toBeInTheDocument()
    expect(screen.getByText('Gin')).toBeInTheDocument()
    expect(screen.getByText('Rum')).toBeInTheDocument()
    expect(screen.getByText('Tequila')).toBeInTheDocument()
    expect(screen.getByText('Vodka')).toBeInTheDocument()
    expect(screen.getByText('Whiskey')).toBeInTheDocument()
  })

  it('renders category images', () => {
    render(<CategoryGrid />)
    expect(screen.getByAltText('Brandy')).toBeInTheDocument()
    expect(screen.getByAltText('Gin')).toBeInTheDocument()
  })
})
