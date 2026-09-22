import { render, screen } from '@testing-library/react'
import { DiningBar } from './DiningBar'

describe('DiningBar', () => {
  it('displays the heading', () => {
    render(<DiningBar />)
    expect(screen.getByText('Fine Dining Experience')).toBeInTheDocument()
  })

  it('displays the description', () => {
    render(<DiningBar />)
    expect(screen.getByText(/culinary excellence/)).toBeInTheDocument()
  })

  it('displays the view menu link', () => {
    render(<DiningBar />)
    expect(screen.getByText('View Menu')).toBeInTheDocument()
  })

  it('has correct link', () => {
    render(<DiningBar />)
    expect(screen.getByText('View Menu')).toHaveAttribute('href', '#')
  })
})
