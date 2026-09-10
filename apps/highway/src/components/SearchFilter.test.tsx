import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SearchFilter } from './SearchFilter'

describe('SearchFilter', () => {
  it('renders all filter selects', () => {
    render(<SearchFilter />)
    expect(screen.getByLabelText('Car type')).toBeInTheDocument()
    expect(screen.getByLabelText('Condition')).toBeInTheDocument()
    expect(screen.getByLabelText('Car model')).toBeInTheDocument()
    expect(screen.getByLabelText('Price limit')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<SearchFilter />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('has select options', () => {
    render(<SearchFilter />)
    const carType = screen.getByLabelText('Car type')
    expect(carType).toHaveTextContent('All Types')
    expect(carType).toHaveTextContent('SUV')
  })
})
