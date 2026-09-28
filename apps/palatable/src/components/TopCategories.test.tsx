import { render, screen } from '@testing-library/react'
import { TopCategories } from './TopCategories'

describe('TopCategories', () => {
  it('renders both category cards', () => {
    render(<TopCategories />)
    expect(screen.getByText('Strawberry Cake')).toBeInTheDocument()
    expect(screen.getByText('Chinesse Noodles')).toBeInTheDocument()
  })

  it('renders See Full Recipe buttons', () => {
    render(<TopCategories />)
    const buttons = screen.getAllByText('See Full Recipe')
    expect(buttons).toHaveLength(2)
  })

  it('renders category images', () => {
    render(<TopCategories />)
    expect(screen.getByAltText('Strawberry Cake')).toBeInTheDocument()
    expect(screen.getByAltText('Chinesse Noodles')).toBeInTheDocument()
  })
})
