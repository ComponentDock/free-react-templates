import { render, screen } from '@testing-library/react'
import { WorshipTime } from './WorshipTime'

describe('WorshipTime', () => {
  it('renders the heading', () => {
    render(<WorshipTime />)
    expect(screen.getByRole('heading', { name: 'Worship Time' })).toBeInTheDocument()
  })

  it('renders morning worship', () => {
    render(<WorshipTime />)
    expect(screen.getByText('Morning Worship')).toBeInTheDocument()
    expect(screen.getByText('5:30AM - 6:00AM')).toBeInTheDocument()
  })

  it('renders afternoon worship', () => {
    render(<WorshipTime />)
    expect(screen.getByText('Afternoon Worship')).toBeInTheDocument()
    expect(screen.getByText('1:30PM - 2:00PM')).toBeInTheDocument()
  })

  it('renders evening worship', () => {
    render(<WorshipTime />)
    expect(screen.getByText('Evening Worship')).toBeInTheDocument()
    expect(screen.getByText('7:30PM - 8:00PM')).toBeInTheDocument()
  })

  it('renders all three schedule items', () => {
    render(<WorshipTime />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(3)
  })
})
