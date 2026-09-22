import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section title', () => {
    render(<Team />)
    expect(screen.getByText(/meet our expert trainers/i)).toBeInTheDocument()
  })

  it('renders the subtitle label', () => {
    render(<Team />)
    expect(screen.getByText(/our trainers/i)).toBeInTheDocument()
  })

  it('renders all 3 trainer names', () => {
    render(<Team />)
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
    expect(screen.getByText('Jordan Blake')).toBeInTheDocument()
    expect(screen.getByText('Casey Rivera')).toBeInTheDocument()
  })

  it('renders trainer roles', () => {
    render(<Team />)
    expect(screen.getByText('Head Trainer')).toBeInTheDocument()
    expect(screen.getByText('Strength Coach')).toBeInTheDocument()
    expect(screen.getByText('Fitness Director')).toBeInTheDocument()
  })

  it('renders trainer images', () => {
    render(<Team />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })

  it('renders View All Trainers button', () => {
    render(<Team />)
    expect(screen.getByText('View All Trainers')).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Team />)
    const facebookLinks = screen.getAllByLabelText('Facebook')
    expect(facebookLinks.length).toBeGreaterThanOrEqual(1)
    const twitterLinks = screen.getAllByLabelText('Twitter')
    expect(twitterLinks.length).toBeGreaterThanOrEqual(1)
  })
})
