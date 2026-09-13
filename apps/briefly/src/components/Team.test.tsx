import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Meet Our Experienced Team')
  })

  it('renders three team members', () => {
    render(<Team />)
    const names = screen.getAllByText('Ethel Davis')
    expect(names).toHaveLength(3)
  })

  it('renders team member roles', () => {
    render(<Team />)
    const roles = screen.getAllByText('Senior Barrister at Law')
    expect(roles).toHaveLength(3)
  })
})
