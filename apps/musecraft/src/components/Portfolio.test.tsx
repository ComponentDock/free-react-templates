import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders section title and portfolio items', () => {
    render(<Portfolio />)
    expect(screen.getByText('Portfolio', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getAllByText('PSD MOCKUP')).toHaveLength(4)
    expect(screen.getAllByText('Smart Watch')).toHaveLength(4)
  })

  it('shows Load More button', () => {
    render(<Portfolio />)
    expect(screen.getByText('Load More')).toBeInTheDocument()
  })

  it('shows section number 02', () => {
    render(<Portfolio />)
    expect(screen.getByText('02')).toBeInTheDocument()
  })
})
