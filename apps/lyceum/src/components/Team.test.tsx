import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Team } from './Team'
import { teamHeading, teamLabel, teamMembers, teamParagraph, teamSocials } from '../data'

describe('Team', () => {
  it('renders the section title and four member cards', () => {
    const { container } = render(<Team />)

    expect(screen.getByRole('region', { name: teamLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: teamHeading })).toBeInTheDocument()
    expect(screen.getByText(teamParagraph)).toBeInTheDocument()

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(teamMembers.length)
    for (const member of teamMembers) {
      expect(screen.getByRole('heading', { level: 3, name: member.name })).toBeInTheDocument()
      expect(screen.getByText(member.role)).toBeInTheDocument()
      expect(images[teamMembers.indexOf(member)]).toHaveAttribute('alt', member.name)
    }
  })

  it('reveals a circular overlay with three social icons on hover', () => {
    const { container } = render(<Team />)

    const overlay = container.querySelector('.bg-white\\/65') as HTMLElement
    expect(overlay).not.toBeNull()
    expect(overlay.getAttribute('class')).toContain('group-hover:opacity-100')
    expect(overlay.getAttribute('class')).toContain('rounded-full')
    expect(overlay.querySelectorAll('a')).toHaveLength(teamSocials.length)
  })
})
