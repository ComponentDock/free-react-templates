import { render, screen } from '@testing-library/react'
import { Tours } from './Tours'

describe('Tours', () => {
  it('renders the section heading', () => {
    render(<Tours />)
    expect(screen.getByText(/We offer worldwide tour plan recently/)).toBeInTheDocument()
  })

  it('renders all 4 tour cards', () => {
    render(<Tours />)
    expect(screen.getByText('Paris Tour')).toBeInTheDocument()
    expect(screen.getByText('Bali Escape')).toBeInTheDocument()
    expect(screen.getByText('Tokyo Adventure')).toBeInTheDocument()
    expect(screen.getByText('Santorini Retreat')).toBeInTheDocument()
  })

  it('renders tour prices', () => {
    render(<Tours />)
    expect(screen.getByText('$65/day')).toBeInTheDocument()
    expect(screen.getByText('$85/day')).toBeInTheDocument()
    expect(screen.getByText('$95/day')).toBeInTheDocument()
    expect(screen.getByText('$110/day')).toBeInTheDocument()
  })

  it('renders tour durations', () => {
    render(<Tours />)
    expect(screen.getByText('5 days offer')).toBeInTheDocument()
    expect(screen.getByText('7 days offer')).toBeInTheDocument()
  })
})
