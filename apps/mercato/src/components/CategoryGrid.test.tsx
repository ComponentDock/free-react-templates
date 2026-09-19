import { render, screen } from '@testing-library/react'
import { CategoryGrid } from './CategoryGrid'

describe('CategoryGrid', () => {
  it('renders category images', () => {
    render(<CategoryGrid />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(5)
  })

  it('renders category titles on hover elements', () => {
    render(<CategoryGrid />)
    expect(screen.getAllByText('Sneaker for Sports').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Running Gear')).toBeInTheDocument()
    expect(screen.getByText('Casual Wear')).toBeInTheDocument()
  })

  it('renders the grid container', () => {
    const { container } = render(<CategoryGrid />)
    expect(container.querySelector('section')).toBeInTheDocument()
  })
})
