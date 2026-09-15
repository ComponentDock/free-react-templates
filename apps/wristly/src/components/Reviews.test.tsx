import { render, screen } from '@testing-library/react'
import { Reviews } from './Reviews'

describe('Reviews', () => {
  it('renders the reviews heading', () => {
    render(<Reviews />)
    expect(screen.getByText('Some Features That Made Us Unique')).toBeInTheDocument()
  })

  it('renders all 3 reviewer names', () => {
    render(<Reviews />)
    expect(screen.getByText('Cody Hines')).toBeInTheDocument()
    expect(screen.getByText('Chad Herrera')).toBeInTheDocument()
    expect(screen.getByText('Andre Gonzalez')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<Reviews />)
    const ratings = screen.getAllByLabelText(/out of 5 stars/)
    expect(ratings).toHaveLength(3)
  })
})
