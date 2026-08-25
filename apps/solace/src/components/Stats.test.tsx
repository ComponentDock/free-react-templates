import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all 4 stat items', () => {
    render(<Stats />)
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('2,000+')).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
    expect(screen.getByText('15+')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Total Rooms')).toBeInTheDocument()
    expect(screen.getByText('Happy Guests')).toBeInTheDocument()
    expect(screen.getByText('Average Rating')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })
})
