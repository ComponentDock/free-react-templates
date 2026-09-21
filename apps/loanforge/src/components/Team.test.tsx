import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders team section heading', () => {
    render(<Team />)

    expect(screen.getByText(/Our Loan Section Team Members/i)).toBeInTheDocument()
    expect(screen.getByText(/Take a look to our professional/i)).toBeInTheDocument()
  })

  it('renders all four team members', () => {
    render(<Team />)

    expect(screen.getByText('Bruce Roberts')).toBeInTheDocument()
    expect(screen.getByText('Volunteer Leader')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('David Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Parker')).toBeInTheDocument()
  })

  it('has team member images', () => {
    render(<Team />)

    expect(screen.getByAltText('Bruce Roberts')).toBeInTheDocument()
    expect(screen.getByAltText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByAltText('David Chen')).toBeInTheDocument()
    expect(screen.getByAltText('Emily Parker')).toBeInTheDocument()
  })

  it('has social link icons for team members', () => {
    render(<Team />)

    const facebookLinks = screen.getAllByLabelText('Facebook')
    expect(facebookLinks.length).toBe(4)

    const twitterLinks = screen.getAllByLabelText('Twitter')
    expect(twitterLinks.length).toBe(4)

    const websiteLinks = screen.getAllByLabelText('Website')
    expect(websiteLinks.length).toBe(4)
  })
})
