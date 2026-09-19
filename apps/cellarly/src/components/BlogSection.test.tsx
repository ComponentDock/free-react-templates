import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders section heading', () => {
    render(<BlogSection />)
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders all four blog entries', () => {
    render(<BlogSection />)
    expect(screen.getByText(/Winemaker's Restaurant/)).toBeInTheDocument()
    expect(screen.getByText(/Choose the Perfect Whiskey/)).toBeInTheDocument()
    expect(screen.getByText(/Summer Cocktail Recipes/)).toBeInTheDocument()
    expect(screen.getByText(/Distiller's Journey/)).toBeInTheDocument()
  })

  it('renders dates', () => {
    render(<BlogSection />)
    expect(screen.getByText('23 April 2020')).toBeInTheDocument()
    expect(screen.getByText('18 April 2020')).toBeInTheDocument()
    expect(screen.getByText('10 April 2020')).toBeInTheDocument()
    expect(screen.getByText('02 April 2020')).toBeInTheDocument()
  })

  it('renders Continue links', () => {
    render(<BlogSection />)
    const continueLinks = screen.getAllByText('Continue')
    expect(continueLinks.length).toBe(4)
  })

  it('renders blog images', () => {
    render(<BlogSection />)
    expect(screen.getByAltText(/Winemaker's Restaurant/)).toBeInTheDocument()
  })
})
