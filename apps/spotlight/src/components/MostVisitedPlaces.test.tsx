import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MostVisitedPlaces } from './MostVisitedPlaces'

describe('MostVisitedPlaces', () => {
  it('renders the section heading', () => {
    render(<MostVisitedPlaces />)
    expect(screen.getByText('Most Visited Places')).toBeInTheDocument()
  })

  it('renders 3 listing cards', () => {
    render(<MostVisitedPlaces />)
    expect(screen.getByText('Westside Market')).toBeInTheDocument()
    expect(screen.getByText('Blue Harbor Bistro')).toBeInTheDocument()
    expect(screen.getByText('Sunset Music Fest')).toBeInTheDocument()
  })

  it('displays category badges for each listing', () => {
    render(<MostVisitedPlaces />)
    expect(screen.getByText('Stores')).toBeInTheDocument()
    expect(screen.getByText('Restaurants')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
  })

  it('displays addresses for each listing', () => {
    render(<MostVisitedPlaces />)
    expect(screen.getByText('West Orange, New York')).toBeInTheDocument()
    expect(screen.getByText('Brooklyn, New York')).toBeInTheDocument()
    expect(screen.getByText('Manhattan, New York')).toBeInTheDocument()
  })

  it('has bookmark buttons with accessible labels', () => {
    render(<MostVisitedPlaces />)
    expect(screen.getByRole('button', { name: 'Bookmark Westside Market' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Bookmark Blue Harbor Bistro' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Bookmark Sunset Music Fest' })).toBeInTheDocument()
  })

  it('renders listing images with alt text', () => {
    render(<MostVisitedPlaces />)
    expect(screen.getByAltText('Westside Market')).toBeInTheDocument()
    expect(screen.getByAltText('Blue Harbor Bistro')).toBeInTheDocument()
    expect(screen.getByAltText('Sunset Music Fest')).toBeInTheDocument()
  })

  it('allows clicking bookmark buttons', async () => {
    const user = userEvent.setup()
    render(<MostVisitedPlaces />)
    const bookmark = screen.getByRole('button', { name: 'Bookmark Westside Market' })
    await user.click(bookmark)
    // No error thrown
  })
})
