import { render, screen } from '@testing-library/react'
import { SearchFilter } from './SearchFilter'
import { describe, expect, it } from 'vitest'
describe('SearchFilter', () => {
  it('renders all filter dropdowns', () => {
    render(<SearchFilter />)
    expect(screen.getByText('Lot Area')).toBeInTheDocument()
    expect(screen.getByText('Bedrooms')).toBeInTheDocument()
    expect(screen.getByText('Bathrooms')).toBeInTheDocument()
    expect(screen.getByText('Price Range')).toBeInTheDocument()
  })
})
