import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section title', () => {
    render(<Team />)
    expect(screen.getByText('Meet Team')).toBeInTheDocument()
  })

  it('renders 8 team members', () => {
    render(<Team />)
    expect(screen.getByText('Kaiara Spencer')).toBeInTheDocument()
    expect(screen.getByText('Dave Simpson')).toBeInTheDocument()
    expect(screen.getByText('Ben Thompson')).toBeInTheDocument()
    expect(screen.getByText('Kyla Stewart')).toBeInTheDocument()
    expect(screen.getByText('Jake Smith')).toBeInTheDocument()
    expect(screen.getByText('Ava Johnson')).toBeInTheDocument()
    expect(screen.getByText('Liam Brown')).toBeInTheDocument()
    expect(screen.getByText('Mia Davis')).toBeInTheDocument()
  })
})
