import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByText(/Our/)).toBeInTheDocument()
    expect(screen.getByText(/Team/)).toBeInTheDocument()
  })

  it('renders three team members', () => {
    render(<Team />)
    expect(screen.getByText('Dr. Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Dr. James Parker')).toBeInTheDocument()
    expect(screen.getByText('Dr. Emily Chen')).toBeInTheDocument()
  })

  it('each member has a specialty', () => {
    render(<Team />)
    expect(screen.getByText('Dental Surgery')).toBeInTheDocument()
    expect(screen.getByText('Orthodontics')).toBeInTheDocument()
    expect(screen.getByText('Periodontics')).toBeInTheDocument()
  })

  it('each member has social links', () => {
    render(<Team />)
    const facebookLinks = screen.getAllByLabelText('Facebook')
    expect(facebookLinks).toHaveLength(3)
    const twitterLinks = screen.getAllByLabelText('Twitter')
    expect(twitterLinks).toHaveLength(3)
  })

  it('each member has a bio', () => {
    render(<Team />)
    expect(screen.getByText(/over 15 years of experience/)).toBeInTheDocument()
    expect(screen.getByText(/modern orthodontic solutions/)).toBeInTheDocument()
    expect(screen.getByText(/gum health and preventative care/)).toBeInTheDocument()
  })

  it('each member has a profile image', () => {
    render(<Team />)
    expect(screen.getByAltText('Dr. Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByAltText('Dr. James Parker')).toBeInTheDocument()
    expect(screen.getByAltText('Dr. Emily Chen')).toBeInTheDocument()
  })
})
