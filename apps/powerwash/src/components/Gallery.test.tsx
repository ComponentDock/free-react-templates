import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders all 8 gallery items', () => {
    render(<Gallery />)
    const titles = [
      'Residential Roof',
      'Stone Driveway',
      'Commercial Gutters',
      'Backyard Patio',
      'Office Complex',
      'Hallway',
      'Garden Area',
      'Office Entrance',
    ]
    titles.forEach((t) => {
      expect(screen.getByText(t)).toBeInTheDocument()
    })
  })
})
