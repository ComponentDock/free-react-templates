import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Digital Experts Team')
  })

  it('renders all four team members', () => {
    render(<Team />)
    expect(screen.getByText('Adrian Molises')).toBeInTheDocument()
    expect(screen.getByText('Arthur MaGregor')).toBeInTheDocument()
    expect(screen.getByText('Anna Hanzen')).toBeInTheDocument()
    expect(screen.getByText('Brian Wooden')).toBeInTheDocument()
  })

  it('renders team member images', () => {
    render(<Team />)
    expect(screen.getByRole('img', { name: 'Adrian Molises' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Brian Wooden' })).toBeInTheDocument()
  })

  it('renders social links for each member', () => {
    render(<Team />)
    const fbLinks = screen.getAllByRole('link', { name: /facebook/i })
    expect(fbLinks.length).toBe(4)
  })
})
