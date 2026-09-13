import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and all team members', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Our Team' })).toBeInTheDocument()
    for (const name of ['Alex Morgan', 'Sarah Chen', 'James Wilson', 'Emily Brown', 'David Lee']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })

  it('renders team member roles', () => {
    render(<Team />)
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument()
    expect(screen.getByText('Lead Designer')).toBeInTheDocument()
  })

  it('renders social links for each member', () => {
    render(<Team />)
    const socialLinks = screen.getAllByRole('link', {
      name: /on (Facebook|Twitter|Instagram|Dribbble)/i,
    })
    expect(socialLinks.length).toBeGreaterThanOrEqual(20)
  })

  it('renders the View All Staff button', () => {
    render(<Team />)
    expect(screen.getByRole('link', { name: /View All Staff/i })).toBeInTheDocument()
  })

  it('renders team member images', () => {
    render(<Team />)
    const images = screen.getAllByRole('img', { name: /Portrait of/i })
    expect(images).toHaveLength(5)
  })
})
