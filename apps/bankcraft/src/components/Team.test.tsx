import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders section heading', () => {
    render(<Team />)
    expect(screen.getByText('Meet Team')).toBeInTheDocument()
  })

  it('renders 8 team member cards', () => {
    render(<Team />)
    const names = [
      'James Wilson',
      'Sarah Johnson',
      'Michael Chen',
      'Emily Davis',
      'Robert Brown',
      'Lisa Anderson',
      'David Martinez',
      'Jennifer Taylor',
    ]
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders role for each member', () => {
    render(<Team />)
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument()
    expect(screen.getByText('CFO')).toBeInTheDocument()
    expect(screen.getByText('Head of Operations')).toBeInTheDocument()
  })
})
