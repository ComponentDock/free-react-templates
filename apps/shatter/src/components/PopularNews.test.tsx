import { render, screen } from '@testing-library/react'
import { PopularNews } from './PopularNews'

describe('PopularNews', () => {
  it('renders the section heading', () => {
    render(<PopularNews />)
    expect(screen.getByText('Popular News Feed')).toBeInTheDocument()
  })

  it('renders 4 popular news cards', () => {
    render(<PopularNews />)
    expect(screen.getByText('Top 10 Destinations for Winter Travel')).toBeInTheDocument()
    expect(screen.getByText("Sustainable Dining: A Chef's Perspective")).toBeInTheDocument()
    expect(screen.getByText('Championship Season Preview: Key Matchups')).toBeInTheDocument()
    expect(screen.getByText('The Changing Landscape of Remote Work')).toBeInTheDocument()
  })

  it('has correct aria-labelledby', () => {
    render(<PopularNews />)
    const section = screen.getByLabelText('Popular News Feed')
    expect(section).toHaveAttribute('aria-labelledby', 'popular-heading')
  })
})
