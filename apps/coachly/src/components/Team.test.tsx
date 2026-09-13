import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders all 4 team members', () => {
    render(<Team />)
    expect(screen.getByText('Meet Our Team')).toBeInTheDocument()
    expect(screen.getByText('Kaiara Spencer')).toBeInTheDocument()
    expect(screen.getByText('Dave Simpson')).toBeInTheDocument()
    expect(screen.getByText('Ben Thompson')).toBeInTheDocument()
    expect(screen.getByText('Kyla Stewart')).toBeInTheDocument()
  })
})
