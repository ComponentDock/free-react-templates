import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /meet our artists/i })).toBeInTheDocument()
  })

  it('renders all 4 team members', () => {
    render(<Team />)
    expect(screen.getByText('Marshal Jcob')).toBeInTheDocument()
    expect(screen.getByText('Aundre Alexa')).toBeInTheDocument()
    expect(screen.getByText('Xavir Flintof')).toBeInTheDocument()
    expect(screen.getByText('Micky Frade')).toBeInTheDocument()
  })

  it('renders roles for each member', () => {
    render(<Team />)
    expect(screen.getByText('Lead Artist')).toBeInTheDocument()
    expect(screen.getByText('Design Specialist')).toBeInTheDocument()
    expect(screen.getByText('Removal Expert')).toBeInTheDocument()
    expect(screen.getByText('Henna Artist')).toBeInTheDocument()
  })

  it('renders social links for each member', () => {
    render(<Team />)
    const fbLinks = screen.getAllByLabelText(/on facebook/i)
    expect(fbLinks).toHaveLength(4)
  })
})
