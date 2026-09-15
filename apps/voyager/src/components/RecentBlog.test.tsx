import { render, screen } from '@testing-library/react'
import { RecentBlog } from './RecentBlog'

describe('RecentBlog', () => {
  it('renders section heading', () => {
    render(<RecentBlog />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders all 3 blog entries', () => {
    render(<RecentBlog />)
    expect(screen.getByText('A Definitive Guide to the Best Dining')).toBeInTheDocument()
    expect(
      screen.getByText('How These 5 People Found The Path to Their Dream Trip'),
    ).toBeInTheDocument()
    expect(screen.getByText('Our Secret Island Boat Tour Is Just for You')).toBeInTheDocument()
  })

  it('displays dates and categories', () => {
    render(<RecentBlog />)
    const dates = screen.getAllByText('Feb 22, 2018')
    expect(dates).toHaveLength(3)
    const categories = screen.getAllByText('Activities')
    expect(categories).toHaveLength(3)
  })

  it('has proper aria label', () => {
    render(<RecentBlog />)
    expect(screen.getByLabelText('Recent blog')).toBeInTheDocument()
  })
})
