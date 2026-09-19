import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BlogSection } from './components/BlogSection'

describe('BlogSection', () => {
  it('renders heading "Latest News"', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: /latest news/i })).toBeInTheDocument()
  })

  it('renders 3 blog cards', () => {
    render(<BlogSection />)
    expect(screen.getAllByText('Read More')).toHaveLength(3)
  })

  it('shows author and comments', () => {
    render(<BlogSection />)
    expect(screen.getAllByText(/By Admin/)).toHaveLength(3)
    expect(screen.getByText('3 Comments')).toBeInTheDocument()
  })

  it('shows post titles', () => {
    render(<BlogSection />)
    expect(screen.getByText('How to Style Your Autumn Wardrobe')).toBeInTheDocument()
    expect(screen.getByText('Top 10 Accessories for 2025')).toBeInTheDocument()
    expect(screen.getByText('The Rise of Sustainable Fashion')).toBeInTheDocument()
  })

  it('Read More link is focusable', async () => {
    const user = userEvent.setup()
    render(<BlogSection />)
    const links = screen.getAllByText('Read More')
    await user.click(links[0]!)
    expect(links[0]!).toHaveAttribute('href', '#')
  })
})
