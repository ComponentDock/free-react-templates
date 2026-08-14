import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Team } from './Team'
import { team } from '../data'

describe('Team', () => {
  it('renders the section title and lead paragraph', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Our Dedicated Professionals' })).toBeInTheDocument()
    expect(screen.getByText(team.lead)).toBeInTheDocument()
  })

  it('renders eight member cards with photo, name and role', () => {
    render(<Team />)
    const names = screen.getAllByRole('heading', { level: 3 })
    expect(names).toHaveLength(8)
    expect(screen.getAllByRole('img')).toHaveLength(8)

    for (const member of team.members) {
      expect(screen.getByText(member.role)).toBeInTheDocument()
    }
  })

  it('renders a hover social bar with four brand links on every card', () => {
    render(<Team />)
    const bars = screen.getAllByTestId('team-socials')
    expect(bars).toHaveLength(8)

    for (const bar of bars) {
      const links = within(bar).getAllByRole('link')
      expect(links).toHaveLength(4)
      expect(links.map((link) => link.getAttribute('aria-label'))).toEqual([
        'Facebook',
        'Twitter',
        'Instagram',
        'LinkedIn',
      ])
    }
  })
})
