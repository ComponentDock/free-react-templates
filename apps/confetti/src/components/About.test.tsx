import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText('The Biggest Digital Conference.')).toBeInTheDocument()
  })

  it('renders Where and When info', () => {
    render(<About />)
    expect(screen.getByText('Where')).toBeInTheDocument()
    expect(screen.getByText('New York, United States')).toBeInTheDocument()
    expect(screen.getByText('When')).toBeInTheDocument()
    expect(screen.getByText('Jan. 21, 2025')).toBeInTheDocument()
  })

  it('renders Get Your Ticket button', () => {
    render(<About />)
    expect(screen.getByText('Get Your Ticket')).toBeInTheDocument()
  })
})
