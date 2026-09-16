import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TeamMembers } from './TeamMembers'

describe('TeamMembers', () => {
  it('renders the heading', () => {
    render(<TeamMembers />)
    expect(screen.getByRole('heading', { name: /meet our experts/i })).toBeInTheDocument()
  })

  it('renders all 4 team members', () => {
    render(<TeamMembers />)
    expect(screen.getByText('Adam Johnson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('renders roles for each team member', () => {
    render(<TeamMembers />)
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument()
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
    expect(screen.getByText('Lead Architect')).toBeInTheDocument()
    expect(screen.getByText('Interior Designer')).toBeInTheDocument()
  })

  it('renders avatar images for each member', () => {
    render(<TeamMembers />)
    const adamImg = screen.getByRole('img', { name: 'Adam Johnson' })
    expect(adamImg).toHaveAttribute('src', 'https://picsum.photos/seed/nectar-team-1/300/300')
  })

  it('renders social links for each member', () => {
    render(<TeamMembers />)
    const socialLinks = screen.getAllByRole('link', {
      name: /on (twitter|facebook|instagram|linkedin)/i,
    })
    // 4 members × 4 social links = 16
    expect(socialLinks).toHaveLength(16)
  })

  it('renders social link with correct label pattern', () => {
    render(<TeamMembers />)
    expect(screen.getByRole('link', { name: 'Adam Johnson on twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Adam Johnson on facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Adam Johnson on instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Adam Johnson on linkedin' })).toBeInTheDocument()
  })

  it('renders social links with correct hrefs', () => {
    render(<TeamMembers />)
    const twitterLink = screen.getByRole('link', { name: 'Adam Johnson on twitter' })
    expect(twitterLink).toHaveAttribute('href', '#twitter')
  })

  it('renders first letter of social network name', () => {
    render(<TeamMembers />)
    expect(screen.getAllByText('T').length).toBeGreaterThanOrEqual(4) // twitter × 4 members
    expect(screen.getAllByText('F').length).toBeGreaterThanOrEqual(4) // facebook
    expect(screen.getAllByText('I').length).toBeGreaterThanOrEqual(4) // instagram
    expect(screen.getAllByText('L').length).toBeGreaterThanOrEqual(4) // linkedin
  })

  it('renders the decorative brand divider', () => {
    const { container } = render(<TeamMembers />)
    const dividers = container.querySelectorAll('[aria-hidden="true"]')
    expect(dividers.length).toBeGreaterThanOrEqual(1)
  })
})
