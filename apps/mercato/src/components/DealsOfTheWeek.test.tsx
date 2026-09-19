import { render, screen } from '@testing-library/react'
import { DealsOfTheWeek } from './DealsOfTheWeek'

describe('DealsOfTheWeek', () => {
  it('renders the heading', () => {
    render(<DealsOfTheWeek />)
    expect(screen.getByText('Deals of the Week')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<DealsOfTheWeek />)
    expect(screen.getByText(/Don't miss our best weekly offers/)).toBeInTheDocument()
  })

  it('renders deal items with titles', () => {
    render(<DealsOfTheWeek />)
    expect(screen.getByText('Black Lace Heels')).toBeInTheDocument()
    expect(screen.getByText('Running Sneakers')).toBeInTheDocument()
    expect(screen.getByText('Sport Boots')).toBeInTheDocument()
  })

  it('renders deal prices', () => {
    render(<DealsOfTheWeek />)
    expect(screen.getByText('$189.00')).toBeInTheDocument()
    expect(screen.getAllByText('$210.00').length).toBeGreaterThanOrEqual(1)
  })

  it('renders product thumbnail images', () => {
    render(<DealsOfTheWeek />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(9)
  })

  it('renders the promo image', () => {
    render(<DealsOfTheWeek />)
    expect(screen.getByAltText('Promotional offer')).toBeInTheDocument()
  })

  it('renders 9 deal items', () => {
    render(<DealsOfTheWeek />)
    const titles = [
      'Black Lace Heels',
      'Running Sneakers',
      'Sport Boots',
      'Urban Walkers',
      'Training Shoes',
      'Comfort Slides',
      'Trail Runners',
      'Flex Sneakers',
      'Classic Loafers',
    ]
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })
})
