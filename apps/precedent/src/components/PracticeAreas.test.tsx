import { render, screen } from '@testing-library/react'
import { PracticeAreas } from './PracticeAreas'

describe('PracticeAreas', () => {
  it('renders the section heading', () => {
    render(<PracticeAreas />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Practice Areas')
  })

  it('renders all six practice areas', () => {
    render(<PracticeAreas />)
    expect(screen.getByText('Business Law')).toBeInTheDocument()
    expect(screen.getByText('Family Law')).toBeInTheDocument()
    expect(screen.getByText('Criminal Law')).toBeInTheDocument()
    expect(screen.getByText('Real Estate Law')).toBeInTheDocument()
    expect(screen.getByText('Personal Injury')).toBeInTheDocument()
    expect(screen.getByText('Judicial Law')).toBeInTheDocument()
  })

  it('renders descriptions for each area', () => {
    render(<PracticeAreas />)
    expect(screen.getByText(/Comprehensive legal solutions/)).toBeInTheDocument()
    expect(screen.getByText(/Compassionate guidance/)).toBeInTheDocument()
    expect(screen.getByText(/Aggressive defense strategies/)).toBeInTheDocument()
  })

  it('has aria-labelledby on section', () => {
    render(<PracticeAreas />)
    expect(screen.getByRole('region', { name: /practice/i })).toBeInTheDocument()
  })

  it('renders six cards', () => {
    const { container } = render(<PracticeAreas />)
    const cards = container.querySelectorAll('section > div > div > div')
    expect(cards).toHaveLength(6)
  })
})
