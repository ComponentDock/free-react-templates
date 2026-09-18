import { render, screen } from '@testing-library/react'
import { PopularCategories } from './PopularCategories'

describe('PopularCategories', () => {
  it('renders the section heading', () => {
    render(<PopularCategories />)
    expect(screen.getByText('Popular Categories')).toBeInTheDocument()
  })

  it('renders all 6 category cards', () => {
    render(<PopularCategories />)
    expect(screen.getByText('Apartments')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByText('Fitness')).toBeInTheDocument()
    expect(screen.getByText('Department Store')).toBeInTheDocument()
    expect(screen.getByText('Restaurants')).toBeInTheDocument()
    expect(screen.getByText('Other')).toBeInTheDocument()
  })

  it('displays listing counts for each category', () => {
    render(<PopularCategories />)
    expect(screen.getByText('3,921')).toBeInTheDocument()
    expect(screen.getByText('398')).toBeInTheDocument()
    expect(screen.getByText('1,229')).toBeInTheDocument()
    expect(screen.getByText('32,891')).toBeInTheDocument()
    expect(screen.getByText('29,221')).toBeInTheDocument()
    expect(screen.getByText('219')).toBeInTheDocument()
  })

  it('renders category links with href', () => {
    render(<PopularCategories />)
    const links = screen.getAllByRole('link')
    const categoryLinks = links.filter(
      (l) => l.textContent?.includes('Apartments') || l.textContent?.includes('Events'),
    )
    expect(categoryLinks.length).toBeGreaterThanOrEqual(1)
  })
})
