import { render, screen } from '@testing-library/react'
import { RecommendedHotels } from './RecommendedHotels'

describe('RecommendedHotels', () => {
  it('renders section heading', () => {
    render(<RecommendedHotels />)
    expect(screen.getByText('Recommended Hotels')).toBeInTheDocument()
  })

  it('renders all 4 hotel cards', () => {
    render(<RecommendedHotels />)
    expect(screen.getByText('Hotel Edison')).toBeInTheDocument()
    expect(screen.getByText('Grand Pacific')).toBeInTheDocument()
    expect(screen.getByText('Hotel Zephyr')).toBeInTheDocument()
    expect(screen.getByText('Da Vinci Villa')).toBeInTheDocument()
  })

  it('displays hotel locations', () => {
    render(<RecommendedHotels />)
    expect(screen.getByText('New York, USA')).toBeInTheDocument()
    expect(screen.getByText('Sydney, Australia')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<RecommendedHotels />)
    expect(screen.getByText('$120')).toBeInTheDocument()
    expect(screen.getByText('$180')).toBeInTheDocument()
  })

  it('has proper aria label', () => {
    render(<RecommendedHotels />)
    expect(screen.getByLabelText('Recommended hotels')).toBeInTheDocument()
  })
})
