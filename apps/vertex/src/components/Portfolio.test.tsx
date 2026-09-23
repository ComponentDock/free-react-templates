import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
  })

  it('renders four portfolio items', () => {
    render(<Portfolio />)
    const items = screen.getAllByText('Smart Watch')
    expect(items).toHaveLength(4)
  })

  it('renders a Load More button', () => {
    render(<Portfolio />)
    expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument()
  })
})
