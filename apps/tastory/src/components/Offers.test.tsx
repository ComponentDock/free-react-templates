import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Offers } from './Offers'

describe('Offers', () => {
  it('renders section header', () => {
    render(<Offers />)
    expect(screen.getByText('Our Offers')).toBeInTheDocument()
    expect(screen.getByText('Our Offer This Summer')).toBeInTheDocument()
  })

  it('renders all offer cards', () => {
    render(<Offers />)
    expect(screen.getByText('Tasty Burgers')).toBeInTheDocument()
    expect(screen.getByText('Pizza Pasta')).toBeInTheDocument()
    expect(screen.getByText('Sushi Rolls')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<Offers />)
    expect(screen.getByText('$49.95')).toBeInTheDocument()
    expect(screen.getByText('$39.95')).toBeInTheDocument()
    expect(screen.getByText('$55.95')).toBeInTheDocument()
  })
})
