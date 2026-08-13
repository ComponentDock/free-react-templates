import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Team } from './Team'
import { team } from '../data'
import { teamSocial } from './social-icons'

describe('Team', () => {
  it('renders the title and three doctor cards', () => {
    render(<Team />)
    expect(screen.getByText(team.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: team.title })).toBeInTheDocument()
    for (const member of team.members) {
      expect(screen.getByRole('heading', { name: member.name })).toBeInTheDocument()
      expect(screen.getByText(member.role)).toBeInTheDocument()
      expect(screen.getByAltText(member.alt)).toBeInTheDocument()
    }
  })

  it('renders four circular social icon links per card', () => {
    render(<Team />)
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    for (const card of cards) {
      for (const { label } of teamSocial) {
        const link = card.querySelector(`a[aria-label="${label}"]`) as HTMLElement
        expect(link).not.toBeNull()
        expect(link).toHaveClass('rounded-full')
      }
    }
  })

  it('turns the caption blue with white text on hover', () => {
    const { container } = render(<Team />)
    const card = container.querySelector('.group') as HTMLElement
    const caption = card.querySelector('.border-\\[\\#ffeff9\\]') as HTMLElement
    expect(caption).toHaveClass('bg-white')
    expect(caption).toHaveClass('group-hover:bg-[#0f66f8]')
    expect(caption.querySelector('h3')).toHaveClass('group-hover:text-white')
  })
})
