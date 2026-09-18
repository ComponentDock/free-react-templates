import { render, screen } from '@testing-library/react'
import { DealsOfTheWeek } from './DealsOfTheWeek'

describe('DealsOfTheWeek', () => {
  it('renders the section title', () => {
    render(<DealsOfTheWeek />)
    expect(screen.getByText('Deals of the Week')).toBeInTheDocument()
  })

  it('renders deal products', () => {
    render(<DealsOfTheWeek />)
    expect(screen.getByText('Beoplay H7')).toBeInTheDocument()
    expect(screen.getByText('Galaxy S21')).toBeInTheDocument()
  })

  it('renders prices and countdown', () => {
    render(<DealsOfTheWeek />)
    expect(screen.getByText('$300')).toBeInTheDocument()
    expect(screen.getByText('$225')).toBeInTheDocument()
    const hurryUp = screen.getAllByText('Hurry Up')
    expect(hurryUp.length).toBeGreaterThanOrEqual(1)
  })

  it('renders add to cart buttons', () => {
    render(<DealsOfTheWeek />)
    const buttons = screen.getAllByText('Add to Cart')
    expect(buttons).toHaveLength(2)
  })
})
