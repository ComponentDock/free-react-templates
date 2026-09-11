import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Expert Team' })).toBeInTheDocument()
  })

  it('renders 3 team members', () => {
    render(<Team />)
    expect(screen.getByText('Milani Mou')).toBeInTheDocument()
    expect(screen.getByText('Jasmine Pinky')).toBeInTheDocument()
    expect(screen.getByText('Piya Zosoldos')).toBeInTheDocument()
  })

  it('renders roles for each member', () => {
    render(<Team />)
    expect(screen.getByText('Lead Consultant')).toBeInTheDocument()
    expect(screen.getByText('Strategy Director')).toBeInTheDocument()
    expect(screen.getByText('Business Analyst')).toBeInTheDocument()
  })

  it('renders social links for each member', () => {
    render(<Team />)
    const facebookLinks = screen.getAllByLabelText('Facebook')
    const twitterLinks = screen.getAllByLabelText('Twitter')
    const instagramLinks = screen.getAllByLabelText('Instagram')
    expect(facebookLinks).toHaveLength(3)
    expect(twitterLinks).toHaveLength(3)
    expect(instagramLinks).toHaveLength(3)
  })

  it('renders team member images', () => {
    render(<Team />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
