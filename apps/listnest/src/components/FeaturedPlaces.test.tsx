import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeaturedPlaces } from './FeaturedPlaces'

describe('FeaturedPlaces', () => {
  it('renders the heading', () => {
    render(<FeaturedPlaces />)
    expect(screen.getByText('Featured Places')).toBeInTheDocument()
  })

  it('renders all place cards', () => {
    render(<FeaturedPlaces />)
    expect(screen.getByText('Burger & Lobster')).toBeInTheDocument()
    expect(screen.getByText("Joe's Shanghai")).toBeInTheDocument()
    expect(screen.getByText('Tasty Hand-Pulled Noodles')).toBeInTheDocument()
  })

  it('renders ratings', () => {
    render(<FeaturedPlaces />)
    expect(screen.getByText('6.5')).toBeInTheDocument()
    expect(screen.getByText('9.5')).toBeInTheDocument()
    expect(screen.getByText('3.2')).toBeInTheDocument()
  })

  it('renders open/closed status', () => {
    render(<FeaturedPlaces />)
    expect(screen.getAllByText('CLOSED NOW').length).toBe(2)
    expect(screen.getByText('OPEN NOW')).toBeInTheDocument()
  })

  it('renders addresses', () => {
    render(<FeaturedPlaces />)
    expect(screen.getAllByText('1301 Avenue, Brooklyn, NY 11230').length).toBe(3)
  })

  it('renders favorite and bookmark buttons', async () => {
    const user = userEvent.setup()
    render(<FeaturedPlaces />)
    const favButtons = screen.getAllByLabelText('Favorite')
    expect(favButtons.length).toBe(3)
    await user.click(favButtons[0]!)
  })

  it('renders bookmark buttons', async () => {
    const user = userEvent.setup()
    render(<FeaturedPlaces />)
    const bookmarkButtons = screen.getAllByLabelText('Bookmark')
    expect(bookmarkButtons.length).toBe(3)
    await user.click(bookmarkButtons[0]!)
  })

  it('applies custom className', () => {
    const { container } = render(<FeaturedPlaces className="custom-featured" />)
    expect(container.firstChild).toHaveClass('custom-featured')
  })
})
