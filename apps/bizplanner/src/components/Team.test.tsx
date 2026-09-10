import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section with correct id', () => {
    render(<Team />)
    expect(document.querySelector('#team-section')).toBeInTheDocument()
  })

  it('renders the section title', () => {
    render(<Team />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Our Creative Team/i)
  })

  it('has dark background', () => {
    render(<Team />)
    expect(document.querySelector('#team-section')).toHaveClass('bg-charcoal')
  })

  it('renders all 4 team member names', () => {
    render(<Team />)
    const names = ['John Smith', 'Sarah Johnson', 'Mike Wilson', 'Emily Davis']
    for (const name of names) {
      // Each name appears twice: once in overlay (hover), once below card
      const elements = screen.getAllByText(name)
      expect(elements.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders all 4 team member roles', () => {
    render(<Team />)
    const roles = ['CEO', 'Creative Director', 'Lead Developer', 'Marketing Head']
    for (const role of roles) {
      const elements = screen.getAllByText(role)
      expect(elements.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders team member photos with correct seeds', () => {
    render(<Team />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('bizplanner-team-1'))
    expect(images[1]).toHaveAttribute('src', expect.stringContaining('bizplanner-team-2'))
    expect(images[2]).toHaveAttribute('src', expect.stringContaining('bizplanner-team-3'))
    expect(images[3]).toHaveAttribute('src', expect.stringContaining('bizplanner-team-4'))
  })

  it('each team member has social links with correct aria-labels', () => {
    render(<Team />)
    const members = [
      { name: 'John Smith', platforms: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'] },
      { name: 'Sarah Johnson', platforms: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'] },
      { name: 'Mike Wilson', platforms: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'] },
      { name: 'Emily Davis', platforms: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'] },
    ]

    for (const member of members) {
      for (const platform of member.platforms) {
        const link = screen.getAllByLabelText(`${member.name} on ${platform}`)
        expect(link.length).toBeGreaterThanOrEqual(1)
      }
    }
  })

  it('social links have correct href attributes', () => {
    render(<Team />)
    const socialLinks = screen.getAllByLabelText(/on Facebook/)
    for (const link of socialLinks) {
      expect(link).toHaveAttribute('href', '#')
    }
  })

  it('accepts custom className', () => {
    render(<Team className="custom-team" />)
    expect(document.querySelector('#team-section')).toHaveClass('custom-team')
  })
})
